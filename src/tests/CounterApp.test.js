import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas para el <CounterApp />", () => {
  const wrap = shallow(<CounterApp />);

  test("Debe mostrar correctamente", () => {
    expect(wrap).toMatchSnapshot();
  });

  test("Debe mostrar el valor por defecto de 100", () => {
    const num = 100;
    const wrap = shallow(<CounterApp value={num} />);
    const value = wrap.find("h2").text();

    expect(value).toBe(String(num));
  });

  test("Debe de incrementer con el boton +1", () => {
    wrap.find("button").at(0).simulate("click");

    const value = wrap.find("h2").text();

    expect(value).toBe("11");
  });

  test("Debe de decrementer con el boton -1", () => {
    const lastValue = wrap.find("h2").text();

    wrap.find("button").at(2).simulate("click");

    const finalValue = wrap.find("h2").text();

    expect(finalValue).toBe(String(lastValue - 1));
  });

  test("Debe colocar el valor por defecto al presionar reset", () => {
    const num = 105;
    const wrap = shallow(<CounterApp value={num} />);
    wrap.find("button").at(2).simulate("click");
    wrap.find("button").at(2).simulate("click");
    wrap.find("button").at(1).simulate("click");

    const value = wrap.find("h2").text();

    expect(value).toBe(String(num));
  });
});
