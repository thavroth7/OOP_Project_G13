import { Flight } from "../booking-trip/flight/Flight"
import { BookingTrip } from "../booking-trip/booking/BookingTrip"
import { Employee } from "../human/employee/Employee"
import { Passenger } from "../human/passenger/Passenger"
import { Aeroplan } from "./aeroplan/Aeroplan"
export class Airline{
    private name: string
    private aeroplan: Aeroplan[]=[]
    private employees: Employee[]=[]
    private bookingTrip: BookingTrip[]=[]
    private flights: Flight[] = []
    private passengers: Passenger[] = []

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

    addPassenger(passenger:Passenger){
        this.passengers.push(passenger)
    }

    addFlight(flight:Flight){
        this.flights.push(flight)

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
        for(let passenger of this.passengers){
            if(passenger.getMeal() == flight.getMeal()){
                listOfMeal.push(flight.getMeal())
            }
        }

        return listOfMeal
    }

    
}