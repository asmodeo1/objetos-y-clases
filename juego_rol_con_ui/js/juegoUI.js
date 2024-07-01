import { generarPersonajes, generarLucha, luchar as partidaLuchar, comprobarFinal, obtenerGanadores, getTurno } from "./partida.js";

function nuevaPartida() {
    document.getElementById("turno").textContent = 1;
    document.getElementById("ganadores").style.display = "none";
    const plantilla = document.getElementById("plantillaCarta");
    const participantes = document.getElementById("participantes");
    participantes.innerHTML = ""; // Borramos las cartas anteriores
    const personajes = generarPersonajes();
    for (const p of personajes) {
        const clon = plantilla.cloneNode(true); // con true se clonan también sus hijos
        clon.setAttribute("id", ""); // Le quitamos el id a los clones pue sno debe haber dos elementos con el mismo id
        clon.getElementsByTagName("img")[0].setAttribute("src", "imagenes/" + p.imagen);
        clon.getElementsByClassName("nombre")[0].textContent = p.nombre;
        clon.getElementsByClassName("ataque")[0].textContent = p.ataque;
        clon.getElementsByClassName("defensa")[0].textContent = p.defensa;
        clon.getElementsByClassName("salud")[0].textContent = p.salud;

        participantes.appendChild(clon);
        clon.style.animation = "mostrarCarta 1s";
    }
    document.getElementById("crearLucha").disabled = false;
}

function luchar() {
    document.getElementById("crearLucha").disabled = true;
    const audio = new Audio("audio/lucha.mp3");
    audio.play();
    const resultado = partidaLuchar();
    // Vamos a actualizar los resultados
    const atacante = document.getElementById("atacante");
    const defensor = document.getElementById("defensor");
    
    atacante.getElementsByClassName("ataque")[0].textContent = resultado.atacante.ataque;
    atacante.getElementsByClassName("defensa")[0].textContent = resultado.atacante.defensa;
    atacante.getElementsByClassName("salud")[0].textContent = resultado.atacante.salud;

    defensor.getElementsByClassName("ataque")[0].textContent = resultado.defensor.ataque;
    defensor.getElementsByClassName("defensa")[0].textContent = resultado.defensor.defensa;
    defensor.getElementsByClassName("salud")[0].textContent = resultado.defensor.salud;

    if(resultado.ganador == 1) {
        atacante.style.outline = "4px solid green";
        defensor.style.outline = "4px solid red";
        atacante.getElementsByClassName("valorPuntos")[0].textContent = resultado.atacante.puntos;

    } else if(resultado.ganador == -1) {
        defensor.style.outline = "4px solid green";
        atacante.style.outline = "4px solid red";
        defensor.getElementsByClassName("valorPuntos")[0].textContent = resultado.defensor.puntos;
    }

    const cartaAtacante = obtenerCartaPorNombre(resultado.atacante.nombre);
    const cartaDefensor = obtenerCartaPorNombre(resultado.defensor.nombre);

    cartaAtacante.getElementsByClassName("ataque")[0].textContent = resultado.atacante.ataque;
    cartaAtacante.getElementsByClassName("defensa")[0].textContent = resultado.atacante.defensa;
    cartaAtacante.getElementsByClassName("salud")[0].textContent = resultado.atacante.salud;
    cartaAtacante.getElementsByClassName("valorPuntos")[0].textContent = resultado.atacante.puntos;

    cartaDefensor.getElementsByClassName("ataque")[0].textContent = resultado.defensor.ataque;
    cartaDefensor.getElementsByClassName("defensa")[0].textContent = resultado.defensor.defensa;
    cartaDefensor.getElementsByClassName("salud")[0].textContent = resultado.defensor.salud;
    cartaDefensor.getElementsByClassName("valorPuntos")[0].textContent = resultado.defensor.puntos;

    if(resultado.muerto == 1) {
        atacante.style.filter = "grayscale()";
        cartaAtacante.style.filter = "grayscale()";
    }
    if(resultado.muerto == -1) {
        defensor.style.filter = "grayscale()";
        cartaDefensor.style.filter = "grayscale()";
    }

    setTimeout(ocultarLucha, 1000);
}

function ocultarLucha() {
    document.getElementById("lucha").style.display = "none";
    if(comprobarFinal()) {
        const ganadores = obtenerGanadores();
        const listado = document.getElementById("listado");
        listado.textContent = "";
        for (const ganador of ganadores) {
            const elemento = document.createElement("p");
            elemento.textContent = ganador.nombre;
            listado.appendChild(elemento);
        }
        document.getElementById("ganadores").style.display = "block";
    } else {
        document.getElementById("crearLucha").disabled = false;
    }
}

function obtenerCartaPorNombre(nombre) {
    const cartas = document.getElementsByClassName("carta");
    for (const carta of cartas) {
        if(carta.getElementsByClassName("nombre")[0].textContent.toLowerCase() == nombre.toLowerCase()) {
            return carta;
        }
    }
    return null;
}

 function crearLucha() {
    document.getElementById("turno").textContent = getTurno();
    document.getElementById("crearLucha").disabled = true;
    const luchadores = generarLucha();
    // Mediante desestructurización podemos evitar usar luego luchadores[0] y luchadores[1]
    //let [personajeAtacante, personajeDefensor] = generarLucha();
    const lucha = document.getElementById("lucha");
    const atacante = document.getElementById("atacante");
    const defensor = document.getElementById("defensor");
    
    atacante.getElementsByTagName("img")[0].setAttribute("src", "imagenes/" + luchadores[0].imagen);
    atacante.getElementsByClassName("nombre")[0].textContent = luchadores[0].nombre;
    atacante.getElementsByClassName("ataque")[0].textContent = luchadores[0].ataque;
    atacante.getElementsByClassName("defensa")[0].textContent = luchadores[0].defensa;
    atacante.getElementsByClassName("salud")[0].textContent = luchadores[0].salud;
    atacante.getElementsByClassName("valorPuntos")[0].textContent = luchadores[0].puntos;

    atacante.style.outline = "none";
    atacante.style.filter = "none";
    // Para que se vuelva a ejecutar la animación de un elemento existente
    atacante.style.animation = "";
    atacante.offsetWidth;
    atacante.style.animation = "mostrarCarta 1s";

    defensor.getElementsByTagName("img")[0].setAttribute("src", "imagenes/" + luchadores[1].imagen);
    defensor.getElementsByClassName("nombre")[0].textContent = luchadores[1].nombre;
    defensor.getElementsByClassName("ataque")[0].textContent = luchadores[1].ataque;
    defensor.getElementsByClassName("defensa")[0].textContent = luchadores[1].defensa;
    defensor.getElementsByClassName("salud")[0].textContent = luchadores[1].salud;
    defensor.getElementsByClassName("valorPuntos")[0].textContent = luchadores[1].puntos;

    defensor.style.outline = "none";
    defensor.style.filter = "none";
    // Para que se vuelva a ejecutar la animación de un elemento existente
    defensor.style.animation = "";
    defensor.offsetWidth;
    defensor.style.animation = "mostrarCarta 1s";
    lucha.style.display = "flex";

    // Vamos a esperar un poco antes de la lucha en sí y mostrar los resultados
    setTimeout(luchar, 1500);

}

document.getElementById("nuevaPartida").addEventListener("click", nuevaPartida);
document.getElementById("crearLucha").addEventListener("click", crearLucha);