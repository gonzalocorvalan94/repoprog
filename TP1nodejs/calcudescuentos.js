import { createInterface } from "readline";
import chalk from "chalk";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function descuentoAumento() {
  rl.question(
    chalk.blue(
      `Usted desea calcular

  1. Aumento
  2. Descuento
  
  `
    ),
    (election) => {
      const eleccion = Number(election);

      if (eleccion > 2 || eleccion < 1 || isNaN(eleccion)) {
        console.log(chalk.red("Elección inválida"));
        return descuentoAumento();
      } else if (eleccion === 1) {
        precioPorcentajeAumento();
      } else {
        precioPorcentajeDescuento();
      }
    }
  );
}

function precioPorcentajeAumento() {
  rl.question(chalk.green("Ingrese el valor de su producto \n"), (callback) => {
    const precioOriginal = Number(callback);

    if (precioOriginal < 0 || isNaN(precioOriginal)) {
      console.log(chalk.red("El valor ingresado es inválido"));
      return precioPorcentajeAumento();
    }
    rl.question(
      chalk.green("Ahora ingresa el porcentaje de aumento \n"),
      (callback) => {
        const porcentaje = Number(callback);

        if (porcentaje < 0 || isNaN(porcentaje)) {
          console.log(chalk.blue("Ingresaste un porcentaje inválido"));
          return precioPorcentajeAumento();
        } else {
          calcularAumentos(precioOriginal, porcentaje);
        }
      }
    );
  });
}

function precioPorcentajeDescuento() {
  rl.question(chalk.green("Ingrese el valor de su producto \n"), (callback) => {
    const precioOriginal = parseFloat(callback);

    if (precioOriginal < 0 || isNaN(precioOriginal)) {
      console.log(chalk.red("El valor ingresado es inválido"));
      return precioPorcentajeDescuento();
    }
    rl.question(
      chalk.green("Ahora ingresa el porcentaje de descuento \n"),
      (callback) => {
        const porcentaje = parseFloat(callback);

        if (porcentaje < 0 || isNaN(porcentaje)) {
          console.log(chalk.blue("Ingresaste un porcentaje inválido"));
          return precioPorcentajeDescuento();
        } else if (porcentaje > 100) {
          console.log(
            chalk.blue(
              "Nada en la vida es gratis. Ingresaste un porcentaje inválido"
            )
          );
          return precioPorcentajeDescuento();
        } else {
          calcularDescuentos(precioOriginal, porcentaje);
        }
      }
    );
  });
}

function calcularAumentos(precioOriginal, porcentaje) {
  const aumento = (precioOriginal * porcentaje) / 100;
  const aumentoFormateado = aumento.toLocaleString("es-AR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const precioFinal = (precioOriginal + aumento).toLocaleString("es-AR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }); // esto es para tener la coma en lugar del punto cuando me da los centavos, y que me marque con un punto lo 1000
  console.log(
    chalk.greenBright(`
    El precio original del producto era de $${precioOriginal}.
    Vamos a aplicarle un ${porcentaje}% de aumento.
    El aumento es de $${aumentoFormateado}.
    El precio final a pagar es de $${precioFinal}.
    `)
  );
  volver();
}

function calcularDescuentos(precioOriginal, porcentaje) {
  const descuento = (precioOriginal * porcentaje) / 100;
  const descuentoFormateado = descuento.toLocaleString("es-AR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const precioFinal = (precioOriginal - descuento).toLocaleString("es-AR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }); // esto es para tener la coma en lugar del punto cuando me da los centavos, y que me marque con un punto lo 1000
  console.log(
    chalk.greenBright(`
    El precio original del producto era de $${precioOriginal}.
    Vamos a aplicarle un ${porcentaje}% de descuento
    El descuento fue de $${descuentoFormateado}.
    El precio final a pagar es de $${precioFinal}.
    `)
  );
  volver();
}

function volver() {
  rl.question(
    chalk.yellow("Desea calcular otro aumento o descuento? (s/n): "),
    (otra) => {
      const vuelve = otra.toLowerCase();
      if (vuelve === "s") {
        return descuentoAumento();
      } else {
        rl.close();
      }
    }
  );
}

descuentoAumento();
