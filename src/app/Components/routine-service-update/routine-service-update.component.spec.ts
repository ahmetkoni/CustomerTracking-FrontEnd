import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineServiceUpdateComponent } from './routine-service-update.component';

describe('RoutineServiceUpdateComponent', () => {
  let component: RoutineServiceUpdateComponent;
  let fixture: ComponentFixture<RoutineServiceUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutineServiceUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutineServiceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
