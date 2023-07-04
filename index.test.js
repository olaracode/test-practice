// deestructuracion { sum y substract }
const { sum, substract, multiply } = require("./index");

test("La funcion suma de 1 + 1 debe retornar 2", () => {
  const result = sum(1, 1); // el caso de prueba
  // espera que el caso de prueba sea 2
  expect(result).toBe(2);
})

test("La funcion suma de 2 + 2 debe retornar 4", () => {
  const result = sum(2, 2);
  expect(result).toBe(4);
})

test("La funcion substract de 2 - 1 debe retornar 1", () => {
  const result = substract(2, 1);
  expect(result).toBe(1)
})
