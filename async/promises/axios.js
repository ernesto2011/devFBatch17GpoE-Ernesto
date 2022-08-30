"use strict"

const axios = require("axios");
const urlPokemon = "https://pokeapi.co/api/v2/pokemon/pikachu";


axios
    .get(urlPokemon)
    .then((response) => {
        console.log(response.data);
    })
    .catch((err) => {
        console.log(err);
    });