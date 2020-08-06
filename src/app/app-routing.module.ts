import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumeComponent } from './resume/resume.component';


const routes: Routes = [
  { path: '', component: ResumeComponent },
  { path: 'resume', loadChildren: () => import('./resume-layout/resume-layout.module').then(m => m.ResumeLayoutModule) },
  { path: '**', redirectTo: '/' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
