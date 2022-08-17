//modo esctricto en javascript
"use strict"
//require === a importar
const XMLHTTPRequest = require("xmlhttprequest").XMLHttpRequest;

const url1 ="https://pokeapi.co/api/v2/pokemon/pikachu";

function getData(url, callback){
    let xhttp = new XMLHTTPRequest();
    xhttp.open('GET', url, true);
    xhttp.onreadystatechange = () =>{
        if (xhttp.readyState=== 4) {
          if (xhttp.status === 200) {

            callback(JSON.parse(xhttp.responseText), null);
            return;
            
          } else{
            callback(null, "Algo salio Mal");
          }
        }
    }
    xhttp.send();
}

getData(url1, (data, error)=>{
    console.log(data, error);
   });