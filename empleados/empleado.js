class Empleado extends Persona {
    constructor(nombre, edad, salarioBruto) {
        super(nombre, edad);
        this.salarioBruto = salarioBruto;
    }

    toString() {
        return super.toString() + " salario: " + this.salarioBruto;
    }

    salarioNeto() {
        return this.salarioBruto - this.salarioBruto * 0.21;
    }
}