let button = document.getElementById('btn')

button.addEventListener('click',()=>{
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then(res => res.json())
        .then(res => console.log(res));
    })