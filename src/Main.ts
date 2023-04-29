// import { BookingFlight } from "./booking-system/booking-flight/BookingFlight";
// import { Meal } from "./booking-system/booking-flight/Meal";
// import { Flight } from "./booking-system/flight/Flight";
// import { BookingTrip, TypeOfTicket } from "./booking-system/trip/BookingTrip";
// import { Departure } from "./departure/Departure";

import { Airline } from "./airline/Airline";
import { Aeroplan } from "./airline/aeroplan/Aeroplan";
import { Airport } from "./airport/Airport";
import { Gate } from "./airport/Gate";
import { Route } from "./airport/Route";

import { Flight } from "./booking-system/flight/Flight";
import { Bag } from "./booking-system/trip/Bag";
import { BookingTrip, TypeOfTicket } from "./booking-system/trip/BookingTrip";
import { Date } from "./date-time/Date";
import { Time } from "./date-time/Time";

import { Departure } from "./departure/Departure";
import { Gender } from "./human/Person";
import { CoPilot } from "./human/employee/Co-pilot";
import { Employee, EmployeeCategory } from "./human/employee/Employee";
import { Pilot } from "./human/employee/Pilot";
import { Passenger } from "./human/passenger/Passenger";







let departurePlace = new Departure("Phnom Penh", "Cambodia");
let arrivePlace = new Departure("Seoul", "South Korea");

let gate = new Gate("2A")
let route = new Route(departurePlace, arrivePlace)
let aeroplane = new Aeroplan("HMA")

//create Date Time
let date1 = new Date("10/1/2023")
let date2 = new Date("11/1/2023")
let date3 = new Date("12/1/2023")
let departureTime = new Time("10:00")
let arriveTime = new Time("20:30")


//add Pilot, Co-pilot//
let pilot1 = new Pilot(1,EmployeeCategory.PILOT, "Thavroth", 20, Gender.MALE)
let pilot2 = new Pilot(2,EmployeeCategory.PILOT, "Net Se", 30, Gender.MALE)
let co_pilot = new CoPilot(EmployeeCategory.PILOT, "Thavroth", 20, Gender.MALE)

//add flight//
let flight1 = new Flight("001", date1, departureTime, arriveTime, route, gate, aeroplane, pilot1, co_pilot)
let flight2 = new Flight("002", date1, departureTime, arriveTime, route, gate, aeroplane, pilot1, co_pilot)
let flight3 = new Flight("003", date2, departureTime, arriveTime, route, gate, aeroplane, pilot1, co_pilot)
let flight4 = new Flight("004", date3, departureTime, arriveTime, route, gate, aeroplane, pilot1, co_pilot)

//add Pilot schedule//


//Add Pilot into flight
pilot1.addFlight(flight1)
pilot1.addFlight(flight2)
pilot1.addFlight(flight3)
pilot1.addFlight(flight4)

console.log(pilot1.findPilotFlights(date1))


let employee1 = new Employee(EmployeeCategory.PILOT,"Hay",20,Gender.FEMALE)
employee1.setSalary(1000)

let employee2 = new Employee(EmployeeCategory.CO_PILOT,"Thavroth",20,Gender.FEMALE)
employee2.setSalary(2000)

let airline1= new Airline("Angkor Airline")
airline1.addEmployee(employee1)
airline1.addEmployee(employee2)
// console.log(airline1.findSalaryForAllEmployees())

//add passenger//
let passenger1 = new Passenger("Jimin", 27, Gender.MALE)
let passenger2 = new Passenger("Suga", 30, Gender.MALE)
let passenger3 = new Passenger("Suga", 30, Gender.MALE)

//crate booking//
let bag = new Bag(10)
let bookingTrip = new BookingTrip( "AAS",1000,passenger1 ,departurePlace, arrivePlace, TypeOfTicket.RETURN_TICKET)
bookingTrip.setBag(bag)
let airport = new Airport("Phnom Penh International Airport")

 airport.addBookingTrip(bookingTrip)
//  console.log(airport.findPassengerTrip(passenger1))






