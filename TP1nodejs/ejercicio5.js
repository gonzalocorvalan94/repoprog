import { createInterface } from "readline";
import chalk from "chalk";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function edad() {
  rl.question(chalk.bgCyan("Ingrese su edad\n"), (edad) => {
    const age = parseInt(edad);
    if (age < 0) {
      console.log(chalk.red("Has ingresado una edad negativa"));
    } else if (isNaN(age)) {
      console.log(chalk.red("Debes ingresar la edad en números"));
    } else {
      if (age >= 18) {
        console.log(chalk.green(`Tu edad es ${age}. Eres mayor de 18`));
      } else {
        console.log(chalk.green(`Tu edad es ${age}. Eres menor de 18`));
      }
    }
    rl.close();
  });
}

edad();
