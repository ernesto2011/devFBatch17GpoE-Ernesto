function soyCien() { return 100 }
function soyDoscientos() { return 200 }

function sumaFunciones(unaFuncion, otraFuncion) {
    const suma =unaFuncion() + otraFuncion()
    return suma
}

console.log(sumaFunciones(soyCien, soyDoscientos));