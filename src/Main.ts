// import { BookingFlight } from "./booking-system/booking-flight/BookingFlight";
// import { Meal } from "./booking-system/booking-flight/Meal";
// import { Flight } from "./booking-system/flight/Flight";
// import { BookingTrip, TypeOfTicket } from "./booking-system/trip/BookingTrip";
// import { Departure } from "./departure/Departure";

import { Aeroplan } from "./airline/aeroplan/Aeroplan";
import { Gate } from "./airport/Gate";
import { Route } from "./airport/Route";
import { Flight } from "./booking-system/flight/Flight";
import { DateTime } from "./date-time/DateTime";
import { Departure } from "./departure/Departure";
import { Gender } from "./human/Person";
import { CoPilot } from "./human/employee/Co-pilot";
import { EmployeeCategory } from "./human/employee/Employee";
import { Pilot } from "./human/employee/Pilot";




// let flight = new Flight("003")
// let bookingFlight = new BookingFlight(flight, Meal.DAIRYFREE)
// //booking Trip
let departure = new Departure("Phnom Pench", "South Korea");

// let bookingTrip = new BookingTrip(departure,departure, TypeOfTicket.RETURN_TICKET)
// bookingTrip.addBookingFlight(bookingFlight)
// bookingTrip.addBookingFlight(bookingFlight)

// console.log(bookingTrip)

let gate = new Gate("2A")

let route = new Route(departure, departure)

let aeroplane = new Aeroplan("HMA")


let shcedeule1 = new DateTime("10/1/2023", "19")
let shcedeule2 = new DateTime("11/1/2023", "20")
let shcedeule3 = new DateTime("12/1/2023", "10")
let arrivalDateTime = new DateTime("13/1/2023", "11")


//add Pilot, Co-pilot//
let pilot1 = new Pilot(1,EmployeeCategory.PILOT, "Thavroth", 20, Gender.MALE)
let pilot2 = new Pilot(2,EmployeeCategory.PILOT, "Net Se", 30, Gender.MALE)
let co_pilot = new CoPilot(EmployeeCategory.PILOT, "Thavroth", 20, Gender.MALE)

//add flight//
let flight1 = new Flight("003", shcedeule1, arrivalDateTime, route, gate, aeroplane, pilot1, co_pilot)
let flight2 = new Flight("004", shcedeule2, arrivalDateTime, route, gate, aeroplane, pilot1, co_pilot)
let flight3 = new Flight("005", shcedeule3, arrivalDateTime, route, gate, aeroplane, pilot1, co_pilot)
let flight4 = new Flight("00AA", shcedeule3, arrivalDateTime, route, gate, aeroplane, pilot1, co_pilot)

//add Pilot schedule//
pilot1.addPilotSchedule(shcedeule1)
pilot1.addPilotSchedule(shcedeule2)
pilot1.addPilotSchedule(shcedeule3)

//Add Pilot into flight
pilot1.addFlight(flight1)
pilot1.addFlight(flight2)
pilot1.addFlight(flight3)
pilot1.addFlight(flight4)

console.log(pilot1.findPilotFlights())
