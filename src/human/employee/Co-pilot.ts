import { Flight } from "../../booking-trip/flight/Flight";
import { Date } from "../../date-time/Date";
import { Gender } from "../Person";
import { Employee, EmployeeCategory } from "./Employee";

export class CoPilot extends Employee{
    private flight: Flight[]=[]
    private shcedule: Date[]=[]
    constructor(catgory:EmployeeCategory,name: string, age: number, gender: Gender) {
        super(catgory,name, age, gender);
    }

    addFlight(flight:Flight) {
        return this.flight.push(flight)
    }

    addShcedule(shcedeule: Date) {
        return this.shcedule.push(shcedeule)
    }
}