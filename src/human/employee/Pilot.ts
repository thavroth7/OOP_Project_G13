import { Flight } from "../../booking-system/flight/Flight";
import { DateTime } from "../../date-time/DateTime";
import { Gender } from "../Person";
import { Employee, EmployeeCategory } from "./Employee";

export class Pilot extends Employee{
    private flights: Flight[]=[]
    private shcedules: DateTime[]=[]
    constructor(catgory:EmployeeCategory, name: string, age: number, gender: Gender) {
        super(catgory,name, age, gender);
  
      }

    addPilotSchedule(newShcedule:DateTime){
      for(let shcedeule of this.shcedules){
        if(shcedeule != newShcedule){
          this.shcedules.push(newShcedule)
        }
      }
     
    }

    getPilotSchedule(){
       for(let shcedeule of this.shcedules){
        return shcedeule
       }
    }

    addFlight(newFlight:Flight){
          this.flights.push(newFlight)
    }

    getPilotFlight(){
      let listFlightForPilot =[]
      for(let flight of this.flights){
        if(flight.getFlightDate() == this.getPilotSchedule()){
          listFlightForPilot.push(flight)
        }
      }
      return listFlightForPilot
    }
    
}