import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightSchedule } from '../model/flightschedule';
@Injectable()
export class FlightScheduleService{
    baseurl="http://localhost:8888/flightschedules";
    constructor(private http:HttpClient)
    {

    }
    addFlightSchedule(flightschedules:FlightSchedule):Observable<FlightSchedule>
    {
        let addurl=this.baseurl+"/add";
        let result:Observable<FlightSchedule>=this.http.post<FlightSchedule>(addurl,flightschedules);
        return result;
    }
    getAllFlightSchedules():Observable<FlightSchedule[]>{
        let observable:Observable<FlightSchedule[]>=this.http.get<FlightSchedule[]>(this.baseurl);
        return observable;
    }
    getbyFlightScheduleId(flightscheduleId:number):Observable<FlightSchedule>
    {
        let url=this.baseurl+"/get/"+flightscheduleId;
        let observable:Observable<FlightSchedule>=this.http.get<FlightSchedule>(url);
        return observable;
    }




}