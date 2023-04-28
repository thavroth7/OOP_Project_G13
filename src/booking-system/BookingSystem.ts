import { Passenger } from "../human/passenger/Passenger"
import { BookingTrip } from "./trip/BookingTrip"


export class BookingSystem{
    private bookingReferenceNumber: string
    private price: number
    private bookingTrip: BookingTrip[]=[]
    private passengers: Passenger[]=[]
   
    constructor(bookingReferenceNumber: string){
        this.bookingReferenceNumber=bookingReferenceNumber
    }
   
}