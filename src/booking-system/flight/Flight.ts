import { Aeroplan } from "../../airline/aeroplan/Aeroplan"
import { Gate } from "../../airport/Gate"
import { Route } from "../../airport/Route"
import { DateTime } from "../../date-time/DateTime"
import { Departure } from "../../departure/Departure"
import { CoPilot } from "../../human/employee/Co-pilot"
import { Pilot } from "../../human/employee/Pilot"

export class Flight{
    private flightNumber: string
    private departureDateTime: DateTime
    private arrivalDateTime: DateTime
    private route: Route
    private gate: Gate
    private aeroplane: Aeroplan
    private pilot: Pilot
    private coPilot: CoPilot
    constructor(flightNumber: string, departurePlace: Departure, arrivalPlace: Departure, departureDateTime: DateTime, arrivalDateTime: DateTime)
    {}


}