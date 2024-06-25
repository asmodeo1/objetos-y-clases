class CpuRisc {
    #AX = 0;
    #BX = 0;
    #CX = 0;
    #modelo = "";

    constructor(modelo) {
        this.#modelo = modelo;
    }

    get AX() {
        return this.#AX;
    }

    get BX() {
        return this.#BX;
    }

    get CX() {
        return this.#CX;
    }

    set AX(nuevoValor) {
        this.#AX = nuevoValor;
    }

    set BX(nuevoValor) {
        this.#BX = nuevoValor;
    }
    // Para el ejercicio 5, donde creamos la CpuCisc necesitamos que CX tenga un setter
    set CX(nuevoValor) {
        this.#CX = nuevoValor;
    }

    sumar() {
        this.#CX = this.#AX + this.#BX;
        return this.#CX;
    }

    restar() {
        this.#CX = this.#AX - this.#BX;
        return this.#CX;
    }

    incrementar() {
        this.#CX++;
    }

    decrementar() {
        this.#CX--;
    }

    toString() {
        return "Modelo: " + this.#modelo
            + "\n-----------------------------------------"
            + "\nAX: " + this.#AX
            + "\nBX: " + this.#BX
            + "\nCX: " + this.#CX

    }

}





