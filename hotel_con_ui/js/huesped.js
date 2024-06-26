
export class Huesped {
    #nombre;
    #vip;

    constructor(nombre, vip = false) {
        this.#nombre = nombre;
        this.#vip = vip;
    }

    get nombre() {
        return this.#nombre;
    }

    isVip() {
        return this.#vip;
    }

    toString() {
        return `Nombre: ${this.#nombre} Vip: ${this.#vip}`;
    }
}