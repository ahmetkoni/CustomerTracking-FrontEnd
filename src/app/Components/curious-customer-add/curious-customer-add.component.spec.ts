import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuriousCustomerAddComponent } from './curious-customer-add.component';

describe('CuriousCustomerAddComponent', () => {
  let component: CuriousCustomerAddComponent;
  let fixture: ComponentFixture<CuriousCustomerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuriousCustomerAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuriousCustomerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
