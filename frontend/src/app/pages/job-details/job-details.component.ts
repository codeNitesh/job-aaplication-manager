import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobTracker } from 'src/app/models/JobTracker';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  id!: number;
  job!: JobTracker
  constructor(
    private route: ActivatedRoute,
    private jobService: JobService) { }

  ngOnInit(): void {
    this.getJobApplicationDetailsById();
  }

  getJobApplicationDetailsById(){
    // get id from parameter

    this.id = this.route.snapshot.params['id'];
    // this.id = id;

    this.jobService.getJobApplicationById(this.id).subscribe(
      (res: JobTracker)=> this.job = res,
      (err)=> console.log(err)
    )
    
  }


  update(){
    this.jobService.UpdateJobApplicationById(this.id, this.job).subscribe(
      (res)=>{
        alert("The job has been updated")
      },
      (err)=> console.log(err) 
    )
  }

  delete(){
    this.jobService.deleteJobApplicationById(this.id).subscribe(
      (res)=>{
        alert("The job has been deleted")
      },
      (err)=> console.log(err) 
    )
  }
}
