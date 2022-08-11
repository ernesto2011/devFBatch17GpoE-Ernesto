const hola = ()=>{
    setTimeout(() => {
        return 'Hola'
    }, 1500);
}

const hablar = ()=>{
    setTimeout(() => {
        return 'mensaje'
    }, 1100);
}

console.log(hola());
console.log(hablar());