//

describe("Pruebas en el archivo demo.test.js", () => {
  test("deben de ser iguales los strings", () => {
    //Inicializacion
    const mensaje = "Hola mundo";

    //Estimula
    const mensaje2 = `Hola mundo`;

    // Observar el comportamiento
    expect(mensaje).toBe(mensaje2);
  });
});
