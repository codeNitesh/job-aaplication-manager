import { Component, OnInit } from '@angular/core';
import { JobTracker } from 'src/app/models/JobTracker';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.css']
})
export class JobListingComponent implements OnInit {

  jobs: JobTracker[] = [];

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.getAllJobApplications()
  }

  getAllJobApplications(){
    this.jobService.getAllJobsApplications().subscribe(
      (res: JobTracker[])=> this.jobs = res,
      (err)=> console.log(err)
    )
  }

}
