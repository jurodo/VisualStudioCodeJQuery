let btn = document.getElementById('btn')

btn.addEventListener('click', (e)=>{
    sendData();
})

const sendData = ()=>{
   let xhr = new XMLHttpRequest();
   xhr.open('POST','https://jsonplaceholder.typicode.com/posts',true);
   xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
   xhr.onload = function () {
    console.log(this.responseText);
    
    let dataJSON = JSON.parse(this.responseText);
    
    console.dir(dataJSON);
    
    console.dir(dataJSON.title)
    console.dir(dataJSON.body)
    console.dir(dataJSON.userId)
    console.dir(dataJSON.id)

   };
   
   xhr.send('title=foo&body=bar&userId=1');

}