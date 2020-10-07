import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Passenger } from '../model/passenger';
import { PassengerService } from '../services/passengerService';

@Component({
  selector: 'add-passenger',
  templateUrl: './add-passenger.component.html',
  styleUrls: ['./add-passenger.component.css']
})
export class AddPassengerComponent implements OnInit {

  passengerForm:FormGroup;
  passengerNameCtrl:FormControl;
  passengerAgeCtrl:FormControl;
  passengerUINCtrl:FormControl;
  luggageCtrl:FormControl
  passenger:Passenger;

  constructor(private passengerService:PassengerService,fb:FormBuilder) { 
    this. passengerNameCtrl=fb.control("",[Validators.required]);
    this.passengerAgeCtrl=fb.control("",[Validators.required]);
    this.passengerUINCtrl=fb.control("",[Validators.required]);
    this.luggageCtrl=fb.control("",[Validators.required]);
    this.passengerForm=fb.group({
      passengerName: this.passengerNameCtrl,
      passengerAge: this.passengerAgeCtrl,
      passengerUIN:this. passengerUINCtrl,
      luggage:this.luggageCtrl
    });
  }

  ngOnInit(): void {
  }
addPassenger(){
  let passengerName:string=this.passengerNameCtrl.value;
  let passengerAge:number=this.passengerAgeCtrl.value;
  let passengerUIN:number=this.passengerUINCtrl.value;
  let luggage:number=this.luggageCtrl.value;
  this.passenger=new Passenger(1,passengerAge,passengerName,passengerUIN,luggage);
  let observable:Observable<Passenger>=this.passengerService.addPassenger(this.passenger);
  observable.subscribe(
    passengerArg=>{
      this.passenger=passengerArg;
      alert("Passenger Added")
    },      
    err=>{
      console.log("add passenger = "+err.message);
    }
  )
}
}