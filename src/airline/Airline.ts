import { Employee } from "../human/employee/Employee"
import { Aeroplan } from "./aeroplan/Aeroplan"
export class Airline{
    private name: string
    private aeroplan: Aeroplan[]=[]
    private employees: Employee[]=[]

    addAeroplan(aeroplan: Aeroplan) {
        return this.aeroplan.push(aeroplan)
    }

    addEmployee(newEmployee:Employee){
        this.employees.push(newEmployee)
    }

    
}