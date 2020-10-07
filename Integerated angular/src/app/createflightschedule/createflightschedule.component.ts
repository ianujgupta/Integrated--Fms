import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightSchedule } from '../model/flightschedule';
import { FlightScheduleService } from '../services/flightscheduleservice';
@Component({
  selector: 'app-createflightschedule',
  templateUrl: './createflightschedule.component.html',
  styleUrls: ['./createflightschedule.component.css']
})
export class CreateflightscheduleComponent implements OnInit {

  flightschedule:FlightSchedule;
  constructor(private flightservice:FlightScheduleService) { }

  ngOnInit(): void {
  
  }
  saveFlightSchedule(form:any)
  {
    let details=form.value;
    let availableSeats=details.seats;
    let scheduleId=details.id;
    let flightNum=details.flightnumber;
    console.log(availableSeats,scheduleId,flightNum);
    this.flightschedule=new FlightSchedule(availableSeats,scheduleId,flightNum);
    let observable:Observable<FlightSchedule>=this.flightservice.addFlightSchedule(this.flightschedule);
    observable.subscribe(
      success=>
      {
        console.log(success.getAvailableSeats,success.getFlightNum,success.getScheduleId);
      console.log("flight schedule added");
      });
  }

}
