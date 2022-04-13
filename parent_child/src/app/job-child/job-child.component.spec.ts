import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobChildComponent } from './job-child.component';

describe('JobChildComponent', () => {
  let component: JobChildComponent;
  let fixture: ComponentFixture<JobChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
