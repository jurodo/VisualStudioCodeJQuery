let button = document.getElementById('button')
let list = document.getElementById('list')

button.addEventListener('click',()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then (res=>res.json())
        .then (res =>{
            let fragment = document.createDocumentFragment() 
            for (let userInfo of res){
                const item = document.createElement('LI')
                item.textContent = `${userInfo.id} - ${userInfo.name}`
                fragment.appendChild(item)
            }
            list.appendChild(fragment)
        })
})