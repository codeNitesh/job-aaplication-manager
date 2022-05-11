import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobAddingComponent } from './pages/job-adding/job-adding.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { JobListingComponent } from './pages/job-listing/job-listing.component';

const routes: Routes = [
  {
    path: '',
    component: JobListingComponent
  },
  {
    path: 'new',
    component: JobAddingComponent
  },
  {
    path: ':id',
    component: JobDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
