const r1 = new Rectangulo(3, 5, "rojo");
console.log(r1.toString());
console.log(r1.area());

const c1 = new Circulo(10, "verde");
console.log(c1.toString());
console.log(c1.area());

const cu1 = new Cuadrado(5, "azul");
console.log(cu1.toString());
console.log(cu1.area());

const figuras = [
    new Cuadrado(3, "verde"),
    new Cuadrado(5, "rosa"),
    new Rectangulo(3, 5, "negro"),
    new Circulo(4, "azul")
];

for (const f of figuras) {
    console.log(f.toString());
}

// Contar cuantos cuadrados hay en el array
let contador = 0;
for (const f of figuras) {
    if (f instanceof Cuadrado) {
        contador++;
    }
}
console.log("Hay " + contador + " cuadrados");

// Lo mismo con filter
console.log("Hay " + figuras.filter(f => f instanceof Cuadrado).length + " cuadrados");

function sonIgualesCuadrados(cuadrado1, cuadrado2) {
    if (cuadrado1.x == cuadrado2.x && cuadrado1.y == cuadrado2.y &&
        cuadrado1.lado == cuadrado2.lado && cuadrado1.color == cuadrado2.color) {
        return true;
    } else {
        return false;
    }
}

const cu2 = new Cuadrado(3, "verde");
console.log(sonIgualesCuadrados(cu1, cu2));