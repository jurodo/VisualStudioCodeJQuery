const title     = document.getElementById('title')
const paragraph = document.querySelector('.paragraph') // selecciona el primer parrafo con clase paragraph
const span = paragraph.querySelector('span') // selecciona el primer span dentro del primer parrafo
const paragraph1 = document.querySelector('.paragraph:nth-child(1)')// selecciona el primer parrafo con clase paragraph
const paragraph2 = document.querySelector('.paragraph:nth-child(2)')// selecciona el segundo parrafo con clase paragraph

console.dir(title)
console.dir(paragraph)
console.dir(span)
console.dir(paragraph1)
console.dir(paragraph2)
