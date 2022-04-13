import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardShopNowComponent } from './card-shop-now.component';

describe('CardShopNowComponent', () => {
  let component: CardShopNowComponent;
  let fixture: ComponentFixture<CardShopNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardShopNowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardShopNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
