import inquirer from "inquirer";

async function preguntarPalabra() {
  const pal = await inquirer.prompt([
    {
      type: "input",
      name: "palIngresada",
      message: "Ingrese una palabra",
    },
  ]);

  const palabra = pal.palIngresada;

  invertirpalabra(palabra);
}

function invertirpalabra(palabra) {
  let array = palabra.split("");
  let arrayinvertido = [];
  let i = 0;
  while (i < palabra.length) {
    arrayinvertido[i] = array[array.length - i - 1];

    i++;
  }
  i = 0;

  let paliendro = true;
  while (i < palabra.length) {
    if (array[i] === arrayinvertido[i]) {
      paliendro = true;
    } else {
      paliendro = false;
      break;
    }
    i++;
  }
  if (paliendro) {
    console.log("Es un paliendro");
  } else {
    console.log("No es un paliendro");
  }
}

preguntarPalabra();
