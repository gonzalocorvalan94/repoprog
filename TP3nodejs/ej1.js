import inquirer from "inquirer";

async function main() {
  const respuesta = await inquirer.prompt([
    {
      type: "input",
      name: "numero",
      message: "Ingresa un número entero:",
    },
  ]);

  // Convertir a número
  const numero = parseInt(respuesta.numero);

  // Validar si es un número
  if (isNaN(numero)) {
    console.log("❌ No ingresaste un número válido.");
    return main(); // volver a preguntar
  }

  // Si es distinto de 0, mostrarlo
  if (numero !== 0) {
    console.log(`✅ Ingresaste: ${numero}`);
    return main(); // volver a preguntar
  }

  // Si es 0, salir del programa
  console.log("👋 Programa finalizado.");
  process.exit(); // finalizar ejecución
}

main();
