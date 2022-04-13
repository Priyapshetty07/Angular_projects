import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListPComponent } from './job-list-p.component';

describe('JobListPComponent', () => {
  let component: JobListPComponent;
  let fixture: ComponentFixture<JobListPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobListPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobListPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
