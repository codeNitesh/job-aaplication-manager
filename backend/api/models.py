from django.db import models
import datetime

class JobTracker(models.Model):
    job_title = models.CharField(max_length=60)
    company_name = models.CharField(max_length=60)
    application_starts_on = models.DateField(blank=True)
    application_ends_on = models.DateField(blank=True)
    package_offered = models.IntegerField()
    is_referral_system_available = models.BooleanField(default=False)
    referee_details = models.TextField(max_length=100, blank=True)
    status = models.CharField(max_length=20)
    created_on = models.DateField(default=datetime.date.today)
    modified_on = models.DateField(auto_now=True)
    
    def __str__(self):
        return self.job_title + " at " + self.company_name + " with " + str(self.package_offered) + " LPA package"