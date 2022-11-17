const days       = ["Lunes", "Martes","Miercoles","Jueves","Viernes","Sabado","Domingo","SABAT"]
const title      = document.getElementById("title")
const daysList   = document.getElementById("daysList")
const daysSelect = document.getElementById("daysSelect")

//Ejemplo de uso de innerHTML
title.innerHTML = "DOM - <span> Crear e insertar elementos I </span>"

//Cargamos los dias de la semana en la lista ul daysList
//con la propiedad innerHTML
for(const day of days)
{
   daysList.innerHTML += "<li>" + day + "</li>"
}

//Cargamos los dias de la semana en la list ul daysList
//utilizando fragmentos
const fragment = document.createDocumentFragment()
for (const day of days)
{
    const item  = document.createElement("LI")
    item.textContent = day
    fragment.appendChild(item)
}
daysList.appendChild(fragment)


//Cargamos los días de la semana en el select daysSelect
const fragmentSelect = document.createDocumentFragment()
for (const day of days)
{
    const opt  = document.createElement("option")
    opt.textContent = day
    opt.value = day
    if ( day == "Jueves" ) opt.selected = true
    fragmentSelect.appendChild(opt)
}
daysSelect.appendChild(fragmentSelect)
