import { Component, OnInit } from '@angular/core';
import { JobTracker } from 'src/app/models/JobTracker';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-adding',
  templateUrl: './job-adding.component.html',
  styleUrls: ['./job-adding.component.css']
})
export class JobAddingComponent implements OnInit {

  job: JobTracker = new JobTracker()

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
  }


  save(){
    this.jobService.saveJobApplication(this.job).subscribe(
      (res)=> alert("Job saved"),
      (err)=> console.log(err)
    )
  }
}
