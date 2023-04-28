import { Seat } from "./Seat"

export class Aeroplan{
    private registrationNumber: string
    private seats: Seat[]=[]
    constructor(registrationNumber: string)
    {
        this.registrationNumber = registrationNumber
    }

    addSeats(seat:Seat) {
        return this.seats.push(seat)
    }
}