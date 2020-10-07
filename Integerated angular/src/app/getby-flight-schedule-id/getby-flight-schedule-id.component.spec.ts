import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbyFlightScheduleIdComponent } from './getby-flight-schedule-id.component';

describe('GetbyFlightScheduleIdComponent', () => {
  let component: GetbyFlightScheduleIdComponent;
  let fixture: ComponentFixture<GetbyFlightScheduleIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetbyFlightScheduleIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetbyFlightScheduleIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
