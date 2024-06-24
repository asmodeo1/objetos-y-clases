class Rectangulo {
    constructor(base, altura, color) {
        this.x = 0;
        this.y = 0;
        this.base = base;
        this.altura = altura;
        this.color = color; 
    }

    toString() {
        return `x: ${this.x} y: ${this.y} base: ${this.base} altura: ${this.altura} color: ${this.color}`;
    }

    area() {
        return this.base * this.altura;
    }
}