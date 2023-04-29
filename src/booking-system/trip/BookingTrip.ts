import { Departure } from "../../departure/Departure"
import { Passenger } from "../../human/passenger/Passenger"
import { Flight } from "../flight/Flight"
import { Bag } from "./Bag"

export enum TypeOfTicket{
        RETURN_TICKET,
        SINGLE_TICKET,
}
export class BookingTrip{
    private bookingReferenceNumber: string
    private price:number
    private bag?: Bag
    private flights: Flight[]=[]
    private passengers: Passenger
    private departurePlace:Departure
    private arrivePlace: Departure
    private typeOfTicket: TypeOfTicket
    constructor(bookingReferenceNumber: string, price:number, passenger:Passenger, departurePlace:Departure, arrivalPlace: Departure, typeOfTicket: TypeOfTicket)
    {
        this.bookingReferenceNumber= bookingReferenceNumber
        this.price = price
        this.passengers = passenger
        this.departurePlace = departurePlace
        this.arrivePlace = arrivalPlace
        this.typeOfTicket = typeOfTicket
        
    }
    addBookingFlight(flight: Flight){
        this.flights.push(flight)
    }

    
    setBag(bag:Bag){
        this.bag = bag

    }

    getPassenger(){
        return this.passengers
    }

    

    getGateFromFlight(){
        let gateOfFlight = []
        for(let flight of this.flights){
            gateOfFlight.push(flight.getGate())
        }
        return gateOfFlight
    }

    setTypeTicket(newTypeTicket:TypeOfTicket){
        this.typeOfTicket = newTypeTicket

    }

    getReturnTicket(){
        return this.typeOfTicket
    }

}