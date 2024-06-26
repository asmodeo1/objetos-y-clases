/* Almacenamiento local solo guarda texto, con lo que si queremos guardar objetos
debemos convertirlos a texto. Lo más sencillo sería usar JSON.stringfy(objeto) pero no
puede guardar atributos privados, con lo que tendremos que hacerlo a mano */
/**
 * Guarda las habitaciones en el almacenamiento local
 * @param {Habitacion []} habitaciones - las habitaciones a guardar
 */
export function guardar(habitaciones) {
    let datos = "[";
    for (const h of habitaciones) {
        datos += `{"numero": ${h.numero}, "camas": ${h.camas},"ocupada": ${h.isOcupada()}},`
    }
    // Debemos quitar la última coma de la última habitación
    // -1 pues las cadenas comienzan en cero
    datos = datos.slice(0, datos.length - 1);
    datos += "]";
    localStorage.setItem("habitaciones", datos);
    // Si los atributos de habitación no fuesen privados bastaría con esto:
    //localStorage.setItem("habitaciones", JSON.stringfy(habitaciones));
}

/**
 * Carga las habitaciones del almacenamiento local
 * @returns {[]} - un array con los datos de las habitacione o null si no las había
 */
export function cargar() {
    const datos = localStorage.getItem("habitaciones");
    if(datos == null) {
        return null;
    }
    // Convierte una cadena JSON en objetos JavaScript
    return JSON.parse(datos);
}