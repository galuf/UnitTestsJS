// import {}

import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en funciones de heroes", () => {
  test("Debe retornar un heroe por ID", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find((h) => h.id === id);
    expect(heroe).toEqual(heroeData);
  });

  test("Debe retornar undefined si heroe no existe", () => {
    const id = 10;
    const heroe = getHeroeById(id);
    expect(heroe).toBe(undefined);
  });

  test("Debe retornar un arreglo con los heroes de DC", () => {
    const heroesDC = getHeroesByOwner("DC");
    const heroesData = heroes.filter((h) => h.owner === "DC");

    expect(heroesDC).toEqual(heroesData);
  });

  test("Debe retornar un arreglo con los heroes de Marbel", () => {
    const heroesDC = getHeroesByOwner("Marvel").length;
    const heroesData = heroes.filter((h) => h.owner === "Marvel").length;

    expect(heroesDC).toBe(heroesData);
  });
});
