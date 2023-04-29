import { Flight } from "../booking-system/flight/Flight"
import { Date } from "../date-time/Date"

export class Gate{
    private gateId: string
    private flight: Flight[]=[]
    constructor(gateId: string){
        this.gateId = gateId
    }

    addFilght(flight:Flight) {
        return this.flight.push(flight)
    }
}