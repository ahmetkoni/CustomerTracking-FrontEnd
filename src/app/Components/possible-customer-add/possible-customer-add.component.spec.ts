import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PossibleCustomerAddComponent } from './possible-customer-add.component';

describe('PossibleCustomerAddComponent', () => {
  let component: PossibleCustomerAddComponent;
  let fixture: ComponentFixture<PossibleCustomerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PossibleCustomerAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PossibleCustomerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
