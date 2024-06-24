class Persona {
    nombre = ""; // No es obligatorio inicializarlos
    edad = 0;

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    } 

    // Cuando se devuelve un texto con la representación del objeto, se suele llamar toString
    toString() {
        return `Nombre: ${this.nombre} Edad: ${this.edad}`;
    }

    esMayorEdad() {
        if(this.edad >= 18) {
            return true;
        } else {
            return false;
        }
        // return this.edad >= 18;
    }

    cumplirAnhos() {
        this.edad++; // this.edad = this.edad + 1;
    }
}

const p1 = new Persona("Pepe", 30);
const p2 = new Persona("Eva", 15);
const p3 = new Persona("Sergio", 60);
p1.edad = 31;

console.log(p1.toString());
console.log(p2.toString());
console.log(p3.toString());

console.log(p1.esMayorEdad()); // true
console.log(p2.esMayorEdad()); // false

p1.cumplirAnhos();
p1.cumplirAnhos();
console.log(p1.edad); // Escribe 33


