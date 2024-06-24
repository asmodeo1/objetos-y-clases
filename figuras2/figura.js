class Figura {
    constructor(color) {
        console.log("Creada figura");
        this.x = 0;
        this.y = 0;
        this.color = color;
    }

    toString() {
        return `x: ${this.x} y: ${this.y} color: ${this.color}`;
    }
}