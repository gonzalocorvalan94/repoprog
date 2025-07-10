import inquirer from "inquirer";

let palabrasarray = [];
let contador = 0;

async function main() {
  const palabras = await inquirer.prompt([
    {
      type: "input",
      name: "palabrasIngresadas",
      message: "Ingrese una palabra",
    },
  ]);

  if (palabras.palabrasIngresadas !== "fin".toLowerCase()) {
    palabrasarray.push(palabras.palabrasIngresadas);
    contador = contador + 1;
    main();
  } else {
    console.log(`Has ingresado ${contador} palabras. Estas son:
      `);
    console.log(palabrasarray.join(" - "));
    process.exit();
  }
}
main();
