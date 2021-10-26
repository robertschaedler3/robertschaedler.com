import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullRequestEventComponent } from './pull-request-event.component';

describe('PullRequestEventComponent', () => {
  let component: PullRequestEventComponent;
  let fixture: ComponentFixture<PullRequestEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PullRequestEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PullRequestEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
