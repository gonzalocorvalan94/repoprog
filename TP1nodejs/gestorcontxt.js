import { createInterface } from "readline";
import chalk from "chalk";
import fs from "fs";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const archivoGastos = "gastos.txt";
let gastos = cargarGastos();

function cargarGastos() {
  if (fs.existsSync(archivoGastos)) {
    const data = fs.readFileSync(archivoGastos, "utf-8");
    return data.split("\n").map((linea) => {
      const [monto, descripcion] = linea.split(";");
      return { monto: parseFloat(monto), descripcion };
    });
  }
  return [];
}

function guardarGastos() {
  const datos = gastos
    .map((gasto) => `$${gasto.monto} en ${gasto.descripcion}`)
    .join("\n");
  fs.writeFileSync(archivoGastos, datos);
}

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
            console.log("Hasta luego");
            rl.close();
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
        console.log(chalk.red("Has ingresado un monto inválido"));
        return agregarGasto();
      }

      gastos.push({ descripcion, monto });
      guardarGastos(); // Guardar después de agregar
      console.log(chalk.green("Gasto guardado correctamente"));
      return menu();
    });
  });
}

function listarGastos() {
  if (gastos.length === 0) {
    console.log(chalk.red("No hay gastos"));
  } else {
    console.log(chalk.yellow("\nLista de gastos:\n"));
    gastos.forEach((gasto, index) => {
      console.log(
        `${index + 1}. $${gasto.monto.toFixed(2)} en ${gasto.descripcion}`
      );
    });
  }
  return menu();
}

function totalGastos() {
  const total = gastos.reduce((acc, gasto) => acc + gasto.monto, 0);
  console.log(chalk.red(`Usted ha gastado un total de $${total.toFixed(2)}`));
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
      guardarGastos(); // Guardar después de eliminar
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

menu();
