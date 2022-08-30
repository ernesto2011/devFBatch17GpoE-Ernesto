//sirve para poder hacer que una funcion sincrona, pueda
// acceder a los valores de una funcion asincrona

const URL = "https://jsonplaceholder.typicode.com/users"

const  getData = async (url) => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data  
    } catch (error) {
        console.error(error)
        return error
    }
    
}

const showData = async () => {
   const finalData  = await getData(URL) 
   return console.log(finalData);
}
showData();

// const  getData =()=>{
//  return fetch(URL)
//     .then(response => response.json())
//     .then(data => data)
//     .catch(err => console.log(err))
// }

// const showData = () =>{
//     const finalData = getData()
//     return finalData
// }

// console.log(showData());
