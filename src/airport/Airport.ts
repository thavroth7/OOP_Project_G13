import { BookingSystem } from "../booking-system/BookingSystem"
import { Gate } from "./Gate"
import { Route } from "./Route"

export class Airport{
    private name: string
    private gate: Gate[]=[]
    private route: Route[]=[]
    private bookingSystem: BookingSystem[]=[]
    constructor(name: string){}

    getName() {
        return this.name
    }
    addGate(gate: Gate) {
        return this.gate.push(gate)
    }
    addRoute(route: Route) {
        return this.route.push(route)
    }
    addSystemBooking(booksystem: BookingSystem) {
        return this.bookingSystem.push(booksystem)
    }
}