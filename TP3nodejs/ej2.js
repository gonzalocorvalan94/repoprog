import inquirer from "inquirer";
let cadenas = [];
async function main() {
  const palabras = await inquirer.prompt([
    {
      type: "input",
      name: "respuestas",
      message: "Ingrese cadenas de texto",
    },
  ]);
  if (palabras.respuestas === "cancelar") {
    console.log(cadenas.join(" - "));
    process.exit();
  } else {
    cadenas.push(palabras.respuestas);
    main();
  }
}
main();
