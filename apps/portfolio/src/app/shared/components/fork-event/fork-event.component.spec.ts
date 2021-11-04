import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkEventComponent } from './fork-event.component';

describe('ForkEventComponent', () => {
  let component: ForkEventComponent;
  let fixture: ComponentFixture<ForkEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForkEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForkEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
