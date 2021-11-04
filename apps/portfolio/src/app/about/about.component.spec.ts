import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AboutComponent } from './about.component';
import { TagComponent } from '../shared/components/tag/tag.component';
import { ForkEventComponent } from '../shared/components/fork-event/fork-event.component';
import { PushEventComponent } from '../shared/components/push-event/push-event.component';
import { IssuesEventComponent } from '../shared/components/issues-event/issues-event.component';
import { PullRequestEventComponent } from '../shared/components/pull-request-event/pull-request-event.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AboutComponent,
        TagComponent,
        ForkEventComponent,
        PushEventComponent,
        IssuesEventComponent,
        PullRequestEventComponent,
      ],
      imports: [BrowserAnimationsModule, HttpClientModule, FlexLayoutModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
