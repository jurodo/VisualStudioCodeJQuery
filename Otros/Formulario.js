const name   = document.getElementById('name');
const email  = document.getElementById('email')
const gender = document.getElementById('gender')
const terms  = document.getElementById('terms')

const button  = document.getElementById('button')

const formIsValid = {
    name:false,
    email:false,
    gender:false,
    terms:false
}

button.addEventListener('click', (e) => {
    const rpta = validateForm()
    console.log(rpta)
    if ( rpta == 'ok')
       alert ("formulario valido")
    else
       alert ("formulario invalido")
})


name.addEventListener('change', (e)=>{
    console.dir(e.target)
    if (e.target.value.trim().length > 0) formIsValid.name = true;
})

email.addEventListener('change', (e)=>{
    console.dir(e.target)
    if (e.target.value.trim().length > 0) formIsValid.email = true;
})

gender.addEventListener('change', (e)=>{
    console.dir(e.target.value)
    formIsValid.gender = e.target.checked;
})
 
 terms.addEventListener('change', (e)=>{
    console.dir(e.target)
    formIsValid.terms = e.target.checked;
    e.target.checked ? button.removeAttribute('disabled') : button.setAttribute('disabled', true)
 })

 const validateForm = ()=>{
     const formValues = Object.values(formIsValid) // convierte el objeto en un array
     console.log(formValues)
     const valid = formValues.findIndex(value => value == false) //busca el valor false en los elementos del array

     if (valid == -1)   // no encuentra ningun elemento con valor false
        return 'ok'
     else
        return 'ko'

 }