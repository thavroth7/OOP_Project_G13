
import { Airline } from "./airline/Airline";
import { Aeroplan } from "./airline/aeroplan/Aeroplan";
import { Airport } from "./airport/Airport";
import { Gate } from "./airport/Gate";
import { Route } from "./airport/Route";

import { Flight } from "./booking-trip/flight/Flight";
import { Meal } from "./booking-trip/flight/Meal";
import { Bag } from "./booking-trip/booking/Bag";
import { BookingTrip, TypeOfTicket } from "./booking-trip/booking/BookingTrip";
import { Date } from "./date-time/Date";
import { Time } from "./date-time/Time";

import { Departure } from "./departure/Departure";
import { Gender } from "./human/Person";
import { CoPilot } from "./human/employee/Co-pilot";
import { Employee, EmployeeCategory } from "./human/employee/Employee";
import { Pilot } from "./human/employee/Pilot";
import { Passenger } from "./human/passenger/Passenger";

//create departure//
let departurePlace = new Departure("Phnom Penh", "Cambodia");
let arrivePlace = new Departure("Seoul", "South Korea");


//create gate//
let gate1 = new Gate("2A")
let gate2 = new Gate("001")

//create route//
let route = new Route(departurePlace, arrivePlace)

//create aeroplan//
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

//create meal
let meal1 = Meal.DAIRYFREE
let meal2 = Meal.HALAL
let meal3 = Meal.KOSHER

//add flight//
let flight1 = new Flight("001", date1, departureTime, arriveTime, route, gate1, aeroplane, pilot1, co_pilot)
let flight2 = new Flight("002", date1, departureTime, arriveTime, route, gate1, aeroplane, pilot1, co_pilot)
let flight3 = new Flight("003", date2, departureTime, arriveTime, route, gate2, aeroplane, pilot1, co_pilot)
let flight4 = new Flight("004", date3, departureTime, arriveTime, route, gate2, aeroplane, pilot1, co_pilot)
flight1.setMeal(meal1)
flight2.setMeal(meal1)

gate1.addFilght(flight1)
gate1.addFilght(flight2)

//Add Pilot into flight
pilot1.addFlight(flight1)
pilot1.addFlight(flight2)
pilot1.addFlight(flight3)
pilot1.addFlight(flight4)



//create employee//------
let employee1 = new Employee(EmployeeCategory.PILOT,"Hay",20,Gender.FEMALE)
employee1.setSalary(1000)

let employee2 = new Employee(EmployeeCategory.CO_PILOT,"Thavroth",20,Gender.FEMALE)
employee2.setSalary(2000)

//create airline//
let airline1= new Airline("Angkor Airline")
airline1.addEmployee(employee1)
airline1.addEmployee(employee2)



//Create passenger//
let passenger1 = new Passenger("Jimin", 27, Gender.MALE)
let passenger2 = new Passenger("Suga", 30, Gender.MALE)
let passenger3 = new Passenger("Suga", 30, Gender.MALE)
passenger1.setMeal(meal1)
passenger3.setMeal(meal1)
passenger2.setMeal(meal1)


//crate booking//
let bookingTrip = new BookingTrip( "AAS",1000,passenger1 ,departurePlace, arrivePlace, TypeOfTicket.RETURN_TICKET)
let bookingTrip1 = new BookingTrip( "AAS",1000,passenger1 ,departurePlace, arrivePlace, TypeOfTicket.RETURN_TICKET)
let bookingTrip2 = new BookingTrip( "AAS",1000,passenger1 ,departurePlace, arrivePlace, TypeOfTicket.RETURN_TICKET)
let bookingTrip3 = new BookingTrip( "AAS",1000,passenger2 ,departurePlace, arrivePlace, TypeOfTicket.SINGLE_TICKET)
let bookingTrip4 = new BookingTrip( "AAS",1000,passenger2 ,departurePlace, arrivePlace, TypeOfTicket.SINGLE_TICKET)
//set bag
let bag = new Bag(10)
bookingTrip.setBag(bag)

// add flight into trip
bookingTrip.addBookingFlight(flight1)
bookingTrip1.addBookingFlight(flight2)
bookingTrip2.addBookingFlight(flight3)

//add trip to passenger
passenger1.addTrip(bookingTrip)

//create airport
let airport = new Airport("Phnom Penh International Airport")
airport.addAirline(airline1)





//create Airline//--------------------------------
airline1.addBookingTrip(bookingTrip)
airline1.addBookingTrip(bookingTrip1)
airline1.addBookingTrip(bookingTrip2)
airline1.addBookingTrip(bookingTrip3)
airline1.addFlight(flight1)
airline1.addFlight(flight2)

//Find Pilot's flight for given day//
console.log(pilot1.findPilotFlights(date1))

//find all employee salary that airline need to pay//
console.log(airline1.findSalaryForAllEmployees())

//Find gate that passenger will go//
console.log(passenger1.findGate())

//find number of passenger that booked return ticket//
console.log(airline1.findPassengerBookedReturnTicket())

//find type of meal Chef need to prepare for a given flight//--------------
console.log(airline1.findTypeOfMeal(flight1))

//find passenger's trip//
console.log(airport.findPassengerTrip(passenger1))






