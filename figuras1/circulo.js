class Circulo {
    constructor(radio, color) {
        this.x = 0;
        this.y = 0;
        this.radio = radio
        this.color = color; 
    }

    toString() {
        return `x: ${this.x} y: ${this.y} radio: ${this.radio} color: ${this.color}`;
    }

    area() {
        return Math.PI * this.radio * this.radio;
    }
}