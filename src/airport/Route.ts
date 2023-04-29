import { Flight } from "../booking-trip/flight/Flight";
import { Departure } from "../departure/Departure";

export class Route{
    private flights: Flight[]=[]
    private departurePlace: Departure
    private departureArrive:Departure
    constructor(departurePlace:Departure, departureArrive: Departure){
        this.departurePlace = departurePlace
        this.departureArrive = departureArrive
    }

    addFlight(flight:Flight) {
        return this.flights.push(flight)
    }
}