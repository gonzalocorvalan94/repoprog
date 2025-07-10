import { createInterface } from "readline";
import chalk from "chalk";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function mostrarMenu() {
  console.log(
    chalk.cyan(
      "\n¿Qué operación desea realizar?\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n"
    )
  );
}

function solicitarNumeros(callback) {
  rl.question(chalk.yellow("Ingresa el primer número: "), (num1) => {
    rl.question(chalk.yellow("Ingresa el segundo número: "), (num2) => {
      const n1 = parseFloat(num1);
      const n2 = parseFloat(num2);

      if (isNaN(n1) || isNaN(n2)) {
        console.log(chalk.red("Debes ingresar números válidos."));
        return solicitarNumeros(callback);
      }

      callback(n1, n2);
    });
  });
}

function realizarOperacion(op) {
  solicitarNumeros((n1, n2) => {
    if (op === 4 && n2 === 0) {
      console.log(chalk.bgRed("No se puede dividir por 0."));
      return realizarOperacion(op);
    }

    const resultados = [n1 + n2, n1 - n2, n1 * n2, n1 / n2];

    const simbolos = ["+", "-", "*", "/"];

    console.log(
      chalk.green(
        `El resultado es ${n1} ${simbolos[op - 1]} ${n2} = ${
          resultados[op - 1]
        }`
      )
    );

    rl.question(
      chalk.green("\n¿Deseas realizar otra operación? (1 = Sí, 2 = No): "),
      (respuesta) => {
        if (respuesta === "1") {
          calculadora();
        } else {
          console.log(chalk.bgGreen.bold("FIN"));
          rl.close();
        }
      }
    );
  });
}

function calculadora() {
  mostrarMenu();
  rl.question(chalk.white("Seleccione una opción (1-4): "), (eleccion) => {
    const op = parseInt(eleccion);
    if (op >= 1 && op <= 4) {
      realizarOperacion(op);
    } else {
      console.log(chalk.bgRed("Opción inválida. Intente de nuevo."));
      calculadora();
    }
  });
}

calculadora();
