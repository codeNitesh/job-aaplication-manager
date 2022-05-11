from .serializers import JobTrackerSerializer
from .models import JobTracker

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist


class JobTrackerAPI(APIView):

    def get(self, request):
        jobs = JobTracker.objects.all()
        serializer = JobTrackerSerializer(jobs, many=True)
        return Response(serializer.data)

    
    def post(self, request):
        serializer = JobTrackerSerializer(data = request.data)
        
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

class JobTrackerAPIId(APIView):
    def get(self, request, pk):
        try:
            job = JobTracker.objects.get(pk=pk)
        except ObjectDoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        serializers = JobTrackerSerializer(job)
        return Response(serializers.data)
        
    def put(self, request, pk):
        try:
            job = JobTracker.objects.get(pk=pk)
        except ObjectDoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        serializer = JobTrackerSerializer(job, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk):
        try:
            job = JobTracker.objects.get(pk=pk)
        except ObjectDoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        job.delete()
        return Response(status=status.HTTP_200_OK)
    
    
    