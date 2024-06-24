const c1 = new Cuenta(1, "Pepe", 1000);
const c2 = new Cuenta(1, "Eva", 1200);
console.log(c1.obtenerSaldo()); // 1000
c1.ingresar(75);
console.log(c1.obtenerSaldo()); // 1075

if(c1.retirar(2000) == false) {
    console.log("No hay saldo suficiente: " + c1.obtenerSaldo());
} else {
    console.log("Operación realizada. Saldo actual: " + c1.obtenerSaldo());
}

// Error pues #saldo es privado
// c1.#saldo = -3000;
