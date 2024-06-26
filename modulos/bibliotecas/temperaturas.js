
function cToF(grados) {
    return (grados * 9 / 5) + 32;
}

function fToC(grados) {
    return (grados -32) * 5 / 9;
}

function cToK(grados) {
    return grados + 273.15;
}

function kToC(grados) {
    return grados - 273.15;
}

export {cToF, cToK, fToC};