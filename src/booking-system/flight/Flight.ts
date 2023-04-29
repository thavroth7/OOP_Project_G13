import { Aeroplan } from "../../airline/aeroplan/Aeroplan"
import { Gate } from "../../airport/Gate"
import { Route } from "../../airport/Route"
import { DateTime } from "../../date-time/Time"
import { Departure } from "../../departure/Departure"
import { CoPilot } from "../../human/employee/Co-pilot"
import { Pilot } from "../../human/employee/Pilot"

export class Flight{
    private flightNumber: string
    private departureDateTime: DateTime
    private arrivalDateTime: DateTime
    private route: Route
    private gate: Gate
    private aeroplan: Aeroplan
    private pilot: Pilot
    private coPilot: CoPilot
    constructor(flightNumber: string, departureDateTime: DateTime, 
        arrivalDateTime: DateTime, route:Route, gate:Gate, aeroplan:Aeroplan, pilot:Pilot, coPilot:CoPilot)
    {
        this.flightNumber = flightNumber
        this.departureDateTime = departureDateTime
        this.arrivalDateTime = arrivalDateTime
        this.route = route
        this.gate = gate
        this.aeroplan = aeroplan
        this.pilot = pilot
        this.coPilot = coPilot
    }
    getFlightDate(){
        return this.departureDateTime
    }
    getPilotFromFlight(){
        return this.pilot.getPilotCardId()
    }
 


}