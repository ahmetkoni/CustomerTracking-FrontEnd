import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorUpdateComponent } from './investor-update.component';

describe('InvestorUpdateComponent', () => {
  let component: InvestorUpdateComponent;
  let fixture: ComponentFixture<InvestorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestorUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
