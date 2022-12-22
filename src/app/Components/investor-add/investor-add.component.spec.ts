import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorAddComponent } from './investor-add.component';

describe('InvestorAddComponent', () => {
  let component: InvestorAddComponent;
  let fixture: ComponentFixture<InvestorAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestorAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
