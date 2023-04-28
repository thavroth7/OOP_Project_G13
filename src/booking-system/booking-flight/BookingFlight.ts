import { Flight } from "../flight/Flight"
import { Meal } from "./Meal"

export class BookingFlight{
    private flights:Flight[]=[]
    private meals:Meal
    constructor(flight:Flight, meals: Meal)
    {}
    addFlight(flight: Flight){
        for(let flight of this.flights){
            if(flight != flight){
                this.flights.push(flight)
            }
        }
       
    }
}