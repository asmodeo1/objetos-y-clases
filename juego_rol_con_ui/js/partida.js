import { Personaje } from "./personaje.js";

// Contendrá los personajes elegidos en cada partida
let personajes = [];

let turno = 1;

// Para saber quien es el atacante y el defensor en cada turno
let atacanteActual = null;
let defensorActual = null;

export function generarPersonajes() {
    turno = 1;
    const imagenesPersonajes = ["caballero.jpeg", "ciclope.jpeg", "dragon.jpeg", 
        "elfo.jpeg", "enano.jpeg", "ent.jpeg", "hobbit.jpeg", "lamia.jpeg", 
        "lobo.jpeg", "mago.jpeg", "minotauro.jpeg", "ninfa.jpeg", "orco.jpeg", 
        "troll.jpeg", "vampiro.jpeg"];
    personajes = []; // vaciamos los personajes que pudieran existir de otra partida
    for (let i = 0; i < 8; i++) {
        const personaje = Math.floor(Math.random() * imagenesPersonajes.length);
        const imagen = imagenesPersonajes[personaje];
        const salud = Math.floor(Math.random() * 10 + 1);
        const ataque = Math.floor(Math.random() * 10 + 1);
        const defensa = Math.floor(Math.random() * 10 + 1);
        const p = new Personaje(imagen.replace(".jpeg", ""), ataque, defensa, salud, imagen);
        // Eliminamos el personaje del array de imagenes para que no genere dos o más iguales
        imagenesPersonajes.splice(personaje, 1);
        personajes.push(p);
    }
    return personajes;
}

export function generarLucha() {
  
        let numeroAtacante = Math.floor(Math.random() * personajes.length);
        let numeroDefensor;
        // Debemos generar un defensor mientra coincida con el atacante
        do {
            numeroDefensor = Math.floor(Math.random() * personajes.length);
        } while(numeroDefensor == numeroAtacante);
        
        atacanteActual = personajes[numeroAtacante];
        defensorActual = personajes[numeroDefensor];
        return [atacanteActual, defensorActual];
       // console.log("\nTURNO: " + turno);
        //turno++;
       // console.log(`Atacando: ${atacante.nombre} a ${defensor.nombre}`);
        
       //atacante.atacar(defensor);
        //comprobarEstados(personajes, cementerio);
}

/**
 * 
 * @returns {Number} - hjksadghjgasd
 */
export function luchar() {
    turno++;
    const resultado = {
        atacante: atacanteActual,
        defensor: defensorActual,
        ganador: null,
        muerto: 0,
    }
    resultado.ganador = atacanteActual.atacar(defensorActual);
    if(atacanteActual.salud <= 0) {
        resultado.muerto = 1
        // Eliminamos el muerto de la partida
        personajes = personajes.filter( p => p != atacanteActual);
    } else if(defensorActual.salud <= 0) {
        resultado.muerto = -1;
        // Eliminamos el muerto de la partida
        personajes = personajes.filter( p => p != defensorActual);
    }
    return resultado;
}


/**
 * Comprueba si la partida ha terminado, ya sea porque quede solo un personaje o todos tengan el mismo ataque y defensa
 * @returns boolean - true si terminó, false si no
 */
export function comprobarFinal() {
    if(personajes.length == 1) {
        return true;
    }
    // Debemos comprobar si d elos personajes que quedan todos tienen el mismo ataque y defensa, pues
    // no podría acabar la partida.
    // Para ello cogemos llosso valores del primer personaje y buscamos en el array si hay alguno que no coincida
    const ataque = personajes[0].ataque;
    const defensa = personajes[0].defensa;
    for (const p of personajes) {
        if(ataque != p.ataque || defensa != p.defensa) {
            return false;
        }
    }
    // Todos tienen el mismo ataque y defensa
    return true;
}

/**
 * Obtener el ganador o ganadores de la partida
 */
export function obtenerGanadores() {
    return personajes;
}

export function getTurno() {
    return turno;
}