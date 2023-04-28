import { BookingSystem } from "../booking-system/BookingSystem"
import { Gate } from "./Gate"
import { Route } from "./Route"

export class Airport{
    private name: string
    private gate: Gate[]=[]
    private route: Route[]=[]
    private bookingSystem: BookingSystem[]=[]
    constructor(name: string){}
}