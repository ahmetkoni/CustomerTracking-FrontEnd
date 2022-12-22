import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignInvestorUpdateComponent } from './foreign-investor-update.component';

describe('ForeignInvestorUpdateComponent', () => {
  let component: ForeignInvestorUpdateComponent;
  let fixture: ComponentFixture<ForeignInvestorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForeignInvestorUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForeignInvestorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
