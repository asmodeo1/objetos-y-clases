
/**
 * Crea los personajes de la partida
 * @returns Personaje[] - un array de objetos Personaje
 */
function crearPersonajes() {
    const personajes = [];
    personajes.push(new Personaje("lamia", 5, 3, 10));
    personajes.push(new Personaje("Vampiro", 3, 2, 6));
    personajes.push(new Personaje("Caballero", 8, 2, 7));
    personajes.push(new Personaje("Mago", 2, 7, 6));
    personajes.push(new Personaje("lobo", 9, 2, 9));
    personajes.push(new Personaje("enano", 7, 6, 5));
    personajes.push(new Personaje("dragón", 10, 1, 10));
    personajes.push(new Personaje("elfo", 6, 6, 6));
    personajes.push(new Personaje("hobbit", 1, 1, 10));

    return personajes;
}

/**
 * Muestra los personajes que siguen en la partida
 * @param {Personaje[]} personajes - los personajes a mostrar
 */

function mostrarPersonajes(personajes) {
    console.log("----------------------------")
    for (const p of personajes) {
        console.log(p.toString());
    }
}

/**
 * Busca si hay un personaje muerto y lo elimina
 * @param {Personaje[]} personajes - los personajes de la partida
 * @param {Personaje[]} cementerio - los personajes muertos de la partida
 */
function comprobarEstados(personajes, cementerio) {
    for (let i = 0; i < personajes.length; i++) {
        if(personajes[i].salud <= 0){
            console.log("*****" + personajes[i].nombre + " está muerto");
            cementerio.push(personajes[i]);
            personajes.splice(i, 1); // Eliminamos el personaje muerto
            break;
        }
    }
}

/**
 * Comprueba si la partida ha terminado, ya sea porque quede solo un personaje o todos tengan el mismo ataque y defensa
 * @param {Personaje[]} personajes - los personajes de la partida
 * @returns boolean - true si terminó, false si no
 */
function comprobarFinal(personajes) {
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
 * Muestra el ganador o ganadores de la partida
 * @param  {Personaje[]} personajes - los personajes de la partida
 */
function mostrarGanadores(personajes) {
    console.log("Los ganadores son:");
    for (const p of personajes) {
        console.log(p.nombre);
    }
}

/**
 * Muestra los personajes muertos
 * @param {Personaje[]} cementerio - los personajes muertos
 */
function mostrarCementerio(cementerio) {
    console.log("\nCEMENTERIO");
    // Los vamos a ordenador por puntos
    // Para ello hay que crear una función que reciba dos parámetros, en nuestro caso dos personajes
    // a comparar y debe devolver 0 sin son iguales, un valor positivo si el primer personajes es mayor
    // que el segundo y un valor negativo en caso contrario
    cementerio.sort((p1, p2) => p2.puntos - p1.puntos);
    for (const p of cementerio) {
        console.log(`%c${p.toString()}`, "color: red"); 
    }
}

let personajes = crearPersonajes();
let cementerio = [];
let turno = 1;

do {
    let atacante = Math.floor(Math.random() * personajes.length);
    let defensor;
    // Debemos generar un defensor mientra coincida con el atacante
    do {
        defensor = Math.floor(Math.random() * personajes.length);
    } while(defensor == atacante);
    
    atacante = personajes[atacante];
    defensor = personajes[defensor];

    console.log("\nTURNO: " + turno);
    turno++;
    console.log(`Atacando: ${atacante.nombre} a ${defensor.nombre}`);
    atacante.atacar(defensor);

    comprobarEstados(personajes, cementerio);

    mostrarPersonajes(personajes);

} while(comprobarFinal(personajes) == false); // } while(!comprobarFinal(personajes));

mostrarGanadores(personajes);
mostrarCementerio(cementerio);



