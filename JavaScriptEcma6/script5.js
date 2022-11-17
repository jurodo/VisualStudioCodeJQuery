const parent = document.getElementById('parent') //elemento UL

console.dir(parent.parentElement)  //muestra el nodo padre: etiqueta NAV
console.dir(parent.parentElement.parentElement)  //muestra el nodo abuelo: etiqueta BODY

console.dir(parent.children)  //muestra todos los elementos hijos: LI
console.dir(parent.children[0])  //muestra el primer hijo: LI

console.dir(parent.firstElementChild)  //muestra el primer hijo: LI
console.dir(parent.lastElementChild)  //muestra el ultimo hijo: LI

console.dir(parent.hasChildNodes())  //muestra True si el nodo tiene hijos y false si no

console.dir(parent.nextElementSibling)  //devuelve el siguiente nodo hermano de UL (muestra null porque no tiene hermanos)
console.dir(parent.parentElement.nextElementSibling)//devuelve el siguiente nodo hermano del padre de UL, osea la etiqueta <script>
console.dir(parent.parentElement.previousElementSibling)//devuelve el siguiente nodo hermano del padre de UL, osea la etiqueta <h1>


const PrimerULLI = parent.lastElementChild.children[0]
PrimerULLI.style.backgroundColor = "yellow"

