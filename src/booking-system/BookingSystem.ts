import { Passenger } from "../human/passenger/Passenger"
import { BookingTrip } from "./trip/BookingTrip"


export class BookingSystem{
    private bookingReferenceNumber: string
    private passengers: Passenger[]=[]
    private trips: BookingTrip[]=[]
    constructor(bookingReferenceNumber: string){
        this.bookingReferenceNumber=bookingReferenceNumber
    }



}