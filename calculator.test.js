const {suma, division, multiplicacion, resta} = require("./calculator")


test("1 + 1 debe ser 2", () => {
  expect(suma(1, 1)).toBe(2)
})

test("2 + 2 no debe 22", () => {
  expect(suma("2", "2")).not.toBe("22")
})

test("2 / 2 debe ser 1", () => {
  expect(division(2,2)).toBe(1)
})

test("2 * 2 debe ser 4", () => {
  expect(multiplicacion(2,2)).toBe(4)
})

test("2 - 2 debe ser 0", () => {
  expect(resta(2, 2)).toBe(0)
})