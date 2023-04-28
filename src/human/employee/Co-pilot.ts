import { Flight } from "../../booking-system/flight/Flight";
import { DateTime } from "../../date-time/DateTime";
import { Gender } from "../Person";
import { Employee, EmployeeCategory } from "./Employee";

export class CoPilot extends Employee{
    private flight: Flight[]=[]
    private shcedule: DateTime[]=[]
    constructor(catgory:EmployeeCategory,name: string, age: number, gender: Gender) {
        super(catgory,name, age, gender);
    }

    addFlight(flight:Flight) {
        return this.flight.push(flight)
    }

    addShcedule(shcedeule: DateTime) {
        return this.shcedule.push(shcedeule)
    }
}