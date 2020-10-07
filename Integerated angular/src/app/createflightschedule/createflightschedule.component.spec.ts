import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateflightscheduleComponent } from './createflightschedule.component';

describe('CreateflightscheduleComponent', () => {
  let component: CreateflightscheduleComponent;
  let fixture: ComponentFixture<CreateflightscheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateflightscheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateflightscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
