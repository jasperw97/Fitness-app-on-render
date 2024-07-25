from django.contrib import admin
from api.models import Workout, Exercise, ExerciseList, UserInfo
# Register your models here.
admin.site.register(Workout)
admin.site.register(Exercise)
admin.site.register(ExerciseList)
admin.site.register(UserInfo)