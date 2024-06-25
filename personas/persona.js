class Persona {

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

