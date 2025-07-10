import { createInterface } from "readline";
import chalk from "chalk";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solicitarNumeros(callback) {
  rl.question(chalk.blue("Ingrese el primer número:") + " ", (num1) => {
    const n1 = parseFloat(num1);

    rl.question(chalk.blue("Ingrese el segundo número:") + " ", (num2) => {
      const n2 = parseFloat(num2);

      rl.question(chalk.blue("Ingrese el tercer número:") + " ", (num3) => {
        const n3 = parseFloat(num3);

        rl.question(chalk.blue("Ingrese el cuarto número:") + " ", (num4) => {
          const n4 = parseFloat(num4);

          if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)) {
            console.log(
              chalk.red("Debes ingresar números para que pueda operar")
            );
            return solicitarNumeros(callback); // vuelve a llamar si hay error
          }

          callback(n1, n2, n3, n4); // aquí pasás los valores válidos a otra función
        });
      });
    });
  });
}

function realizarOperaciones(n1, n2, n3, n4) {
  const sum = n1 + n2;
  const prod = n1 * n2;

  if (sum > 30 && prod > 400) {
    console.log(chalk.green(`El resultado de la suma es ${sum} y el de la multiplicación es ${prod}`))
  } else if (sum <= 30) {
    console.log(chalk.red("La suma es menor o igual que 30"));
  } else if (prod <= 400) {
    console.log(chalk.red("La multiplicación es menor o igual que 400"));
  }

  rl.close();
}

solicitarNumeros(realizarOperaciones);
