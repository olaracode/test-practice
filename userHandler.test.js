const {newUser, greetUser} = require("./userHandler")


test("Debe crear un usuario {username, email, password}", () => {
  const nuevoUsuario = newUser("octavio", "octavioasapchi@gmail.com", "contraseña");

  expect(nuevoUsuario).toEqual({
    username: "octavio",
    email: "octavioasapchi@gmail.com",
    password: "contraseña"
  })
})


// TDD -> Test Driven Development

// hago test