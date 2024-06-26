export const PI = 3.141516; // Recordemos que PI existe en Math.PI

function isPar(numero) {
    return numero % 2 == 0;
}

export function isImpar(numero) {
    return numero % 2 == 1;
}

export function isPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if(numero % i == 0) {
            return false;
        }
    }
    return true;
}

