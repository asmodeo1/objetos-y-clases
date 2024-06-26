export class Habitacion {
    #numero
    #camas
    #ocupada = false;
    #huesped;

    constructor(numero, camas, ocupada = false) {
        this.#numero = numero;
        this.#camas = camas;
        this.#ocupada = ocupada;
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

    toString() {
        return `Número: ${this.#numero} Camas: ${this.#camas} Ocupada: ${this.#ocupada}`;
    }
}