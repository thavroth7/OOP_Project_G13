import { Flight } from "../booking-system/flight/Flight";
import { Departure } from "../departure/Departure";

export class Route{
    private flights: Flight[]=[]
    constructor(departurePlace:Departure, arrivalPlace: Departure)
    {}
}