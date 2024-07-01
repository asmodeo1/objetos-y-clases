import { Huesped } from "./huesped.js";

export class Habitacion {
    #numero
    #camas
    #ocupada = false;
    #huesped = null;
    #fechaEntrada = null;
    #fechaSalida = null;

    constructor(numero, camas, ocupada = false, huesped = null, fechaEntrada = null, fechaSalida = null) {
        this.#numero = numero;
        this.#camas = camas;
        this.#ocupada = ocupada;
        this.#fechaEntrada = fechaEntrada;
        this.#fechaSalida = fechaSalida;
        this.#huesped = huesped;
    }

    get numero() {
        return this.#numero;
    }

    get camas() {
        return this.#camas;
    }

    get huesped() {
        return this.#huesped;
    }

    set huesped(huesped) {
        this.#huesped = huesped;
    }

    isOcupada() {
        return this.#ocupada;
    }

    /**
     * @param {boolean} ocupada
     */
    set ocupada(ocupada) {
        this.#ocupada = ocupada;
    }

    get fechaEntrada() {
        return this.#fechaEntrada;
    }

    get fechaSalida() {
        return this.#fechaSalida;
    }
    
    set fechaEntrada(fecha) {
        this.#fechaEntrada = fecha;
    }

    set fechaSalida(fecha) {
        this.#fechaSalida = fecha;
    }

    toString() {
        return `Número: ${this.#numero} Camas: ${this.#camas} Ocupada: ${this.#ocupada}`
            + `Huesped: ${this.#huesped.nombre} Fecha entrada: ${this.#fechaEntrada} Fecha salida: ${this.#fechaSalida}`;
    }

    toJSON() {
        const fechaEntrada = this.#fechaEntrada != null ? `"${this.#fechaEntrada}"` : null
        const fechaSalida = this.#fechaSalida != null ? `"${this.#fechaSalida}"`  : null;
        const huesped =  this.#huesped != null? `"${this.#huesped.nombre}"` : null;

        return `{"numero": ${this.#numero}, "camas": ${this.#camas}, "ocupada": ${this.#ocupada}`
            + `,"huesped": ${huesped}`
            + `, "fechaEntrada": ${fechaEntrada}`
            + `, "fechaSalida": ${fechaSalida}}`;
    }
}