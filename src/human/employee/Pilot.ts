import { Flight } from "../../booking-system/flight/Flight";
import { DateTime } from "../../date-time/DateTime";
import { Gender } from "../Person";
import { Employee, EmployeeCategory } from "./Employee";

export class Pilot extends Employee{
    private cardId: number
    private flights: Flight[]=[]
    private shcedules: DateTime[]=[]
    constructor(cardId:number ,catgory:EmployeeCategory, name: string, age: number, gender: Gender) {
        super(catgory,name, age, gender);
        this.cardId = cardId
  
    }


    addPilotSchedule(newShcedule:DateTime){
          this.shcedules.push(newShcedule)
    }

    addFlight(newFlight:Flight){
      this.flights.push(newFlight)

    }

    getPilotCardId(){
      return this.cardId
    }

    
    findPilotFlights(){
      let listFlightForPilot =[]
      for(let flight of this.flights){
        for(let shcedeule of this.shcedules){
          if((flight.getFlightDate() == shcedeule  && flight.getPilotFromFlight() == this.getPilotCardId() )){
            listFlightForPilot.push(flight)
          }
        }
        
      }
      return listFlightForPilot
    }
    
}