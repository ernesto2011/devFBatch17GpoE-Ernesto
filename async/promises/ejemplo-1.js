// "use strict"
// const nombre = 'Juan'
// console.log(nombre);
"use strict"

let x = 10

const promesa = new Promise((resolve, reject) => {
    if (x === 10) {
        return resolve('promesa cumplida')
    }
    return reject('Usted confio en mi y yo le falle...')
})

promesa
    .then((response) => {
        console.log(response);
        return 'Otra respuesta'
    })
    .then((response2)=>{
        console.log(response2);
    })
    .then(()=>{
        console.log('Soy un then sin parametros/puedo ser logica');
    })
    .catch((err) => {
        console.log(err);
    })