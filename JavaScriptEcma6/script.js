////funcion que muestra un saludo, recibe parametro user
const saludar = (user)=>user
console.log( "Hola " + saludar("jc"))

////funcion retorna suma
const suma = (num1, num2) => num1+num2
console.log(suma(1,3))

////Objeto Persona
const persona = {nombre:    "Juan Carlos", 
                 edad:       51, 
                 nacimiento: new Date(1969, 9, 3, 15, 45, 15, 0), 
                 defuncion:  new Date("2018/01/30 23:30:14"),
                 fecha:      new Date()}
console.log(persona.nacimiento);
console.table(persona);

/////Clase Book
class Book{
    constructor(title, author, year, gender){
       this.title  = title
       this.author = author
       this.year   = year
       this.gender = gender
    }
}
////Carga la clase Book
let A = []
while (A.length < 1 ){
     let title  = prompt('Titulo:')
     let author = prompt('Author:')
     let year   = prompt('Year:')
     let gender = prompt('Gender:')

     if (title=='') break;
     if (title !='' && author != '' && !isNaN(year) && year.length == 4 
          && (gender=='accion' || gender=='terror' || gender=='comedia'))
     {
        alert(A.length)
        A.push(new Book(title, author, year, gender))
        alert(A.length)
     }
}
console.table(A)

////Recorro el array A
for (const obj of A){
    console.log("Title:" + obj.title + " Author:" + obj.author + " Year: " + obj.year)
}

////funcion que llena un array con el adto author del array A
const orderAuthors = ()=>{
    let authors = []
    for(const book of A){
        authors.push(book.author)
    }
    console.table(authors.sort())
}
orderAuthors()

////Funcion que busca por genero en la clase Book
const SearchGender = () =>{
    let _gender = prompt('Genero a buscar:')    
    for (let book of A){
           if (_gender == book.gender)  
              console.log( `El libro ${book.title} es de ${book.author}` )
    }
}
SearchGender()

/////lleva a un array un texto, donde cada letra seria un elemento del array
let word = "hola mundo"
let a = Array.from(word)
console.log(a[0])
//igual split
let b = word.split('')
console.log(b[0])

///Array para los ejercicios siguientes
let numbers = [10,12,8,6,9,9]

////Bucle foreach para recorrer un array
numbers.forEach((number,index)=> console.log( `el elemento ${index} vale ${number}`))

///Bucle foreach recorre los objetos del array A en la variable book
A.forEach( ( book, index ) => console.log( `el elemento ${index} vale ${book.title}`) )

///Bucle map recorre el array numbers en la variable number y devuelve un nuevo array "num1"
let num1 = numbers.map( (number) => number*2 )
console.log(num1)

////Bucle filter recorre el array numbers en la variable number y devuelve un nuevo array "num2"
//que cunpla con la condicion
let num2 = numbers.filter( (number) => number>8)
console.log(num2)

////Array de objetos de usuarios
const users = [
    {  name: "user1",  online: true },
    {  name: "user2",  online: false},
    {  name: "user3",  online: true }
]
/////Bucle reduce, recorre los objetos del array users en la variable user
const Cantidad = users.reduce( (cont, user) => {
        if (user.online)  cont++
        return cont
},0)
console.log(`Hay ${Cantidad} usuarios conectados`)

////añadir al array users_1 los elementos del array users_2
//los tres puntos suspensivos (spread operator) antes del array "users_2" devuelve una cadena con sus elementos separados por comas
let users_1 = ['ana','juan','tito','jose']                                       
let users_2 = ['xxx','xxx']                                       
users_1.unshift (...users_2) //agrega los elementos de users_2 al inicio de users_1
users_1.push (...users_2)   //agrega los elementos de users_2 al final de users_1
console.log(users_1)

//devuelve el indice del elemento "R", devuelve valor 2
const fruits = ["X", "R", "A", "B"];
console.log( fruits.indexOf("R") );

//si encuentra el elemento "B" devuelve true
console.log(fruits.includes("B"));

//elimina 1 elemento, a partir la posicion 2 y devuelve el elemento
console.log(fruits.splice(2, 1));
console.log(fruits);

//Devuelve los elementos en orden inverso
console.log(fruits.reverse());

//devuelve los elementos separados por un guion
console.log(fruits.join("-"));

////Valor maximo del array numbers
console.log(Math.max(...numbers))

////Valor minimo del array numbers
console.log(Math.min(...numbers))

////Eliminar elementos duplicados del array numbers
console.log([...new Set(numbers)])

