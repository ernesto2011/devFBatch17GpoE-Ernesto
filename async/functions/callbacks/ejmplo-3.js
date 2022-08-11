function hola(nombre, unaFuncion){
    setTimeout(() => {
        return unaFuncion(nombre)
    },1500);
}

hola('Samantha', nombre=>{
return console.log('hola ' + nombre +'!');
})
hola('Pablo', nombre=>{
    return console.log('hola ' + nombre +'!');
    })