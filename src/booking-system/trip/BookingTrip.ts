import { Departure } from "../../departure/Departure"


export enum TypeOfTicket{
        RETURN_TICKET,
        SINGLE_TICKET,
}
export class BookingTrip{
    
  
    private departurePlace:Departure
    private arrivePlace: Departure
    private typeOfTicket: TypeOfTicket
    constructor(departurePlace:Departure, arrivalPlace: Departure, typeOfTicket: TypeOfTicket)
    {
        this.departurePlace = departurePlace
        this.arrivePlace = arrivalPlace
        this.typeOfTicket = typeOfTicket
    }
   


}