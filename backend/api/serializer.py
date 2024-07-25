from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from api.models import Workout, Exercise, UserInfo
from django.contrib.auth.models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class ExerciseSerializer(ModelSerializer):
    name = serializers.StringRelatedField(many=False)
    class Meta:
        model = Exercise
        fields = "__all__"

class WorkoutSerializer(ModelSerializer):
    exercises = ExerciseSerializer(many=True)
    user = serializers.StringRelatedField(many=False)
    class Meta:
        model = Workout
        fields = "__all__"

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        username = attrs.get("username")
        password = attrs.get("password")
        
        # Check if user exists
        try:
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            raise serializers.ValidationError('User does not exist')

        # Validate password if user exists
        if not user.check_password(password):
            raise serializers.ValidationError('Invalid password')

        # Call the parent method to generate the token
        data = super().validate(attrs)
        
        # Add custom claims or data to the token if needed
        data['username'] = user.username
        
        return data

    def get_token(self, user):
        token = super().get_token(user)
        token['username'] = user.username
        return token
    
class UserInfoSerializer(ModelSerializer):
    user = serializers.StringRelatedField(many=False)
    class Meta:
        model = UserInfo
        fields = "__all__"
