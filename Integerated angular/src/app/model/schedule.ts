export class Schedule
{
    private sourceAirport:string;
    private destinationAirport:string;
    arrivalTime;
    departureTime;
    private airportCode:string;

    constructor(sourceAirport:string,destinationAirport:string,arrivalTime,departureTime,airportCode:string)
    {
            this.airportCode=airportCode;
            this.arrivalTime=arrivalTime;
            this.departureTime=departureTime;
            this.sourceAirport=sourceAirport;
            this.destinationAirport=destinationAirport;
    }
    getAirportCode():string{
        return this.airportCode;
    }
    getDepartureTime(){
        return this.departureTime
    }
    getArrivalTime()
    {
        return this.arrivalTime;
    }
    getsourceAirport():string{
        return this.sourceAirport;
    }
    getdestinationAirport():string{
        return this.destinationAirport;
    }
    

}