import React from "react";
import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";

describe("pruebas en <PrimeraApp />", () => {
  test('debe de mostrar el mensaje "Hola, soy goku"', () => {
    const saludo = "Hola, soy Goku";

    const { getByText } = render(<PrimeraApp saludo={saludo} />);

    expect(getByText(saludo)).toBeInTheDocument();
  });
});
