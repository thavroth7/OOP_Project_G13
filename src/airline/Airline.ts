import { BookingTrip } from "../booking-system/trip/BookingTrip"
import { Employee } from "../human/employee/Employee"
import { Aeroplan } from "./aeroplan/Aeroplan"
export class Airline{
    private name: string
    private aeroplan: Aeroplan[]=[]
    private employees: Employee[]=[]
    private bookingTrip: BookingTrip[]=[]
    constructor(name: string){
        this.name = name
    }

    addAeroplan(aeroplan: Aeroplan) {
        return this.aeroplan.push(aeroplan)
    }

    addEmployee(newEmployee:Employee){
        this.employees.push(newEmployee)
    }

    addBookingTrip(booking:BookingTrip){
        this.bookingTrip.push(booking)
    }

    findSalaryForAllEmployees(){
        let salaryForEmployee = 0
        for(let employee of this.employees){
            salaryForEmployee += employee.getSalary()
        }
        
        return salaryForEmployee

    }
    findPassengerBookedReturnTicket(){
        let numberOfPassenger = 0
        for(let booking of this.bookingTrip){
            if(booking.getReturnTicket() == 0){
                numberOfPassenger +=1
            }
            
        }

        return numberOfPassenger
    }

    
}