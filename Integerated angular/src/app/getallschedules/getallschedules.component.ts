import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Schedule } from '../model/schedule';
import { ScheduleService } from '../services/scheduleservice';

@Component({
  selector: 'app-getallschedules',
  templateUrl: './getallschedules.component.html',
  styleUrls: ['./getallschedules.component.css']
})
export class GetallschedulesComponent implements OnInit {

  schedules:Schedule[];
  constructor(private scheduleService:ScheduleService) {
   let observable:Observable<Schedule[]>=scheduleService.getAllSchedules();
   observable.subscribe(
     schedulearray=>this.schedules=schedulearray);
   }
  ngOnInit(): void {  
  }

}
