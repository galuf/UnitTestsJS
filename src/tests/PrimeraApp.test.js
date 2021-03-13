import React from "react";
import { shallow } from "enzyme";
import PrimeraApp from "../PrimeraApp";

describe("pruebas en <PrimeraApp />", () => {
  //test('debe de mostrar el mensaje "Hola, soy goku"', () => {
  // const saludo = "Hola, soy Goku";
  // const { getByText } = render(<PrimeraApp saludo={saludo} />);
  // expect(getByText(saludo)).toBeInTheDocument(); // Con enzime esto ya no funciona
  //});

  test('Debe mostrar "Hola soy Goku"', () => {
    const saludo = "Hola, soy Goku";
    const wraper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wraper).toMatchSnapshot();
  });

  test("Debe mostrar el suvtituo enviado por props ", () => {
    const saludo = "Hola, soy Goku";
    const subTitulo = "Hola, soy Vegeta";
    const wraper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subTitulo} />
    );

    const textoParrafo = wraper.find("p").text();

    expect(textoParrafo).toBe(subTitulo);
  });
});
