import { Huesped } from "./huesped.js";
import { Hotel } from "./hotel.js";

const hotel = new Hotel(30);
hotel.checkIn(1, new Huesped("pepe"));
hotel.checkIn(10, new Huesped("ana"));
hotel.checkIn(21, new Huesped("eva"));
hotel.checkOut(5);
hotel.checkOut(10);
hotel.mostrarHabitaciones();
hotel.mostrarHabitacionesLibres();
hotel.mostrarHabitacionesOcupadas();
hotel.numeroHabitacionesLibres();
hotel.numeroHabitacionesOcupadas();
hotel.nombreHuespedes();
hotel.porcentajeOcupacion();