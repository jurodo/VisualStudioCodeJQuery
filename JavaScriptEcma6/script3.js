const link        = document.getElementById('link')
const button      = document.getElementById('button')
const table       = document.getElementById('table')
const inputNombre = document.getElementById('inputNombre')

//recorre el table
const tr = Array.from(document.querySelectorAll('tr'))  //devuelve un array con los TR del table
//recorre el array que contiene todos los tr
tr.map((p)=> {
    p.style.color = "green"
    p.style.backgroundColor = "yellow"
    
    const _td = Array.from(p.querySelectorAll('td')) //devuelve un array con los TD de cada fila
    console.dir("---columnas--")
    console.dir(p)
    console.dir(_td[0].innerText)
    console.dir(_td[1].innerText)
    console.dir(_td[2])
    console.dir("Checked:" + _td[3].childNodes[0].checked)

}) 

//evento click para todos los elementos dentro del table
//se dispara el elemento que recibe el click ( celdas, botones y checks dentro de las celdas)
table.addEventListener('click', (e)=>{
    console.dir (e.target)
    console.log ("e.target.textContent:" + e.target.textContent)
    e.target.classList.add('red')
})

//evento click para el enlace
link.addEventListener('click', (e)=>{
    e.preventDefault()
    button.click()
})

//evento click para el boton
button.addEventListener('click', ()=>{
    inputNombre.value = "Has hecho click"
    inputNombre.disabled=true
    inputNombre.style.backgroundColor = "yellow"
    //inputNombre.style = "Display:none"    
    //inputNombre.style.display="none"
})

//evento keyup de la caja de texto
inputNombre.addEventListener('keyup', (e)=>{
    console.log(e.key)   //muestra las teclas que vas pulsando
})

//evento click para todos elementos dentro del formulario
//se dispara el elemento que recibe el click. Un input text, button, etc...
form.addEventListener('click', (e) => {
    e.preventDefault()
    console.dir (e.target)
    console.dir (e.target.value)
    console.dir (e.target.id)
})

//evento submit del formulario para el bototn submit
//form.addEventListener('submit', (e) => {
//    e.preventDefault()
//    console.log ('El formulario se ha enviado')
//})

