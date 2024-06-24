class Cuadrado extends Figura{
    constructor(lado, color) {
        super(color);
        console.log("Creado el cuadrado");
        this.lado = lado;
    }

    toString() {
        return super.toString() + ` lado: ${this.lado}`;
    }

    area() {
        return this.lado * this.lado;
    }
}