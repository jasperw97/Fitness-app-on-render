from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class ExerciseList(models.Model):
    name = models.CharField(max_length=200)
    def __str__(self):
        return str(self.name)


class Exercise(models.Model):
    name = models.ForeignKey(ExerciseList, blank=True, null=True, on_delete=models.SET_NULL)
    
    
    description = models.TextField(null=True, blank=True)
    load = models.FloatField(blank=True, null=True)
    sets = models.IntegerField(blank=True, null=True)
    reps = models.IntegerField(blank=True, null=True)
    def __str__(self):
        return str(self.name)

class Workout(models.Model):
    class Meta:
        ordering = ["-created"]
    title = models.CharField(max_length=200, default="My workout")
    exercises = models.ManyToManyField(Exercise)
    created = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    
    def __str__(self):
        return str(self.title)

class UserInfo(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(null=True, blank=True)

    def __str__(self):
        return str(self.user.username)