
import { Airline } from "../airline/Airline"
import { Passenger } from "../human/passenger/Passenger"
import { Gate } from "./Gate"
import { Route } from "./Route"

export class Airport{
    private name: string
    private gate: Gate[]=[]
    private route: Route[]=[]
    private arilines: Airline[]=[]
    constructor(name: string){
        this.name = name
    }

    getName() {
        return this.name
    }
    addGate(gate: Gate) {
        return this.gate.push(gate)
    }
    addRoute(route: Route) {
        return this.route.push(route)
    }
    // addBookingTrip(booking:BookingTrip){
    //     this.bookingTrip.push(booking)
    // }

    addAirline(airline:Airline){
        this.arilines.push(airline)
    }

     //As an airport controller, I need to get the full details of a passenger’s trip from their Booking Reference Number (flights, bags, customer information…)

    findPassengerTrip(passenger:Passenger){
        for(let airline of this.arilines){
            for(let trip of airline.getBookingTrip())
                if(trip.getPassenger() == passenger){
                    return trip
            }
            return undefined
           
        }
    }
}