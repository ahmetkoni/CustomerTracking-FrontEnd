import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineServiceAddComponent } from './routine-service-add.component';

describe('RoutineServiceAddComponent', () => {
  let component: RoutineServiceAddComponent;
  let fixture: ComponentFixture<RoutineServiceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutineServiceAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutineServiceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
