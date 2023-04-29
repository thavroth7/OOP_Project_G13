import { Meal } from "../../booking-system/flight/Meal";
import { BookingTrip } from "../../booking-system/trip/BookingTrip";
import { Gender, Person } from "../Person";

export class Passenger extends Person{
    private bookingTrips: BookingTrip
    private meal: Meal
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

      setMeal(meal:Meal){
          this.meal = meal
      }

      getMeal(){
        return this.meal
      }
}