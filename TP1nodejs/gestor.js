import { createInterface } from "readline";
import fs from 'fs';
import chalk from "chalk";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const gastos = [];

function menu() {
  rl.question(
    chalk.blue(
      `Gestor de Gastos

      1. Agregar Gasto.
      2. Ver lista de Gastos
      3. Ver total gastado
      4. Eliminar un gasto
      5. Salir
      `
    ),
    (eleccion) => {
      const opcion = parseInt(eleccion);

      if (isNaN(opcion) || opcion < 1 || opcion > 5) {
        console.log(chalk.red("Has elegido una opción inválida"));
        return menu();
      } else {
        switch (opcion) {
          case 1:
            agregarGasto();
            break;

          case 2:
            listarGastos();
            break;

          case 3:
            totalGastos();
            break;

          case 4:
            eliminarGasto();
            break;

          case 5:
            exit();
            break;
        }
      }
    }
  );
}

function agregarGasto() {
  rl.question(chalk.blue("Ingrese en qué gastó: "), (descripcion) => {
    rl.question(chalk.blue("Ingrese el monto: "), (plata) => {
      const monto = parseFloat(plata);

      if (isNaN(monto) || monto < 0) {
        console.log(chalk.red("Has ingresado un monto inválido: "));
        return agregarGasto();
      }
      gastos.push({ descripcion, monto }); // aca estoy creando objetos dentro de el arreglo. Es decir estoy creando un objeto con que contiene a descripcion y a monto como elementos.

      console.log(chalk.green("Gasto guardado correctamente"));
      return menu();
    });
  });
}

function listarGastos() {
  if (gastos.length === 0) {
    console.log(chalk.red("No hay gastos"));
  } else {
    console.log(chalk.yellow("\nLista de gastos\n"));
    gastos.forEach((gastos, index) => {
      console.log(
        `${index + 1}. $${gastos.monto.toFixed(2)} en ${gastos.descripcion}\n`
      );
    });
  }
  return menu();
}

function totalGastos() {
  let i = 0;
  let total = 0;
  while (i < gastos.length) {
    total = total + gastos[i].monto;
    i++;
  }

  console.log(chalk.red(`Usted ha gastado $${total}`));

  return menu();
}

function eliminarGasto() {
  if (gastos.length === 0) {
    console.log(chalk.red("No hay gastos para eliminar."));
    return menu();
  }

  console.log(chalk.yellow("\nGastos actuales:"));
  gastos.forEach((gasto, index) => {
    console.log(
      `${index + 1}. $${gasto.monto.toFixed(2)} en ${gasto.descripcion}`
    );
  });

  rl.question(
    chalk.blue("\nIngrese el número del gasto que desea eliminar: "),
    (input) => {
      const indice = parseInt(input);

      if (isNaN(indice) || indice < 1 || indice > gastos.length) {
        console.log(chalk.red("Número inválido."));
        return eliminarGasto();
      }

      const eliminado = gastos.splice(indice - 1, 1)[0];
      console.log(
        chalk.green(
          `Gasto eliminado: $${eliminado.monto.toFixed(2)} en ${
            eliminado.descripcion
          }`
        )
      );
      return menu();
    }
  );
}

function exit() {
  console.log(chalk.blue("Chau chau!"));
  rl.close();
}
menu();
