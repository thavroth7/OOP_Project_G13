import { Flight } from "../flight/Flight"
import { Meal } from "./Meal"

export class BookingFlight{
    // private flight:Flight
    private meals:Meal
    constructor(flight:Flight, meals: Meal)
    {}
}