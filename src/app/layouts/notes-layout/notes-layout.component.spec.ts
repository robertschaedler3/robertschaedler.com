import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesLayoutComponent } from './notes-layout.component';

describe('NotesLayoutComponent', () => {
  let component: NotesLayoutComponent;
  let fixture: ComponentFixture<NotesLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
