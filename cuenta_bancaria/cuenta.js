class Cuenta {
    // Con la almohadilla delante, la propiedad será privada, con lo que solo 
    // se puede acceder a ella dentro de la clase
    #saldo = 0;

    constructor(numero, titular, saldo ) {
        if (titular.trim() == 0) {
            // Lanzamos una excepción (si no la tratamos con try catch el código fallará)
            throw "El titular no puede quedar vacío";
        }
        if(saldo < 0) {
            throw "El saldo no puede ser negativo";
        }
        this.numero = numero;
        this.titular = titular;
        this.#saldo = saldo;
    }

    ingresar(cantidad) {
        if(cantidad <= 0) {
            return false;
        }
        this.#saldo += cantidad;
        return true;
    }

    retirar(cantidad) {
        if(cantidad > this.#saldo) {
            return false;
        }
        this.#saldo -= cantidad;
        return true;
    }

    obtenerSaldo() {
        return this.#saldo;
    }
}
