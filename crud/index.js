 const d = document
 const input_todo = d.getElementById('ToDoList')
 const btn_add = d.getElementById('btn-add')
 const content_w = d.getElementById('content-wrapper')

const url ='http://localhost:3001/data'

const printTask = (task) =>{
    let li = d.createElement('li')
    li.textContent = task

    const btn_Uno = d.createElement('button')
    const btn_Dos = d.createElement('button')
    btn_Uno.textContent = 'Editar'
    btn_Dos.textContent = 'Eliminar'
    btn_Uno.addEventListener('click', ()=>{
        console.log("Editando");
    })

    btn_Dos.addEventListener('click', ()=>{
        console.log("Eliminando");
    })
    
    li.append(btn_Uno, btn_Dos)
    
    content_w.append(li)
}

const getData =() =>{
    fetch(url)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error))
}