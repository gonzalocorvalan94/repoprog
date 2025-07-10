import inquirer from "inquirer";
let pal = [];
async function main() {
  const palabras = await inquirer.prompt([
    {
      type: "input",
      name: "palabraIngresada",
      message: "Ingrese una palabra",
    },
  ]);

  if (pal.length < 10) {
    pal.push(palabras.palabraIngresada);
    main();
  } else {
    console.log(pal.join(" - "));
  }
}
main();
