class Dado {
    #numeroLados = 4;

    constructor(lados) {
        if(lados > 4) {
            this.#numeroLados = lados;
        }
        // No hace falta hacer nada si son menos de 4 lados, pues hemos inicializado 
        // la propiedad con 4
    }

    tirar() {
        //return Math.floor(Math.random() * (this.#numeroLados - 1 + 1) + 1);
        return Math.floor(Math.random() * this.#numeroLados + 1);
    }
}