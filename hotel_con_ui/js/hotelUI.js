import { Hotel } from "./hotel.js";
import { cargar, guardar } from "./almacenamiento.js"

/**
 * Hace el checkIn o checkOut de la habitación pulsada
 * @param {Event} evt - información del evento 
 */
function checkInOut(evt) {
    // No vale evt.target pues si hacemos click en los p, esos serían el target
    const elemento = evt.currentTarget;
    const habitacion = hotel.obtenerHabitacion(elemento.dataset.numeroHabitacion);
    // No comprobamos si devuelve null pues nunca debería pasar
    if(habitacion.isOcupada()) {
        habitacion.ocupada = false;
    } else {
        habitacion.ocupada = true;
    }
    // El if podría quedar así
    //habitacion.ocupada = !habitacion.isOcupada();
    // O 
    // habitacion.ocupada = habitacion.isOcupada() ? false : true;
    elemento.classList.toggle("ocupada");
    actualizarInformacion();
    /* No es lo más óptimo volver a guardar todas las habitaciones pero con almacenamiento
    local no hay posibilidad de modificar solo un trozo. Una alternativa sería guardar
    cada habitación por separado */
    guardar(hotel.obtenerHabitaciones());
}

/**
 * Actaliza la información de habitaciones lirbes, ocupadas y porcentaje de ocupación
 */
function actualizarInformacion() {
    const habitacionesOcupadas = document.getElementById("habitacionesOcupadas");
    const habitacionesLibres = document.getElementById("habitacionesLibres");
    const porcentajeOcupacion = document.getElementById("porcentajeOcupacion");
    habitacionesOcupadas.textContent = hotel.numeroHabitacionesOcupadas();
    habitacionesLibres.textContent = hotel.numeroHabitacionesLibres();
    porcentajeOcupacion.textContent = hotel.porcentajeOcupacion();
}

function inicializacion() {
    const habitacionesCargadas = cargar();
    // Vemos si había o no datos guardados
    if(habitacionesCargadas == null) {
        hotel = new Hotel(100);
    } else {
        // Creamos un hotel sin habitaciones
        hotel = new Hotel(0, false);
        hotel.cargarHabitaciones(habitacionesCargadas);
    }

    const habitacionesHotel = hotel.obtenerHabitaciones();
    const habitaciones = document.getElementById("habitaciones");
    for (const h of habitacionesHotel) {
        const elemento = document.createElement("div");
        habitaciones.appendChild(elemento);
        // Guardamos el número de habitación para que cuando pulsemos en el elemento, sepamos
        // de manera fácil cual es la habitación pulsada
        elemento.dataset.numeroHabitacion = h.numero;
        elemento.classList.add("habitacion");
        if(h.isOcupada()) {
            elemento.classList.add("ocupada");
        }
        elemento.addEventListener("click", checkInOut);
        elemento.innerHTML = `<p>Número: ${h.numero}</p><p>Camas: ${h.camas}</p>`;
    }
    // Debemos mostrar al comienzo cuantas habitaciones libres hay
    actualizarInformacion();
    guardar(hotel.obtenerHabitaciones());
}


let hotel;

inicializacion();



