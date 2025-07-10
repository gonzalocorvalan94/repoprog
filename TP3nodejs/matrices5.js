import inquirer from "inquirer";

async function preguntarTam() {
  const tama = await inquirer.prompt([
    {
      type: "input",
      name: "numIngresado",
      message: "Ingrese el tamaño de la matriz",
    },
  ]);

  let tamaño = parseInt(tama.numIngresado);

  if (tamaño < 0 || isNaN(tamaño)) {
    return await preguntarTam(); // llamar la función recursivamente
  } else {
    let matriz = [];

    for (let i = 0; i < tamaño; i++) {
      matriz[i] = []; // inicializar fila
      for (let j = 0; j < tamaño; j++) {
        if (i === j) {
          matriz[i][j] = 1;
        } else {
          matriz[i][j] = 0;
        }
      }
    }

    console.log(matriz);
    return matriz; // si quieres devolver la matriz
  }
}

preguntarTam();
