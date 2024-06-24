class Semaforo {
    #colores = ["Rojo", "Verde", "Amarillo"];
    #encendido = false;
    #colorActual = 0; // this.#colores[0];

    encender() {
        this.#encendido = true;
    }

    apagar() {
        this.#encendido = false;
    }

    cambiarColor() {
        if(this.#colorActual == 2) {
            this.#colorActual = 0;
        } else {
            this.#colorActual++;
        }
    }

    getColorActual() {
        return this.#colores[this.#colorActual];
    }

    // Otra manera de hacer el get
    get colorActual() {
        return this.#colores[this.#colorActual];
    }

    toString() {
        return `encendido: ${this.#encendido} color: ${this.#colores[this.#colorActual]}`;
    }
}