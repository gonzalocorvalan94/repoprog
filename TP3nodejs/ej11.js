import inquirer from "inquirer";

async function preguntarCantidad() {
  const tam = await inquirer.prompt([
    {
      type: "input",
      name: "numIngresado",
      message: "Ingrese la cantidad de valores del arreglo",
    },
  ]);

  const longitud = parseInt(tam.numIngresado);

  if (isNaN(longitud) || longitud <= 0) {
    console.log("Longitud inválida");
    await preguntarCantidad();
  } else {
    let arreglo = [];
    await IngresaValores(arreglo, longitud);
    invertirArreglo(arreglo);
  }
}

async function IngresaValores(arreglo, longitud) {
  const val = await inquirer.prompt([
    {
      type: "input",
      name: "valoresIngresados",
      message: `Ingrese el valor #${arreglo.length + 1}:`,
    },
  ]);

  arreglo.push(val.valoresIngresados);
  
  if (arreglo.length < longitud) {
    await IngresaValores(arreglo, longitud);
  }
}

function invertirArreglo(arreglo) {
  let i = 0;
  let arregloInvertido = [];
  while (i < arreglo.length) {
    arregloInvertido[i] = arreglo[arreglo.length - i - 1];
    i++;
  }

  console.log(arregloInvertido.join(" - "));
}

preguntarCantidad();
