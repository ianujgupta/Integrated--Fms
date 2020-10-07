import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallflightscheduleComponent } from './getallflightschedule.component';

describe('GetallflightscheduleComponent', () => {
  let component: GetallflightscheduleComponent;
  let fixture: ComponentFixture<GetallflightscheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallflightscheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallflightscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
