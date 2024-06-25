class Botella {
    #litrosActuales = 0;
    #maximoLitros = 0;

    constructor(litrosMaximo) {
        if(litrosMaximo <= 0) {
            throw "Los litros máximos deben ser mayores a cero";
        }
        this.#maximoLitros = litrosMaximo;
    }

    introducir(litros) {
        if(litros + this.#litrosActuales > this.#maximoLitros) {
            litros = this.#maximoLitros - this.#litrosActuales;
        }
        this.#litrosActuales += litros;
    }

    extraer(litros) {
        if(/*litros > this.#maximoLitros ||*/ litros > this.#litrosActuales) {
            this.#litrosActuales = 0;
        } else {
            this.#litrosActuales -= litros;
        }
    }

    vaciar() {
        this.#litrosActuales = 0;
    }

    llenar() {
        this.#litrosActuales = this.#maximoLitros;
    }

    toString() {
        return `Litros actuales: ${this.#litrosActuales} Litros Máximos: ${this.#maximoLitros}`;
    }

}