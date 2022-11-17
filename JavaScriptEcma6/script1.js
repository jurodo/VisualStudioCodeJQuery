const title = document.getElementById('title')  // ubica el h1 elemento mediante el Id
const span1 = title.querySelector('span')  //elemento span dentro del h1
span1.textContent = "chau"  //cambia el contenido al span
span1.style.color = "blue"

//title.textContent = "Cambio Juan carlos"
title.style.color="Red"
title.style.backgroundColor="yellow"

const paragraph = document.querySelector('.paragraph')  // ubicar el primer elemento mediante la clase ( es un parrafo p)
const span2 = paragraph.querySelector('span')          // dentro del parrafo hay un span
span2.style.color="Blue"

const paragraphArray = Array.from(document.querySelectorAll('.paragraph'))  //selecciona todos los parrafos y devuelve un array
paragraphArray.map((p)=> p.style.color = "green") // recorre el array que contiene los parrafos y cambia el color a verde


