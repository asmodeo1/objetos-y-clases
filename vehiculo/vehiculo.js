class Vehiculo {
    #matricula;
    #numeroPuertas;
    #velocidadActual = 0;
    #encendido = false;

    constructor(matricula, numeroPuertas) {
        if(numeroPuertas < 0) {
            throw "El número de puertas debe ser cero o más";
        }
        this.#matricula = matricula;
        this.#numeroPuertas = numeroPuertas;
    }

    arrancar() {
        this.#encendido = true;
    }

    parar() {
        this.#encendido = false;
        this.#velocidadActual = 0;
    }

    acelerar(aumento = 1) {
        if(this.#encendido != true) {
            throw "Has de encender el vehículo";
        }
        if(aumento <= 0) {
            throw "No se puede acelerar con un valor cero o negativo";
        }
        this.#velocidadActual += aumento; 
    }

    decelerar(decremento = 1) {
        if(this.#encendido != true) {
            throw "Has de encender el vehículo";
        }
        if(aumento <= 0) {
            throw "No se puede decelerar con un valor cero o negativo";
        }
        if(this.#velocidadActual - decremento < 0) {
            this.#velocidadActual = 0;
        } else {
            this.#velocidadActual -= decremento;
        }
    }

    getVelocidadActual() {
        return this.#velocidadActual;
    }

    getMatricula() {
        return this.#matricula;
    }

    setMatricula(matricula) {
        this.#matricula = matricula;
    }

    getNumeroPuertas() {
        return this.#numeroPuertas;
    }
}