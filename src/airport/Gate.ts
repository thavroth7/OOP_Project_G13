import { Flight } from "../booking-system/flight/Flight"

export class Gate{
    private gateId: string
    private flight: Flight[]=[]
    constructor(gateId: string){}

    addFilght(flight:Flight) {
        return this.flight.push(flight)
    }
}