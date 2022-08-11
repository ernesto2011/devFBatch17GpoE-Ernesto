// es cuando una funcion de ordenMador, ejecuta la(s) funcion(es)

function ordenMayor(otraFuncion) {
    return otraFuncion()
}

const suma =(a,b)=> a+b
const resta = (a, b) => a-b
const mult = (a,b) => a*b
const division =(a,b) => a/b
const calculadora =(a, b, operacion)=> operacion(a, b)
console.log(calculadora(9,17, suma));
console.log(calculadora(9,17, resta));
console.log(calculadora(9,17, mult));
console.log(calculadora(9,17, division));