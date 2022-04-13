import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainParentComponent } from './domain-parent.component';

describe('DomainParentComponent', () => {
  let component: DomainParentComponent;
  let fixture: ComponentFixture<DomainParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomainParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
