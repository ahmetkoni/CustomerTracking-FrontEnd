import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineServiceComponent } from './routine-service.component';

describe('RoutineServiceComponent', () => {
  let component: RoutineServiceComponent;
  let fixture: ComponentFixture<RoutineServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutineServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutineServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
