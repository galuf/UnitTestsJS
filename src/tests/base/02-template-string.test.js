import { getSaludo } from "../../base/02-template-string";

describe("Pruebas en 02-template-string.js", () => {
  test("getSaludo debe retornar: Hola Alex", () => {
    const nombre = "Alex";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe(`Hola ${nombre}!`);
  });

  // getSaludo debe retornar Hola Carlos si no ahi argumento nombre
  test("getSaludo sin nombre retorna: Hola Carlos!", () => {
    expect(getSaludo()).toBe("Hola Carlos!");
  });
});
