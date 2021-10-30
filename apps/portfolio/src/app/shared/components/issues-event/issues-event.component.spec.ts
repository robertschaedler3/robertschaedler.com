import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesEventComponent } from './issues-event.component';

describe('IssuesEventComponent', () => {
  let component: IssuesEventComponent;
  let fixture: ComponentFixture<IssuesEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuesEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
