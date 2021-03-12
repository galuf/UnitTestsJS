import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("prueba 05 Funciones", () => {
  test("getUsuario Debe retornar un Objeto", () => {
    const usuario = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();
    expect(user).toEqual(usuario);
  });

  test("getUsuarioActivo Debe retornar un Objeto", () => {
    const nombre = "Alex";
    const userTest = {
      uid: "ABC567",
      username: nombre,
    };
    expect(getUsuarioActivo(nombre)).toEqual(userTest);
  });
});
