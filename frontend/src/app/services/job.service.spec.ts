import { TestBed, async, inject } from '@angular/core/testing';
import { JobService } from './job.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { JobTracker } from '../models/JobTracker';

describe('JobService', () => {
  let jobService: JobService;
  let httpTestingController: HttpTestingController;
  let job: JobTracker;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    job = {
      id: 1,
      job_title: "SDE Intern",
      company_name: "ABC Company",
      application_starts_on: "2022-05-10",
      application_ends_on: "2022-05-10",
      package_offered: 20,
      is_referral_system_available: false,
      referee_details: "",
      status: "Done"
    };
  });

  beforeEach(inject([JobService], (service: JobService) => {
    jobService = service;
  }));

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should return all jobs', () => {
    let result: JobTracker[] = [];
    jobService.getAllJobsApplications().subscribe((r: any) => {
      result = r;
      expect(r.length).toBe(1);
      expect(result[0]).toEqual(job);
    });
    const req = httpTestingController.expectOne(jobService.baseUrl);
    expect(req.request.method).toBe('GET');
    req.flush([job]);
  });

  it('should add a new job', () => {
    jobService.saveJobApplication(job).subscribe((res) => {
      expect(res).toEqual(job);
    });

    const req = httpTestingController.expectOne(jobService.baseUrl);
    expect(req.request.method).toBe('POST');
    req.flush(job);
  });

  it('should get one job by id', () => {
    jobService.getJobApplicationById(1).subscribe((res) => {
      expect(res).toEqual(job);
    });

    const req = httpTestingController.expectOne(
      jobService.baseUrl + job.id + '/'
    );
    expect(req.request.method).toBe('GET');
    req.flush(job);
  });

  it('should delete one job by id', () => {
    jobService.deleteJobApplicationById(1).subscribe((res) => {
      expect(res).toEqual(job);
    });

    const req = httpTestingController.expectOne(
      jobService.baseUrl + job.id + '/'
    );
    expect(req.request.method).toBe('DELETE');
    req.flush(job);
  });

  it('should update one job by id', () => {
    jobService
      .UpdateJobApplicationById(1, job)
      .subscribe((res) => {
        expect(res).toEqual(job);
      });

    const req = httpTestingController.expectOne(
      jobService.baseUrl +job.id + '/'
    );
    expect(req.request.method).toBe('PUT');
    req.flush(job);
  });

});
