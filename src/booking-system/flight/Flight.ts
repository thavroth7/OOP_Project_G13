import { Aeroplan } from "../../airline/aeroplan/Aeroplan"
import { Gate } from "../../airport/Gate"
import { Route } from "../../airport/Route"
import { Date } from "../../date-time/Date"
import { Time } from "../../date-time/Time"

import { CoPilot } from "../../human/employee/Co-pilot"
import { Pilot } from "../../human/employee/Pilot"

export class Flight{
    private flightNumber: string
    private date: Date
    private departureTime: Time
    private arrivalTime: Time
    private route: Route
    private gate: Gate
    private aeroplan: Aeroplan
    private pilot: Pilot
    private coPilot: CoPilot
    constructor(flightNumber: string, date: Date, departureTime: Time, 
        arrivalTime: Time, route:Route, gate:Gate, aeroplan:Aeroplan, pilot:Pilot, coPilot:CoPilot)
    {
        this.flightNumber = flightNumber
        this.date = date
        this.departureTime = departureTime
        this.arrivalTime = arrivalTime
        this.route = route
        this.gate = gate
        this.aeroplan = aeroplan
        this.pilot = pilot
        this.coPilot = coPilot
    }
    getFlightDate(){
        return this.date
    }

    getPilotFromFlight(){
        return this.pilot.getPilotCardId()
    }
}