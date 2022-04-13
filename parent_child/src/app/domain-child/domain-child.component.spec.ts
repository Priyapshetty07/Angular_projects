import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainChildComponent } from './domain-child.component';

describe('DomainChildComponent', () => {
  let component: DomainChildComponent;
  let fixture: ComponentFixture<DomainChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomainChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
