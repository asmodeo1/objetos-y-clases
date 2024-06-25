class CpuCisc extends CpuRisc {
    #ERR = false;
    
    constructor(modelo) {
        super(modelo);
    }

    multiplicar() {
        // Si hubiésemos creado getters de la forma getAX, getBX, ...
        //this.setCX(this.getAX() * this.getBX());
        this.CX = this.AX * this.BX;
    }

    dividir() {
        if(this.BX == 0) {
            this.#ERR = true;
        } else {
            this.CX = this.AX / this.BX;
            this.#ERR = false;
        }
    }

    intercambiar() {
        // Se necesita una tercera variable para proteger el valor de AX
        const auxiliar = this.AX;
        this.AX = this.BX;
        this.BX = auxiliar;
    }

    toString() {
        return super.toString() 
            + "\nERR: " + this.#ERR;
    }
}