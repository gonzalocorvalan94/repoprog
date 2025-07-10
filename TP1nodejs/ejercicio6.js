import { createInterface } from "readline";
import chalk from "chalk";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function comparar() {
  rl.question(chalk.bgCyan("Ingrese el primer número\n"), (num1) => {
    rl.question(chalk.bgCyan("Ingrese el segundo número\n"), (num2) => {
      const n1 = parseFloat(num1);
      const n2 = parseFloat(num2);

      if (isNaN(n1) || isNaN(n2)) {
        console.log(
          chalk.red("Debes ingresar números. Sino no puedo comparar")
        );
      } else if (n1 > n2) {
        console.log(chalk.green(`${n1} es mayor que ${n2}`));
      } else if (n1 < n2) {
        console.log(chalk.green(`${n2} es mayor que ${n1}`));
      } else {
        console.log(chalk.yellow("Los valores ingresados son iguales"));
      }

      rl.close();
    });
  });
}

comparar();
