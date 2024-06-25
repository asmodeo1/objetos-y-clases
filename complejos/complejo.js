class Complejo {
    #parteReal = 0;
    #parteImaginaria = 0;

    constructor(parteReal, parteImaginaria) {
        this.#parteReal = parteReal;
        this.#parteImaginaria = parteImaginaria;
    }

    get parteReal() {
        return this.#parteReal;
    }

    get parteImaginaria() {
        return this.#parteImaginaria;
    }

    set parteReal(parteReal) {
        this.#parteReal = parteReal;
    }

    set parteImaginaria(parteImaginaria) {
        this.#parteImaginaria = parteImaginaria;
    }

    toString() {
        return `${this.#parteReal} + ${this.#parteImaginaria}i`;
        //return this.#parteReal + "+" + this.#parteImaginaria + "i";
    }

    // Podríamos modificar un complejo existente o crear uno nuevo, que es lo que hacemos
    sumar(complejo){
        return new Complejo(this.#parteReal + complejo.parteReal, this.#parteImaginaria + complejo.parteImaginaria);
    }

    // Podríamos modificar un complejo existente o crear uno nuevo, que es lo que hacemos
    restar(complejo){
        return new Complejo(this.#parteReal - complejo.parteReal, this.#parteImaginaria - complejo.parteImaginaria);
    }

    comparar(complejo) {
        /*if(this.#parteReal == complejo.parteReal && this.#parteImaginaria == complejo.parteImaginaria) {
            return true;
        } else {
            return false;
        }*/

        return this.#parteReal == complejo.parteReal && this.#parteImaginaria == complejo.parteImaginaria;

        /*const resultado = this.restar(complejo);
        return resultado.parteReal == 0 && resultado.parteImaginaria == 0;*/
    }

    // Esto no lo pide el ejercicio
    static sumar(complejo1, complejo2) {
        return new Complejo(complejo1.parteReal + complejo2.parteReal, complejo1.parteImaginaria + complejo2.parteImaginaria);
    }

    static restar(complejo1, complejo2) {
        return new Complejo(complejo1.parteReal - complejo2.parteReal, complejo1.parteImaginaria - complejo2.parteImaginaria);
    }

    static comparar(complejo1, complejo2) {
        return complejo1.parteReal == complejo2.parteReal && complejo1.parteImaginaria == complejo2.parteImaginaria;
    }
}







