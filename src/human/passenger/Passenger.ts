import { BookingTrip } from "../../booking-system/trip/BookingTrip";
import { Gender, Person } from "../Person";

export class Passenger extends Person{
    private bookingTrips: BookingTrip
    constructor(
        name: string,
        age: number,
        gender: Gender
      ) {
        super(name, age, gender);
      }

      addTrip(trip: BookingTrip){
        this.bookingTrips = trip
      }

      findGate(){
          return this.bookingTrips.getGateFromFlight()
      }
}