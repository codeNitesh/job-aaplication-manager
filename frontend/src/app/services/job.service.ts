import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobTracker } from '../models/JobTracker';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  public baseUrl = 'http://localhost:8000/api/'

  constructor(
    private http: HttpClient,
  ) { }

  getAllJobsApplications(): Observable<any>{
    return this.http.get(this.baseUrl)
  }

  getJobApplicationById(id: number): Observable<any>{
    return this.http.get(this.baseUrl + id + "/")
  }

  saveJobApplication(job: JobTracker): Observable<any>{
    return this.http.post(this.baseUrl, job)
  }

  UpdateJobApplicationById(id: number, job: JobTracker): Observable<any>{
    return this.http.put(this.baseUrl + id + "/", job)
  }

  deleteJobApplicationById(id: number): Observable<any>{
    return this.http.delete(this.baseUrl + id + "/")
  }
}
