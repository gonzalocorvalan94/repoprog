import { createInterface } from "readline";
import chalk from "chalk";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculadora() {
  rl.question(
    chalk.blue(`¿Qué operación desea realizar?

      1. Suma
      2. Resta
      3. Multiplicación
      4. División
    
    Elige una opción: `),
    (eleccion) => {
      let operacion = parseInt(eleccion);
      if (isNaN(operacion) || operacion < 1 || operacion > 4) {
        console.log(
          chalk.bgRed.bold(
            "Has elegido una opción inválida. Intenta nuevamente" + "\n"
          )
        );
        return calculadora();
      } else {
        switch (operacion) {
          case 1:
            console.log("Has elegido hacer una suma.\n");
            break;

          case 2:
            console.log("Has elegido hacer una resta.\n");
            break;

          case 3:
            console.log("Has elegido hacer una multiplicación.\n");
            break;
          default:
            console.log("Has elegido hacer una división.\n");
            break;
        }
      }
      rl.question(chalk.yellow("Ingresa el primer número:" + " "), (num1) => {
        const n1 = parseFloat(num1);
        rl.question(
          chalk.yellow("Ingresa el segundo número:") + " ",
          (num2) => {
            const n2 = parseFloat(num2);
            if (isNaN(n1) || isNaN(n2)) {
              console.log(
                chalk.red("Debes ingresar números. Intenta nuevamente")
              );
              return calculadora();
            }
            const sum = n1 + n2;
            const res = n1 - n2;
            const prod = n1 * n2;
            const cociente = n1 / n2;
            if (operacion === 4 && n2 === 0) {
              console.log(chalk.bgRed("No se puede dividir por 0."));
              return calculadora();
            } else {
              switch (operacion) {
                case 1:
                  console.log(
                    chalk.green(`El resultado es ${n1}+${n2} = ${sum}`)
                  );
                  break;

                case 2:
                  console.log(
                    chalk.green(`El resultado es ${n1}-${n2} = ${res}`)
                  );
                  break;

                case 3:
                  console.log(
                    chalk.green(`El resultado es ${n1}*${n2} = ${prod}`)
                  );
                  break;

                default:
                  console.log(
                    chalk.green(`El resultado es ${n1}/${n2} = ${cociente}`)
                  );
                  break;
              }
            }
            rl.question(
              chalk.green(
                "Si deseas realizar otra operacion presiona 1. De lo contrario presiona cualquier otro valor"
              ) + "\n",
              (volver) => {
                const vol = parseInt(volver);

                if (vol === 1) {
                  return calculadora();
                } else {
                  console.log(chalk.bgGreen.bold("FIN"));
                  rl.close();
                }
              }
            );
          }
        );
      });
    }
  );
}

calculadora();
