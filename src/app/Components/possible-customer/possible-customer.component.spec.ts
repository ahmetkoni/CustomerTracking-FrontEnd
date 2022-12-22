import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PossibleCustomerComponent } from './possible-customer.component';

describe('PossibleCustomerComponent', () => {
  let component: PossibleCustomerComponent;
  let fixture: ComponentFixture<PossibleCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PossibleCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PossibleCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
