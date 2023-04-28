import { Departure } from "../../departure/Departure"
import { BookingFlight } from "../booking-flight/BookingFlight"

export class BookingTrip{
    private singleTicket: string
    private returnTicket: string
    private bookingFlight: BookingFlight[]=[]
    constructor(departurePlace:Departure, arrivalPlace: Departure)
    {}
    addBookingFlight(bookFlight: BookingFlight){
        this.bookingFlight.push(bookFlight)
    }
    setSingleTicket(singleTicket: string){
        return this.singleTicket
    }

    setReturnTicket(returnTicket: string){
        return this.returnTicket
    }

}