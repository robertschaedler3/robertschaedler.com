import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeLayoutComponent } from './resume-layout.component';


const routes: Routes = [
  { path: '', component: ResumeLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeLayoutRoutingModule { }
