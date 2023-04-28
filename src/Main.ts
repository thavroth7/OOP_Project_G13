// // import { BookingFlight } from "./booking-system/booking-flight/BookingFlight";
// // import { Meal } from "./booking-system/booking-flight/Meal";
// // import { Flight } from "./booking-system/flight/Flight";
// // import { BookingTrip, TypeOfTicket } from "./booking-system/trip/BookingTrip";
// // import { Departure } from "./departure/Departure";

// import { Aeroplan } from "./airline/aeroplan/Aeroplan";
// import { Gate } from "./airport/Gate";
// import { Route } from "./airport/Route";
// import { Flight } from "./booking-system/flight/Flight";
// import { DateTime } from "./date-time/DateTime";
// import { Departure } from "./departure/Departure";
// import { Gender } from "./human/Person";
// import { CoPilot } from "./human/employee/Co-pilot";
// import { EmployeeCategory } from "./human/employee/Employee";
// import { Pilot } from "./human/employee/Pilot";




// // let flight = new Flight("003")
// // let bookingFlight = new BookingFlight(flight, Meal.DAIRYFREE)
// // //booking Trip
// let departure = new Departure("Phnom Pench", "South Korea");

// // let bookingTrip = new BookingTrip(departure,departure, TypeOfTicket.RETURN_TICKET)
// // bookingTrip.addBookingFlight(bookingFlight)
// // bookingTrip.addBookingFlight(bookingFlight)

// // console.log(bookingTrip)

// let gate = new Gate("2A")

// let route = new Route(departure, departure)

// let aeroplane = new Aeroplan("HMA")


// let shcedeule1 = new DateTime("10/1/2023", "10PM")
// let shcedeule2 = new DateTime("11/1/2023", "10PM")
// let shcedeule3 = new DateTime("12/1/2023", "10PM")
// let shcedeule4 = new DateTime("13/1/2023", "10PM")
// let pilot = new Pilot(EmployeeCategory.PILOT, "Thavroth", 20, Gender.MALE)
// let co_pilot = new CoPilot(EmployeeCategory.PILOT, "Thavroth", 20, Gender.MALE)


// let flight1 = new Flight("003", shcedeule1, shcedeule2, route, gate, aeroplane, pilot, co_pilot)
// let flight2 = new Flight("004", shcedeule2, shcedeule2, route, gate, aeroplane, pilot, co_pilot)
// let flight3 = new Flight("005", shcedeule3, shcedeule2, route, gate, aeroplane, pilot, co_pilot)

// pilot.addPilotSchedule(shcedeule1)


// pilot.addFlight(flight1)
// pilot.addFlight(flight2)
// pilot.addFlight(flight3)



// console.log(pilot.getPilotFlight())
// // console.log(pilot)