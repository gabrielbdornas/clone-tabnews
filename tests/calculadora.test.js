const calculadora = require("../models/calculadora");

test("1 + 1 == 2", () => {
  const resultado = calculadora.somar(1, 1);
  expect(resultado).toBe(2);
});

test("5 + 100 == 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("'banana' + 100 == 'Erro'", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("Erro");
});

test("5 + 'banana' == 'Erro'", () => {
  const resultado = calculadora.somar(5, "banana");
  expect(resultado).toBe("Erro");
});

test("5 / 0 == 'Erro'", () => {
  const resultado = calculadora.dividir(5, 0);
  expect(resultado).toBe("Erro");
});
