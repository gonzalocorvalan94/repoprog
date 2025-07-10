import { createInterface } from "readline";
import fs from "fs";
import chalk from "chalk";
import productos from "./productos.js";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});
let i = 0;
let carrito = [];
console.log(chalk.bgCyan("Bienvenido al Carrito de Compras"));
function menu() {
  rl.question(
    `
  1. Ver productos
  2. Agregar al carrito
  3. Ver carrito
  4. Eliminar del carrito
  5. Finalizar compra
  6. Salir
    `,
    (elec) => {
      const eleccion = parseInt(elec);

      if (eleccion < 0 || eleccion > 6 || isNaN(eleccion)) {
        console.log(
          chalk.red("Opción invlaida. Debes ingresar valores de 1 al 6")
        );
        menu();
      } else {
        switch (eleccion) {
          case 1: {
            verProductos();
            break;
          }
          case 2: {
            console.log("Agregar al carrito");
            break;
          }
          case 3: {
            console.log("Ver carrito");
            break;
          }
          case 4: {
            console.log("Eliminar del carrito");
            break;
          }
          case 5: {
            console.log("Finalizar Compra");
            break;
          }
          case 6: {
            console.log("Salir");
            rl.close();
            break;
          }
        }
      }
    }
  );
}

function verProductos() {
  while (i < productos.length) {
    console.log(
      `${productos[i].id}. ${productos[i].nombre} - Precio: $${productos[i].precio} - Stock: ${productos[i].stock}`
    );
    i++;
  }
}

function agregarAlCarrito() {
  rl.question(
    "Indique el numero de ID del producto que desea agregar al carrito",
    (elec1) => {
      const eleccion2 = parseInt(elec1);
      if (eleccion2 <= 0 || eleccion2 > productos.length || isNaN(eleccion2)) {
        console.log(chalk.red("ID inválido"));
        agregarAlCarrito();
      }else {
        carrito.push(productos[eleccion2]);
        menu();
      }
    }
  );
}

menu();
