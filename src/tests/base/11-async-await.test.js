import { getImagen } from "../../base/11-async-await";

describe("Pruebas con Async await y Fetch", () => {
  test("Debe retornar el url de la img", async () => {
    const url = await getImagen();
    expect(url.includes("https://")).toBe(true);
  });
});
