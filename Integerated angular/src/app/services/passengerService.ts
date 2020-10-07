  
import { Injectable } from '@angular/core';
import { from, observable, Observable } from 'rxjs';
import { Passenger } from '../model/passenger';
import {HttpClient} from '@angular/common/http'

@Injectable()
export class PassengerService{

    baseUrl="http://localhost:8081/passengers";

    constructor(private http:HttpClient){

    }

    addPassenger(passenger:Passenger):Observable<Passenger>{
     let url=this.baseUrl+"/add";   
     let observable:Observable<Passenger>=this.http.post<Passenger>(url,passenger);
     return observable;
    }
    viewByPassengerNum(passengerNum:number):Observable<Passenger>{
        let url=this.baseUrl+"/get/"+passengerNum;
        let observable:Observable<Passenger>=this.http.get<Passenger>(url);
        return observable;
    }

   viewAllPassengers():Observable<Passenger[]>{
       let url=this.baseUrl;
       let observable:Observable<Passenger[]>=this.http.get<Passenger[]>(url);
       return observable;
   }
   delete(passengerNum:number):Observable<void>{
    let url=this.baseUrl+"/delete/"+passengerNum;
    let observable:Observable<void>=this.http.delete<void>(url);
    return observable;
}


}