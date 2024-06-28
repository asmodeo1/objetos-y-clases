import { Habitacion } from "./habitacion.js";
import { Huesped } from "./huesped.js";

export class Hotel {
    #habitaciones = [];

    constructor(numeroHabitaciones) {
        if(numeroHabitaciones > 0) {
           for (let i = 1; i <= numeroHabitaciones; i++) {
                this.#habitaciones.push(new Habitacion(i, Math.floor(Math.random() * 4) + 1));
            }
        }
    }

    /**
     * Carga el hotel con los datos de habitaciones
     * @param {[]} habitaciones - datos de las habitaciones a cargar
     */
    cargarHabitaciones(habitaciones) {
        for (const h of habitaciones) {
            this.#habitaciones.push(new Habitacion(h.numero, h.camas, h.ocupada, new Huesped(h.huesped), h.fechaEntrada, h.fechaSalida));
        }
    }

    /**
     * Reserva una habitación
     * @param {number} numeroHabitacion - Número de la habitación
     * @param {Huesped} huesped - la persona que reserva la habitación
     * @returns {boolean} - true si se reservó, false si esa habitación ya estaba ocupada
     */
    checkIn(numeroHabitacion, huesped) {
        // O la encuentra o no la encuentra
        const habitaciones = this.#habitaciones.filter(h => h.numero == numeroHabitacion);
        if(habitaciones.length == 0) {
            return false;
        }
        // Como filter devuelve un array debemos coger el primer elemento del mismo, 
        // aunque en nuestro caso solo pueda haber uno
        if(habitaciones[0].isOcupada() == true) {
            return false;
        }
        habitaciones[0].huesped = huesped;
        habitaciones[0].ocupada = true;
    }

    /**
     * Libera una habitación
     * @param {number} numeroHabitacion - Número de la habitación
     * @returns {boolean} - true si se liberó, false si esa habitación ya estaba libre
     */
    checkOut(numeroHabitacion) {
        // O la encuentra o no la encuentra
        const habitaciones = this.#habitaciones.filter(h => h.numero == numeroHabitacion);
        if(habitaciones.length == 0) {
            return false;
        }
        // Como filter devuelve un array debemos coger el primer elemento del mismo, 
        // aunque en nuestro caso solo pueda haber uno
        if(habitaciones[0].isOcupada() == false) {
            return false;
        }
        habitaciones[0].huesped = null;
        habitaciones[0].ocupada = false;
    }

    /**
     * Obtiene las habitaciones del hotel
     * @returns {Habitacion []} - Las habitaciones del hotel
     */
    obtenerHabitaciones() {
        return this.#habitaciones;
    }

    /**
     * Obtiene una habitación
     * @param {number} numero - número de la habitación deseada
     * @returns {Habitacion | null} - la habitación o null si no la encuentra
     */
    obtenerHabitacion(numero) {
        for (const h of this.#habitaciones) {
            if(h.numero == numero) {
                return h;
            }
        }
        return null;
    }

    /**
     * Obtiene las habitaciones ocupadas del hotel
     * @returns {Habitacion []} - Las habitaciones ocupadas del hotel
     */
    obtenerHabitacionesOcupadas() {
        return this.#habitaciones.filter( h => h.isOcupada());
    }

    /**
     * Obtiene las habitaciones libres del hotel
     * @returns {Habitacion []} - Las habitaciones libres del hotel
     */
    obtenerHabitacionesLibres() {
        return this.#habitaciones.filter( h => h.isOcupada() == false);
    }

    /**
     * Obtener el número de habitaciones ocupadas
     * @returns {number} - el número de habitaciones ocupadas
     */
    numeroHabitacionesOcupadas() {
        return this.#habitaciones.filter( h => h.isOcupada()).length;
    }

    /**
     * Obtener el número de habitaciones libres
     * @returns {number} - el número de habitaciones libres
     */
    numeroHabitacionesLibres() {
        return this.#habitaciones.filter( h => h.isOcupada() == false).length;
    }

    /**
     * Obtener el nombre de todos los huéspedes
     * @returns {string[]} - los nombres de los huéspedes
     */
    nombreHuespedes() {
        return this.#habitaciones
            .filter( h => h.isOcupada())
            .map( h => h.huesped.nombre);
    }

    /**
     * Obtener el procentaje de ocupación hotelera
     * @returns {number} - el porcentaje de ocupación redondeado
     */
    porcentajeOcupacion() {
        const ocupadas = this.#habitaciones.filter( h => h.isOcupada()).length;
        return Math.round(ocupadas / this.#habitaciones.length * 100);
    }
}