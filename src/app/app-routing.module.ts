import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumeComponent } from './resume/resume.component'

import { NotesLayoutComponent } from './layouts/notes-layout/notes-layout.component';

const routes: Routes = [
  { path: '', component: ResumeComponent },
  { path: 'notes', redirectTo: 'notes', pathMatch: 'full' },
  {
    path: '',
    component: NotesLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/notes-layout/notes-layout.module#NotesLayoutModule'
    }]
  }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
