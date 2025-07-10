import { createInterface } from "readline";
import chalk from "chalk";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function sumar() {
  rl.question("Ingrese el primer número: ", (num1) => {
    rl.question("Ingrese el segundo número: ", (num2) => {
      const n1 = parseFloat(num1);
      const n2 = parseFloat(num2);

      if (isNaN(n1) || isNaN(n2)) {
        console.log(chalk.red("No puedo sumar letras o valores no numéricos"));
      } else {
        const suma = n1 + n2;
        console.log(chalk.green(`El resultado de la suma es ${suma}`));
      }

      rl.close();
    });
  });
}

sumar();
