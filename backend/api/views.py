from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import mixins, generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from api.serializer import WorkoutSerializer, UserSerializer, MyTokenObtainPairSerializer, UserInfoSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from api.models import Workout, Exercise, ExerciseList, UserInfo
from django.contrib.auth.models import User
# Create your views here.
class AllWorkouts(APIView):
    def get(self, request):
        workouts = Workout.objects.all()
        serialized = WorkoutSerializer(workouts, many=True)
        return Response(serialized.data) 

class CreateWorkout(mixins.CreateModelMixin, APIView):
    def post(self, request):
        data = request.data
        user = User.objects.get(username=data["user"])
        workout = Workout.objects.create(title=data["title"], user=user)
        for exercise in data["exercises"]:
            exersice_name, created = ExerciseList.objects.get_or_create(name=exercise["name"])
            exercise_object = Exercise.objects.create(name=exersice_name, load=exercise["load"], sets=exercise["sets"], reps=exercise["reps"])
            workout.exercises.add(exercise_object)
        
        serialized = WorkoutSerializer(workout)

        return Response(serialized.data)

class DeleteWorkout(mixins.DestroyModelMixin, APIView):
    permission_classes = [IsAuthenticated]
    def delete(self, request, pk):
        workout = Workout.objects.get(pk=pk)
        workout.delete()
        return Response("Deleted!")

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


    def perform_create(self, serializer):
        user = serializer.save()
        data = self.request.data
        UserInfo.objects.create(user=user, bio=data["bio"])
        

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class UpdateWorkout(mixins.CreateModelMixin, APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        data = request.data
        workout = Workout.objects.get(pk=data["id"])
        print(workout.id)
        workout.delete()
        user = User.objects.get(username=data["user"])
        new_workout = Workout.objects.create(title=data["title"], user=user)
        for exercise in data["exercises"]:
            exersice_name, created = ExerciseList.objects.get_or_create(name=exercise["name"])
            exercise_object = Exercise.objects.create(name=exersice_name, load=exercise["load"], sets=exercise["sets"], reps=exercise["reps"])
            new_workout.exercises.add(exercise_object)
        return Response("ok")

class UserInfoView(APIView):
    def get(self, request, pk):
        try:
            user = User.objects.get(username=pk)
            info = UserInfo.objects.get(user=user)
            serialized = UserInfoSerializer(info, many=False)
            return Response(serialized.data)
        except:
            return Response()
