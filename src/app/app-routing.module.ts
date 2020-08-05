import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumeComponent } from './resume/resume.component'
import { ResumeLayoutComponent } from './resume-layout/resume-layout.component';


const routes: Routes = [
  { path: '', component: ResumeComponent },
  { path: 'resume', component: ResumeLayoutComponent },
  { path: '**', redirectTo: '/' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
