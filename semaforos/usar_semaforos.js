const s1 = new Semaforo();
console.log(s1.toString()); // encendido: false color: Rojo
s1.encender();
s1.cambiarColor();
console.log(s1.toString()); // encendido: true color: Verde
console.log("El color actual es " + s1.getColorActual()); // El color actual es Verde
console.log("El color actual es " + s1.colorActual); // El color actual es Verde
