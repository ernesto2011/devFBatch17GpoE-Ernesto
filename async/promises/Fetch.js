"use strict"

const url1 = "https://pokeapi.co/api/v2/pokemon/pikachu";

function getData(url) {
    return new Promise((resolve, reject) => {

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const pokemon = getData(url1);
pokemon
    .then((data) => {
        console.log("Resultado correcto", data);
    })
    .catch((error) => {
        console.log('Ocurrio un error ', error);
    });