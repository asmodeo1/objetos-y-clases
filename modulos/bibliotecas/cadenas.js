
export function inicial(cadena) {
    if(cadena.length == 0) {
        return null;
    } else {
        return cadena[0];
    }
}

export function tieneVocales(cadena) {
    return /^.*[aeiouáéíóúäëïöüàèìòù]+.*$/i.test(cadena);
}

export function cifrar(cadena) {
    let resultado = "";
    for (const c of cadena) {
        resultado += String.fromCharCode((c.charCodeAt() + 1))
    }
    return resultado;
}