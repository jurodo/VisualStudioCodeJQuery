
const _title = document.getElementById('title') //etiqueta h1
const _name = document.getElementById('name')   //input type=text

//Coloca un valor al atributo type del elemento input
//_name.setAttribute('type', 'number')
//_name.setAttribute('type', 'date')
//_name.setAttribute('type', 'text')

//Agrega Style del elemento input
_name.style.backgroundColor = "yellow"

//reemplaza la claseX por las claseY
_title.classList.replace('claseX','claseY')  

//agrega una o mas clases al elemento h1
_title.classList.add('claseA','claseB','claseC','claseW','claseZ')

//eliminar una o mas clases del elemento h1
_title.classList.remove('claseW','claseZ')

//Contenido de un elemento   
console.log(_title.innerHTML)  //trae todo el contenido
console.log(_title.textContent) //trae solo el texto

//Valor del input
_name.value = "Juanca"
console.log(_name.value.length)  //para evaluar si ingresaron data

//muestra el elemento   
console.log (_title)
console.log( _name )
