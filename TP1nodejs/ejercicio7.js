import { createInterface } from "readline";
import chalk from "chalk";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function comparar() {
  rl.question(chalk.bgCyan("Ingrese el primer número\n"), (num1) => {
    rl.question(chalk.bgCyan("Ingrese el segundo número\n"), (num2) => {
      rl.question(chalk.bgCyan("Ingrese el tercer número\n"), (num3) => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        const n3 = parseFloat(num3);

        if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
          console.log(
            chalk.red("Debes ingresar números. Sino no puedo comparar.")
          );
          return comparar();
        } else if (n1 === n2 || n1 === n3 || n2 === n3) {
          console.log(
            chalk.red("Necesito que ingreses valores que sean diferentes.")
          );
          return comparar();
        } else {
          let mayor = n1;
          if (n2 > mayor) mayor = n2;
          if (n3 > mayor) mayor = n3;

          let menor = n1;
          if (n2 < menor) menor = n2;
          if (n3 < menor) menor = n3;

          let medio = n1 + n2 + n3 - mayor - menor;

          console.log(chalk.green(`El mayor es: ${mayor}`));
          console.log(chalk.red(`El menor es: ${menor}`));
          console.log(chalk.yellow(`El del medio es: ${medio}`));
          rl.close();
        }
      });
    });
  });
}

comparar();
