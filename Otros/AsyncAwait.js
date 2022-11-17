const users = [
    {id : 1, name : "Dorian"},
    {id : 2, name : "Laura"},
    {id : 3, name : "Carlos"}
]

const emails = [
   {id: 1 , email:"dorian@gmail.com"},
   {id: 2 , email:"Layra@gmail.com"}
]

const getUser = async (id) => {
    const user = users.find( user => user.id == id)
    if (!user)
       throw new Error(`No existe el usuario con id ${id}`)
    else
       return user
}

const getEmail = async (user) => {
    const email = emails.find(email=> email.id == user.id)
    if (!email) 
       throw new Error(`No existe email para el user ${user.name}`)
    else
       return ({
                     id: user.id, 
                     name: user.name, 
                     email: email.email
              })
}

const getInfo = async (id) => {
    try
    {
      const user = await getUser(id)
      const res = await getEmail(user)
      return `el usuario ${res.name} tiene email ${res.email}`
    }
    catch(error)
    {
      return error
    }
}

getInfo(4).then(res => console.log(res))