import { Component, OnInit } from '@angular/core';
import { Passenger } from '../model/passenger';
import { PassengerService } from '../services/passengerService';
import { observable, Observable } from 'rxjs';
@Component({
  selector: 'passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.css']
})
export class PassengerListComponent {

  passengers:Passenger[];

  constructor(private passengerService:PassengerService) {
    let observable:Observable<Passenger[]>=passengerService.viewAllPassengers();
    observable.subscribe(
      passengerArray=>
      this.passengers=passengerArray);
      
    }
    delete(passengerNum:number){
      let observable=this.passengerService.delete(passengerNum);
      observable.subscribe(
        res=>{
         this.deletePassenger(passengerNum);
        },
        err=>{
          console.log("inside deletePassenger, err is "+err.message);
        }
      );
       }
     deletePassenger(passengerNum:number):void{
       console.log("before deleting passengers,length="+this.passengers.length);
       for(let i=0 ;i<this.passengers.length;i++ ){
        let passenger=this.passengers[i];
         if(passenger.passengerNum===passengerNum){
              this.passengers.splice(i,1);
         }
      }
     }
   }