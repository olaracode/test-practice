function newUser(name, email, password){
  // {name: "octavio", email: "email", password: "contraseña"}
  return {
    username: name,
    email: email,
    password: password
  }
}


function greetUser(user){
  return `Hola ${user.name} comoe estas?`
}

module.exports = {
  newUser, greetUser
}