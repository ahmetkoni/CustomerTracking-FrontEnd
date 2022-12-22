import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignInvestorComponent } from './foreign-investor.component';

describe('ForeignInvestorComponent', () => {
  let component: ForeignInvestorComponent;
  let fixture: ComponentFixture<ForeignInvestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForeignInvestorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForeignInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
