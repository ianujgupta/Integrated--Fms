import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightSchedule } from '../model/flightschedule';
import { FlightScheduleService } from '../services/flightscheduleservice';

@Component({
  selector: 'app-getallflightschedule',
  templateUrl: './getallflightschedule.component.html',
  styleUrls: ['./getallflightschedule.component.css']
})
export class GetallflightscheduleComponent implements OnInit {

  flightschedules:FlightSchedule[];
  
  constructor(private flightscheduleservice:FlightScheduleService) { 
  let observable:Observable<FlightSchedule[]>=flightscheduleservice.getAllFlightSchedules();
  observable.subscribe(
    responseArr=>{
      this.flightschedules=responseArr;
      console.log(this.flightschedules);
    },
    err=>
    {
      console.log("wrong in all flight schedule "+err.message);
    }
  );
  }

  ngOnInit(): void {
  }

}
