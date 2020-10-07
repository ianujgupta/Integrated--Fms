import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Schedule } from '../model/schedule';
import { ScheduleService } from '../services/scheduleservice';
@Component({
  selector: 'app-createschedule',
  templateUrl: './createschedule.component.html',
  styleUrls: ['./createschedule.component.css']
})

export class CreatescheduleComponent implements OnInit {
  schedule:Schedule;
  constructor(private scheduleservice:ScheduleService) { 
  }
  ngOnInit():void{}

  saveSchedule(form:any)
  {
    let details=form.value;
    let fromAirport=details.sourceAirport;
  let toAirport=details.destinationAirport;
  let airportCode=details.airportCode;
  let arrivalTime=details.arrival;
  console.log(arrivalTime);
 let at=new Date(arrivalTime);
  let departureTime=details.departureTime;
 let dt=new Date(departureTime);
 console.log("time conversion");
 console.log(at.getTime());
 console.log(dt.getTime());
  console.log(airportCode);
  console.log("from airport "+fromAirport,"to Airport"+toAirport);
  this.schedule=new Schedule(fromAirport,toAirport,at.getTime(),dt.getTime(),airportCode);
  let result:Observable<Schedule>=this.scheduleservice.addSchedule(this.schedule);
  alert("flight schedule created successfully");

  result.subscribe(
           response=>{
 console.log(response.getAirportCode,response.getArrivalTime,response.getDepartureTime,
 response.getdestinationAirport,response.getsourceAirport);
           }
  );

          }
        }
