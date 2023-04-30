import { Flight } from "../booking-trip/flight/Flight"
import { BookingTrip } from "../booking-trip/booking/BookingTrip"
import { Employee } from "../human/employee/Employee"
import { Aeroplan } from "./aeroplan/Aeroplan"
export class Airline{
    private name: string
    private aeroplan: Aeroplan[]=[]
    private employees: Employee[]=[]
    private bookingTrip: BookingTrip[]=[]
    private flights: Flight[] = []
 

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

   

    addFlight(flight:Flight){
        this.flights.push(flight)

    }

    getBookingTrip(){
        return this.bookingTrip
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

    findTypeOfMeal(flight:Flight){
        let listOfMeal = []
        for(let trip of this.bookingTrip){
            if(trip.getPassenger().getMeal()== flight.getMeal()){
                listOfMeal.push(flight.getMeal())
            }
        }

        return listOfMeal
    }

    
}