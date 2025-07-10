import inquirer from "inquirer";

async function preguntarCantidad() {
  const cantNotas = await inquirer.prompt([
    {
      type: "input",
      name: "cantidad",
      message: "Ingrese la cantidad de notas que tiene:",
    },
  ]);

  const cantidadDeNotas = parseInt(cantNotas.cantidad);

  if (cantidadDeNotas <= 0 || isNaN(cantidadDeNotas)) {
    console.log("Cantidad inválida");
    process.exit();
  } else {
    const notas = [];
    await preguntarNotas(cantidadDeNotas, notas);
    calcularPromedio(notas);
  }
}

async function preguntarNotas(cantidad, notas) {
  const nota = await inquirer.prompt([
    {
      type: "input",
      name: "notaIngresada",
      message: `Ingrese la nota #${notas.length + 1}:`,
    },
  ]);

  const notaNum = parseFloat(nota.notaIngresada);
  if (isNaN(notaNum) || notaNum < 0 || notaNum > 10) {
    console.log("Nota inválida. Debe estar entre 0 y 10.");
  } else {
    notas.push(notaNum);
  }

  if (notas.length < cantidad) {
    await preguntarNotas(cantidad, notas);
  }
}

function calcularPromedio(notas) {
  const suma = notas.reduce((acc, val) => acc + val, 0);
  const promedio = suma / notas.length;
  console.log(`\nNotas ingresadas: ${notas.join(", ")}`);
  console.log(`Promedio: ${promedio.toFixed(2)}`);
  process.exit();
}

preguntarCantidad();
