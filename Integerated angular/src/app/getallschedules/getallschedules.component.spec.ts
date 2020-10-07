import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallschedulesComponent } from './getallschedules.component';

describe('GetallschedulesComponent', () => {
  let component: GetallschedulesComponent;
  let fixture: ComponentFixture<GetallschedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallschedulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallschedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
