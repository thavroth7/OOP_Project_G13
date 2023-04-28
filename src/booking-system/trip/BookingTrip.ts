import { Departure } from "../../departure/Departure"
import { BookingFlight } from "../booking-flight/BookingFlight"

export enum TypeOfTicket{
        RETURN_TICKET,
        SINGLE_TICKET,
}
export class BookingTrip{
    
    private bookingFlights: BookingFlight[]=[]
    private departurePlace:Departure
    private arrivePlace: Departure
    private typeOfTicket: TypeOfTicket
    constructor(departurePlace:Departure, arrivalPlace: Departure, typeOfTicket: TypeOfTicket)
    {
        this.departurePlace = departurePlace
        this.arrivePlace = arrivalPlace
        this.typeOfTicket = typeOfTicket
    }
    addBookingFlight(bookFlight: BookingFlight){
        for(let flight of this.bookingFlights){
            if(flight != bookFlight){
                this.bookingFlights.push(bookFlight)
            }
        }
       
    }


}