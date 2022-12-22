import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignInvestorAddComponent } from './foreign-investor-add.component';

describe('ForeignInvestorAddComponent', () => {
  let component: ForeignInvestorAddComponent;
  let fixture: ComponentFixture<ForeignInvestorAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForeignInvestorAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForeignInvestorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
