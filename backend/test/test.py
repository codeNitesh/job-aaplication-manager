import json
from rest_framework.test import APITestCase

from api.models import JobTracker

class TestJobTracker(APITestCase):

    def setUp(self):
        JobTracker.objects.create(
            job_title = "TCE",
            company_name = "HackerEarth",
            application_starts_on = "2022-04-20",
            application_ends_on = "2022-05-31",
            package_offered = 15,
            is_referral_system_available = False,
            status = "Applied using Referral!",
        )
        
    def test_post_job_application(self):
        
        test_data = {
            "job_title": "SDE",
            "company_name": "Postman",
            "application_starts_on": "2022-04-20",
            "application_ends_on": "2022-05-31",
            "package_offered": 20,
            "is_referral_system_available": True,
            "referee_details": "Asked for referral",
            "status": "Referral Not Got",
        }
          
        response=self.client.post("/api/",data=test_data)
        result=response.json()
        self.assertEqual(response.status_code, 200)
        self.assertEqual(result['company_name'],"Postman")
        
        all_jobs = JobTracker.objects.all()
        self.assertEqual(len(all_jobs),2)
        
    def test_get_all_service_request(self):
        response=self.client.get("/api/")
        result=response.json()
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(result),1)
    
    def test_get_job_application_by_id(self):
        response=self.client.get('/api/1/')
        result=response.json()
        self.assertEqual(result['company_name'],"HackerEarth")
        self.assertEqual(response.status_code, 200)

    
    def test_update_service_request(self):
        updated_job_applcation_data = {
            "job_title": "Software Developer",
            "company_name": "Google Updated",
            "application_starts_on": "2022-04-20",
            "application_ends_on": "2022-05-31",
            "package_offered": 25,
            "is_referral_system_available": False,
            "status": "Pending",
        }
        response=self.client.put('/api/1/', content_type='application/json', data=json.dumps(updated_job_applcation_data))
        result=response.json()
        self.assertEqual(response.status_code, 200)
        self.assertEqual(result['job_title'], "Software Developer")
        
    def test_delete_service_request(self):
        request=self.client.delete("/api/1/")
        
        self.assertEqual(request.status_code,200)
        
        request1=self.client.get("/api/")
        response1=request1.json()
        
        self.assertEqual(len(response1),0)
        