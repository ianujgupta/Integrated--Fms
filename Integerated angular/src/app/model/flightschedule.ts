export class FlightSchedule{

    private availableSeats:number;
    private scheduleId:number;
    private flightNum:number;
    constructor(availableSeats:number,scheduleId:number,flightNum:number)
    {
        this.availableSeats=this.availableSeats;
        this.flightNum=this.flightNum;
        this.scheduleId=this.scheduleId;
     }
     getAvailableSeats():number{
         return this.availableSeats;
     }
     getScheduleId():number{
         return this.scheduleId;
     }
     getFlightNum():number{
         return this.flightNum;
     }
}