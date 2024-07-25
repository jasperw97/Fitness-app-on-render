from django.urls import path, include
from api import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path("user/register/", views.CreateUserView.as_view(), name="register"),
    path("token/", views.MyTokenObtainPairView.as_view()),
    path("token/refresh", TokenRefreshView.as_view()),
    path("auth/", include("rest_framework.urls")),
    path("workouts", views.AllWorkouts.as_view()),
    path("create-workout", views.CreateWorkout.as_view()),
    path("delete-workout/<int:pk>", views.DeleteWorkout.as_view()),
    path("update-workout", views.UpdateWorkout.as_view()),
    path("userinfo/<str:pk>", views.UserInfoView.as_view())
]