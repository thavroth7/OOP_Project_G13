import { Employee } from "../human/employee/Employee"
import { Aeroplan } from "./aeroplan/Aeroplan"
export class Airline{
    private name: string
    private aeroplan: Aeroplan[]=[]
    private employees: Employee[]=[]

    constructor(name: string){
        this.name = name
    }

    addAeroplan(aeroplan: Aeroplan) {
        return this.aeroplan.push(aeroplan)
    }

    addEmployee(newEmployee:Employee){
        this.employees.push(newEmployee)
    }

    findSalaryForAllEmployees(){
        let salaryForEmployee = 0
        for(let employee of this.employees){
            salaryForEmployee += employee.getSalary()
        }
        
        return salaryForEmployee

    }

    
}