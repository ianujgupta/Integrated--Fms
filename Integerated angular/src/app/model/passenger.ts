export class Passenger{
    passengerNum:number;
    passengerAge:number;
    passengerName:string;
    passengerUIN:number;
    luggage:number;
    constructor(passengerNum:number,passengerAge:number,passengerName:string,passengerUIN:number,luggage:number){
        this.passengerNum=passengerNum;
    this.passengerAge=passengerAge;
    this.passengerName=passengerName;
    this.passengerUIN=passengerUIN;
    this.luggage=luggage;
    }
    
    getPassengerNum():number{
        return this.passengerNum;
    }
    getPassengerAge():number{
        return this.passengerAge;
    }
    getPassengerName():string{
        return this.passengerName;
    }
   getLuggage():number{
       return this.luggage;
   }
}