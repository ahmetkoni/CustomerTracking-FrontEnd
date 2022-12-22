import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuriousCustomerUpdateComponent } from './curious-customer-update.component';

describe('CuriousCustomerUpdateComponent', () => {
  let component: CuriousCustomerUpdateComponent;
  let fixture: ComponentFixture<CuriousCustomerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuriousCustomerUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuriousCustomerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
