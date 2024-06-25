class Circulo extends Figura {

    constructor(radio, color) {
        super(color); // Debemos llamar al constructor del apdre usando super
        console.log("Creado círculo");
        // super debe hacerse antes de usar this
        this.radio = radio;
    }

    toString() {
        // Llamamos al método toString del padre para no repetir código
        return super.toString() + ` radio: ${this.radio}`;
    }

    area() {
        return Math.PI * this.radio * this.radio;
    }
}