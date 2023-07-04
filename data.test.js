// Una tiene que tener un optra y la otra tiene que tener leche
const {shoppingList, cars} = require("./data")

test("La lista de carros tiene un optra", () => {
  expect(cars).toContain("Bentley")
})


test("La lista de carros no puede tener perros", () => {
  expect(cars).not.toContain("Golden retriever")
})

test("La lista de compras tiene leche", () => {
  expect(shoppingList).toContain("leche")
})