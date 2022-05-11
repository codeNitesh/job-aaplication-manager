from rest_framework import serializers
from .models import JobTracker

class JobTrackerSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = JobTracker
        fields = '__all__'