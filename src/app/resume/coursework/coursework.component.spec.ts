import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseworkComponent } from './coursework.component';

describe('CourseworkComponent', () => {
  let component: CourseworkComponent;
  let fixture: ComponentFixture<CourseworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
