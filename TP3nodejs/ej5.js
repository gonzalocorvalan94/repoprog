import inquirer from "inquirer";

async function main() {
  const numeros = await inquirer.prompt([
    {
      type: "input",
      name: "numIngresado",
      message: "Ingrese un número",
    },
  ]);
  const num = parseInt(numeros.numIngresado);

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

main();
