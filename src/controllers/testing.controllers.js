import path from "path";
import { fileURLToPath } from "url";

export const defaultR = (req, res) => {
  const datos = [
    {
      nombre: "Home",
      poder: "Hello World",
      vida: "si",
      defensa: "si",
      ataque: "si",
      dano: "si",
      imagen: "/img/cedric.jpg",
    },
    {
      nombre: "Home",
      poder: "Hello World",
      vida: "si",
      defensa: "si",
      ataque: "si",
      dano: "si",
      imagen: "/img/cedric.jpg",
    },
    {
      nombre: "Home",
      poder: "Hello World",
      vida: "si",
      defensa: "si",
      ataque: "si",
      dano: "si",
      imagen: "/img/cedric.jpg",
    },
    {
      nombre: "Home",
      poder: "Hello World",
      vida: "si",
      defensa: "si",
      ataque: "si",
      dano: "si",
      imagen: "/img/cedric.jpg",
    },
    {
      nombre: "Home",
      poder: "Hello World",
      vida: "si",
      defensa: "si",
      ataque: "si",
      dano: "si",
      imagen: "/img/cedric.jpg",
    },
    {
      nombre: "Home",
      poder: "Hello World",
      vida: "si",
      defensa: "si",
      ataque: "si",
      dano: "si",
      imagen: "/img/cedric.jpg",
    },
  ];
  console.log(datos);
  res.render("visualizacion_inventario", { datos });
};

export const defaultR2 = (req, res) => {
  res.render("creacion_carta");
};

