//import {Hotel} from "./hotel.js"
const hotel = new Hotel(100);

function actualizarInfo() {
    const habitacionesOcupadas = document.getElementById("habitacionesOcupadas");
    const habitacionesLibres = document.getElementById("habitacionesLibres");
    const porcentajeOcupacion = document.getElementById("porcentajeOcupacion");
    habitacionesOcupadas.textContent = hotel.numeroHabitacionesOcupadas();
    habitacionesLibres.textContent = hotel.numeroHabitacionesLibres();
    porcentajeOcupacion.textContent = hotel.porcentajeOcupacion();

}

function habitacionSeleccionada(evt) {
    //evt.target.classList.toggle("ocupada");
    const habitacionElemento = evt.currentTarget;
    const habitacion = hotel.obtenerHabitacion(habitacionElemento.dataset.numeroHabitacion);
    if(habitacion.isOcupada()) {
        habitacion.ocupada = false;
    } else {
        habitacion.ocupada = true;
    }
    evt.currentTarget.classList.toggle("ocupada");
    actualizarInfo();
}

function crearHabitacionesUI() {
    const habitaciones = document.getElementById("habitaciones");
    for (const h of hotel.obtenerHabitaciones()) {
        const elemento = document.createElement("div");
        elemento.innerHTML = `<p>Número: ${h.numero}</p><p>Camas: ${h.camas}</p>`;
        elemento.classList.add("habitacion");
        elemento.addEventListener("click", habitacionSeleccionada);
        elemento.dataset.numeroHabitacion = h.numero;
        habitaciones.appendChild(elemento);
    }
}

crearHabitacionesUI();
console.log(JSON.stringify(hotel.obtenerHabitaciones()))