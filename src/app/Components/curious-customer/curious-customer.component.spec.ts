import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuriousCustomerComponent } from './curious-customer.component';

describe('CuriousCustomerComponent', () => {
  let component: CuriousCustomerComponent;
  let fixture: ComponentFixture<CuriousCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuriousCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuriousCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
