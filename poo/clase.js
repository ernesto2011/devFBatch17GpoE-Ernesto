"use strict"

class Animal{
    constructor(especie, color, sonido){
        this.especie = especie,
        this.color = color,
        this.sonido = sonido
    }
    emitirSonido() {
        return console.log(this.sonido);
    }
}

const jirafa = new Animal('jirafa', 'amarillo', "ffff")
console.log(jirafa.especie)

jirafa.emitirSonido()