import path from "path";
import { fileURLToPath } from "url";

export const defaultR = (req, res) => {
  const datos = [
    {
      nombre: "Nuevo personaje",
      poder: "Hello World",
      vida: "si",
      defensa: "si",
      ataque: "si",
      dano: "si",
      imagen: "/Imagenes/foto_en_bkanco.webp",
    },
    {
      nombre: "Home",
      poder: "Hello World",
      vida: "si",
      defensa: "si",
      ataque: "si",
      dano: "si",
      imagen: "/Imagenes/cedric.jpg",
    },
    {
      nombre: "Home",
      poder: "Hello World",
      vida: "si",
      defensa: "si",
      ataque: "si",
      dano: "si",
      imagen: "/Imagenes/cedric.jpg",
    },
    {
      nombre: "Home",
      poder: "Hello World",
      vida: "si",
      defensa: "si",
      ataque: "si",
      dano: "si",
      imagen: "/Imagenes/cedric.jpg",
    },
    {
      nombre: "Home",
      poder: "Hello World",
      vida: "si",
      defensa: "si",
      ataque: "si",
      dano: "si",
      imagen: "/Imagenes/cedric.jpg"
    },
    {
      nombre: "Home",
      poder: "Hello World",
      vida: "si",
      defensa: "si",
      ataque: "si",
      dano: "si",
      imagen: "/Imagenes/cedric.jpg",
    },
  ];
  console.log(datos);
  res.render("visualizacion_inventario", { datos });
};

export const defaultR2 = (req, res) => {
  res.render("creacion_carta");
};

