class Personaje {
    #nombre;
    #ataque = 0;
    #defensa = 0;
    #salud = 0;
    #puntos = 0;

    constructor(nombre, ataque, defensa, salud) {
        this.#nombre = nombre;
        this.#ataque = ataque;
        this.#defensa = defensa;
        this.#salud = salud;
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

    atacar(enemigo) {
        if(this.#ataque > enemigo.#defensa) {
            enemigo.#salud -= this.#ataque - enemigo.#defensa;
            this.#puntos++;
        } else if(this.#ataque < enemigo.#defensa) {
            this.#salud -= enemigo.#defensa - this.#ataque; 
        }
    }

    toString() {
        return `nombre: ${this.#nombre} salud: ${this.#salud} puntos: ${this.#puntos}`;
    }
}