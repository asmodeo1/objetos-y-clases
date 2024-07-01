export class Personaje {
    #nombre;
    #ataque = 0;
    #defensa = 0;
    #salud = 0;
    #puntos = 0;
    #imagen;

    constructor(nombre, ataque, defensa, salud, imagen) {
        this.#nombre = nombre;
        this.#ataque = ataque;
        this.#defensa = defensa;
        this.#salud = salud;
        this.#imagen = imagen;
    }

    get nombre() {
        return this.#nombre;
    }

    get salud() {
        return this.#salud;
    }

    get puntos() {
        return this.#puntos;
    }

    get ataque() {
        return this.#ataque;
    }

    get defensa() {
        return this.#defensa;
    }

    get imagen() {
        return this.#imagen;
    }

    /**
     * Realiza una lucha entre dos personajes
     * @param {Personaje} enemigo 
     * @returns {number} - 1 si ganó el atacante, -1 si ganó el defensor y 0 si no ganó nadie
     */
    atacar(enemigo) {
        if(this.#ataque > enemigo.#defensa) {
            enemigo.#salud -= this.#ataque - enemigo.#defensa;
            this.#puntos++;
            return 1;
        } else if(this.#ataque < enemigo.#defensa) {
            this.#salud -= enemigo.#defensa - this.#ataque; 
            enemigo.#puntos++;
            return -1;
        } else {
            return 0;
        }
    }

    toString() {
        return `nombre: ${this.#nombre} salud: ${this.#salud} puntos: ${this.#puntos}`;
    }
}