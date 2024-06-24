const v1 = new Vehiculo("56712", 4);
v1.arrancar();
v1.acelerar(10);
v1.acelerar();
console.log(v1.getVelocidadActual()) // 11
v1.parar();
v1.setMatricula("gt671");
