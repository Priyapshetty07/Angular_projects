import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListParentComponent } from './job-list-parent.component';

describe('JobListParentComponent', () => {
  let component: JobListParentComponent;
  let fixture: ComponentFixture<JobListParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobListParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobListParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
