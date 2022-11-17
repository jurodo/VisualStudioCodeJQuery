const buttonImg = document.getElementById('button-img')
const buttonPdf = document.getElementById('button-pdf')

buttonImg.addEventListener('click',()=>{
    document.getElementById('img').src = 'Recursos/JC.jpg'
})

buttonPdf.addEventListener('click',()=>{
    document.getElementById('pdf').href = 'Recursos/JC.pdf'
    
})