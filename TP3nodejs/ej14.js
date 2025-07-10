import inquirer from "inquirer";

async function preguntarCantidad() {
  const tama = await inquirer.prompt([
    {
      type: "input",
      name: "numIngresado",
      message: "Ingrese el tamaño del arreglo aleatorio",
    },
  ]);

  const tam = parseInt(tama.numIngresado);
  let arregloAleatorio = [];

  if (tam <= 0 || isNaN(tam)) {
    console.log("Tamaño inválido");
    return await preguntarCantidad();
  } else {
    for (let i = 0; i < tam; i++) {
      arregloAleatorio.push(Math.floor(Math.random() * 10));
    }
    console.log(`Arreglo generado: ${arregloAleatorio.join(" - ")}`);
    mayorMenor(arregloAleatorio);
  }
}

function mayorMenor(arregloAleatorio) {
  const longitud = arregloAleatorio.length;
  let i = 0;
  let max = arregloAleatorio[0];
  let min = arregloAleatorio[0];
  while (i < longitud) {
    if (arregloAleatorio[i] > max) {
      max = arregloAleatorio[i];
    }
    if (arregloAleatorio[i] < min) {
      min = arregloAleatorio[i];
    }
    i++;
  }
  let indicesMax = [];
  let indicesMin = [];
  arregloAleatorio.forEach((valor, i) => {
    if (valor === max) {
      indicesMax.push(i);
    }
  });

  i = 0;

  arregloAleatorio.forEach((valor, i) => {
    if (valor === min) {
      indicesMin.push(i);
    }
  });

  console.log(
    `El valor mas grande del arreglo es ${max} en las posiciones ${indicesMax.join(
      " - "
    )}`
  );
  console.log(
    `El valor mas chico del arreglo es ${min} en las posiciones ${indicesMin.join(
      " - "
    )}`
  );
}

preguntarCantidad();
