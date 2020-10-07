import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Schedule } from '../model/schedule';
@Injectable()
export class ScheduleService{
    baseUrl="http://localhost:8085/schedules"; //port number is 8085
    constructor(private http:HttpClient)
    {

    }
    addSchedule(schedule:Schedule):Observable<Schedule>
    {
        let addurl=this.baseUrl+"/add";
        let observe:Observable<Schedule>=this.http.post<Schedule>(addurl,schedule);
        return observe;
    }
    getAllSchedules():Observable<Schedule[]>
    {
        let observe:Observable<Schedule[]>=this.http.get<Schedule[]>(this.baseUrl);
        return observe;
    }
}