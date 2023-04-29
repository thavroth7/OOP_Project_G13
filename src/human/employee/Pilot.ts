import { Flight } from "../../booking-trip/flight/Flight";
import { Date } from "../../date-time/Date";
import { Gender } from "../Person";
import { Employee, EmployeeCategory } from "./Employee";

export class Pilot extends Employee{
    private cardId: number
    private flights: Flight[]=[]
    constructor(cardId:number ,catgory:EmployeeCategory, name: string, age: number, gender: Gender) {
        super(catgory,name, age, gender);
        this.cardId = cardId
  
    }

    addFlight(newFlight:Flight){
      this.flights.push(newFlight)

    }

    getPilotCardId(){
      return this.cardId
    }

    

    findPilotFlights(schedule: Date){
      let listFlightForPilot =[]
      for(let flight of this.flights){
          if((flight.getFlightDate() == schedule  && flight.getPilotFromFlight() == this.getPilotCardId() )){
            listFlightForPilot.push(flight)
          }
        
      }
      return listFlightForPilot
    }
    
}