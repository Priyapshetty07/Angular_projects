import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListParentComponent } from './contact-list-parent.component';

describe('ContactListParentComponent', () => {
  let component: ContactListParentComponent;
  let fixture: ComponentFixture<ContactListParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactListParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
