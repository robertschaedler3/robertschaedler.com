import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContenteditableModule } from '@ng-stack/contenteditable';
import { MarkdownModule } from 'ngx-markdown';
// import { LMarkdownEditorModule } from 'ngx-markdown-editor';

import { NotesLayoutRoutingModule } from './notes-layout-routing.module';

import { NotebookComponent } from '../../notebook/notebook.component';
import { TextComponent } from '../../note-components/text/text.component';

@NgModule({
  declarations: [NotebookComponent, TextComponent],
  imports: [
    CommonModule,
    ContenteditableModule,
    FormsModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot(),
    // LMarkdownEditorModule,
    NotesLayoutRoutingModule
  ]
})
export class NotesLayoutModule { }
