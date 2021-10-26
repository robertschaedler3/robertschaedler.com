import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushEventComponent } from './push-event.component';

describe('PushEventComponent', () => {
  let component: PushEventComponent;
  let fixture: ComponentFixture<PushEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PushEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
