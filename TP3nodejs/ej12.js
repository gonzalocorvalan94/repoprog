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
    await consultarValores(arregloAleatorio);
  }
}

async function consultarValores(arregloAleatorio) {
  const consulta = await inquirer.prompt([
    {
      type: "input",
      name: "preguntaNum",
      message: "¿Qué valor desea consultar? (0-9)",
    },
  ]);

  const num = parseInt(consulta.preguntaNum);
  const indices = [];

  arregloAleatorio.forEach((valor, i) => {
    if (valor === num) {
      indices.push(i);
    }
  });

  if (indices.length > 0) {
    console.log("✅ El valor consultado está en el arreglo.");
    console.log(arregloAleatorio);
    console.log(`📌 Posiciones: ${indices.join(", ")}`);
  } else {
    console.log("❌ El valor consultado no está en el arreglo.");
  }

  const repetir = await inquirer.prompt([
    {
      type: "confirm",
      name: "otraConsulta",
      message: "¿Desea consultar otro valor?",
      default: false,
    },
  ]);

  if (repetir.otraConsulta) {
    await consultarValores(arregloAleatorio);
  } else {
    const reiniciar = await inquirer.prompt([
      {
        type: "confirm",
        name: "reiniciarPrograma",
        message: "¿Desea generar un nuevo arreglo?",
        default: false,
      },
    ]);

    if (reiniciar.reiniciarPrograma) {
      await preguntarCantidad();
    } else {
      console.log("Fin.");
    }
  }
}

preguntarCantidad();
