from django.urls import path
from . import views

urlpatterns = [
    path('', views.JobTrackerAPI.as_view(), name="job-get-all-post"),
    path('<int:pk>/', views.JobTrackerAPIId.as_view(), name="job-get-one-put-delete"),
] 