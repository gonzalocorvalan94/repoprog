import { createInterface } from "readline";
import chalk from "chalk";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function saludar() {
  rl.question(chalk.bgMagentaBright("Dime tu nombre\n"), (nombre) => {
    rl.question(chalk.bgCyan("Dime tu edad\n"), (edad) => {
      if (parseInt(edad)) {
        console.log(chalk.green(`Hola ${nombre}. Tu edad es ${edad} años`));
      } else {
        console.log(chalk.red("Has ingresado una edad inválida ❌"));
      }
      rl.close();
    });
  });
}

saludar();
