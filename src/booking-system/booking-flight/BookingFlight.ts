import { Flight } from "../flight/Flight"
import { Meal } from "./Meal"

export class BookingFlight{
    private flights:Flight
    private meals:Meal
    constructor(flight:Flight, meals: Meal)
    { 
        this.flights = flight
        this.meals = meals
    }
    
}