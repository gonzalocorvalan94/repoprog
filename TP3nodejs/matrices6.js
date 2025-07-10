import inquirer from "inquirer";

async function preguntarTamFilas() {
  const tamaFila = await inquirer.prompt([
    {
      type: "input",
      name: "numIngresadoFilas",
      message: "Ingrese la cantidad de filas",
    },
  ]);

  let tamañoFila = parseInt(tamaFila.numIngresadoFilas);

  if (tamañoFila <= 0 || isNaN(tamañoFila)) {
    return await preguntarTamFilas(); 
  } else {
    await preguntarTamColumnas(tamañoFila); 
  }
}

async function preguntarTamColumnas(tamañoFila) {
  const tamaColumnas = await inquirer.prompt([
    {
      type: "input",
      name: "numIngresadoColumna",
      message: "Ingrese la cantidad de columnas",
    },
  ]);

  let tamañoColumna = parseInt(tamaColumnas.numIngresadoColumna);

  if (tamañoColumna <= 0 || isNaN(tamañoColumna)) {
    return await preguntarTamColumnas(); 
  } else {
    await ingresarMatriz(tamañoFila, tamañoColumna); 
  }
}

async function ingresarMatriz(tamañoFila, tamañoColumna) {
  let matriz = [];

  for (let i = 0; i < tamañoFila; i++) {
    matriz[i] = [];

    for (let j = 0; j < tamañoColumna; j++) {
      let valorValido = false;

      while (!valorValido) {
        const val = await inquirer.prompt([
          {
            type: "input",
            name: "numIngresado",
            message: `Ingrese el valor para la posición [${i + 1}][${j + 1}]`,
          },
        ]);

        let valor = parseFloat(val.numIngresado);

        if (isNaN(valor)) {
          console.log(
            "❌ El valor ingresado no es válido. Intente nuevamente."
          );
        } else {
          matriz[i][j] = valor;
          valorValido = true;
        }
      }
    }
  }

  console.log("\n✅ Matriz ingresada:");
  for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join(" "));
  }
  transponerMatriz(matriz);
}

function transponerMatriz(matriz) {
  let tamañoFila = matriz.length;
  let tamañoColumna = matriz[0].length;

  let matrizTranspuesta = [];

  for (let i = 0; i < tamañoColumna; i++) {
    matrizTranspuesta[i] = [];
    for (let j = 0; j < tamañoFila; j++) {
      matrizTranspuesta[i][j] = matriz[j][i];
    }
  }

  console.log("\n😎 Matriz transpuesta 😎");
  for (let i = 0; i < matrizTranspuesta.length; i++) {
    console.log(matrizTranspuesta[i].join(" "));
  }
}
preguntarTamFilas();
