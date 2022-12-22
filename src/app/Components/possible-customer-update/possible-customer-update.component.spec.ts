import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PossibleCustomerUpdateComponent } from './possible-customer-update.component';

describe('PossibleCustomerUpdateComponent', () => {
  let component: PossibleCustomerUpdateComponent;
  let fixture: ComponentFixture<PossibleCustomerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PossibleCustomerUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PossibleCustomerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
