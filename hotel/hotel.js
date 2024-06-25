class Hotel {
    #habitaciones = [];

    constructor(numeroHabitaciones) {
        for (let i = 1; i <= numeroHabitaciones; i++) {
            this.#habitaciones.push(new Habitacion(i, Math.floor(Math.random() * 4) + 1));
        }
    }

    checkIn(numeroHabitacion, huesped) {
        // O la encuentra o no la encuentra
        const habitaciones = this.#habitaciones.filter(h => h.numero == numeroHabitacion);
        if(habitaciones.length == 0) {
            console.log("No existe esa habitación");
            return;
        }
        if(habitaciones[0].isOcupada() == true) {
            console.log("La habitación ya está ocupada");
            return;
        }
        habitaciones[0].huesped = huesped;
        habitaciones[0].ocupada = true;
    }

    checkOut(numeroHabitacion) {
        // O la encuentra o no la encuentra
        const habitaciones = this.#habitaciones.filter(h => h.numero == numeroHabitacion);
        if(habitaciones.length == 0) {
            console.log("No existe esa habitación");
            return;
        }
        if(habitaciones[0].isOcupada() == false) {
            console.log("La habitación ya está libre");
            return;
        }
        habitaciones[0].huesped = null;
        habitaciones[0].ocupada = false;
    }

    mostrarHabitaciones() {
        // \n es un salto de línea
        console.log("\nLISTADO DE HABITACIONES");
        for (const h of this.#habitaciones) {
            if(h.isOcupada()) {
                // \t es un tabulador
                console.log(`%c\t${h.toString()}`, "color: red");
            } else {
                console.log(`%c\t${h.toString()}`, "color: green");
            }
        }
    }

    mostrarHabitacionesOcupadas() {
        console.log("\nLISTADO DE HABITACIONES OCUPADAS");
        this.#habitaciones.filter( h => h.isOcupada()).forEach( h => {
            console.log(`%c\t${h.toString()}`, "color: red");
        });
    }

    mostrarHabitacionesLibres() {
        console.log("\nLISTADO DE HABITACIONES LIBRES");
        this.#habitaciones.filter( h => h.isOcupada() == false).forEach( h => {
            console.log(`%c\t${h.toString()}`, "color: green");
        });
    }

    numeroHabitacionesOcupadas() {
        console.log("\nNÚMERO DE HABITACIONES OCUPADAS: ", this.#habitaciones.filter( h => h.isOcupada()).length);
    }

    numeroHabitacionesLibres() {
        console.log("\nNÚMERO DE HABITACIONES LIBRES: ", this.#habitaciones.filter( h => h.isOcupada() == false).length);
    }

    nombreHuespedes() {
        console.log("\nHUÉSPEDES: ");
        this.#habitaciones
            .filter( h => h.isOcupada())
            .map( h => h.huesped.nombre)
            .forEach( n => console.log(`\t${n}`));
    }

    porcentajeOcupacion() {
        const ocupadas = this.#habitaciones.filter( h => h.isOcupada()).length;
        console.log("\% DE HABITACIONES OCUPADAS: ", Math.round(ocupadas / this.#habitaciones.length * 100) + "%");
    }
}