let button = document.getElementById('button')
let list = document.getElementById('list')

button.addEventListener('click',()=>{
    //let xhr
    //if (window.XMLHttpRequest){
    //    xhr = new XMLHttpRequest()
    //}
    //else{
    //   xhr = new ActiveXObject("Microsoft.XMLHTTP") // compatibilidad con iexplorer
    //}
    
    let xhr = new XMLHttpRequest()
    xhr.open('GET','https://jsonplaceholder.typicode.com/users')
    xhr.onload = function () {
        console.dir(this.responseText)
        console.dir(JSON.parse(this.responseText))
        let dataJSON = JSON.parse(this.responseText)
        
        let fragment = document.createDocumentFragment() 
        
        for (let userInfo of dataJSON){
            const item = document.createElement('LI')
            item.textContent = `${userInfo.id} - ${userInfo.name}`
            fragment.appendChild(item)
        }
        list.appendChild(fragment)
    };
    xhr.send()
})