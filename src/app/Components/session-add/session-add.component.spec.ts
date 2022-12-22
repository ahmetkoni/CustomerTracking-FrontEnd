import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionAddComponent } from './session-add.component';

describe('SessionAddComponent', () => {
  let component: SessionAddComponent;
  let fixture: ComponentFixture<SessionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
