import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotebookComponent } from 'src/app/notebook/notebook.component';

const routes: Routes = [
  { path: 'notes', component: NotebookComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesLayoutRoutingModule { }
