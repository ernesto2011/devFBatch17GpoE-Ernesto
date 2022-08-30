
"use strict";

//danielapi.com/usuarios

function getData() {
  fetch("http://localhost/usuarios")
    .then((response) => response.json())
    .then((data) => {
      const nombre = document.getElementById("nombre");
      nombre.innerHTML = data.nombre;
    })
    .catch((err) => {
      console.log("Este es el error: ", err);
    });
}
