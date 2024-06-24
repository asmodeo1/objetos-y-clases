class Rectangulo extends Figura {
    constructor(base, altura, color) {
        super(color);
        console.log("Creado un rectángulo");
        this.base = base;
        this.altura = altura;
    }

    toString() {
        return super.toString() + ` base: ${this.base} altura: ${this.altura}`;
    }

    area() {
        return this.base * this.altura;
    }
}