import inquirer from "inquirer";

async function main() {
  const numeros = await inquirer.prompt([
    {
      type: "input",
      name: "numIngresado",
      message: "Ingrese un número",
    },
  ]);

  let num = parseInt(numeros.numIngresado);

  if (isNaN(num)) {
    console.log("No ingresaste un número válido.");
    return main();
  }

  const intervalo = setInterval(() => {
    // setInterval(()=>{},tiempo en milisegundos)
    if (num <= 0) {
      clearInterval(intervalo); // finaliza el intervalo
      console.log("Fin.");
    } else {
      console.log(num);
      num--;
    }
  }, 1000); // Son 1000 milisegundos. Es decir, 1 segundo
}

main();
