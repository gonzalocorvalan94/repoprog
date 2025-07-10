import inquirer from "inquirer";

let arrayOne = [];
let arrayTwo = [];

async function preguntarPalabraArrayOne() {
  const pal = await inquirer.prompt([
    {
      type: "input",
      name: "palIngresadaArrayOne",
      message: "Ingrese una palabra para el primer array",
    },
  ]);

  const palabra = pal.palIngresadaArrayOne;

  arrayOne.push(palabra);

  const repetir = await inquirer.prompt([
    {
      type: "confirm",
      name: "otraConsulta",
      message: "¿Desea agregar otro valor?",
      default: false,
    },
  ]);

  if (repetir.otraConsulta) {
    await preguntarPalabraArrayOne();
  } else {
    await preguntarPalabraArrayTwo();
  }
}

async function preguntarPalabraArrayTwo() {
  const palTwo = await inquirer.prompt([
    {
      type: "input",
      name: "palIngresadaArrayTwo",
      message: "Ingrese una palabra para el segundo array",
    },
  ]);

  const palabraDos = palTwo.palIngresadaArrayTwo;
  arrayTwo.push(palabraDos);

  const repetirTwo = await inquirer.prompt([
    {
      type: "confirm",
      name: "otraConsulta",
      message: "¿Desea agregar otro valor?",
      default: false,
    },
  ]);

  if (repetirTwo.otraConsulta) {
    await preguntarPalabraArrayTwo();
  } else {
    compararArreglos(arrayOne, arrayTwo);
  }
}

function compararArreglos(arrayOne, arrayTwo) {
  let incluido = true;

  // Verificar que todos los valores de arrayOne estén en arrayTwo
  for (let i = 0; i < arrayOne.length; i++) {
    let encontrado = false;
    for (let j = 0; j < arrayTwo.length; j++) {
      if (arrayOne[i] === arrayTwo[j]) {
        encontrado = true;
        break;
      }
    }
    if (!encontrado) {
      incluido = false;
      console.log("No contienen los mismos valores");
      return;
    }
  }

  // Verificar que todos los valores de arrayTwo estén en arrayOne
  for (let i = 0; i < arrayTwo.length; i++) {
    let encontrado = false;
    for (let j = 0; j < arrayOne.length; j++) {
      if (arrayTwo[i] === arrayOne[j]) {
        encontrado = true;
        break;
      }
    }
    if (!encontrado) {
      incluido = false;
      console.log("No contienen los mismos valores");
      return;
    }
  }

  // Si pasó ambas verificaciones
  console.log("Tienen los mismos valores pero en ubicaciones diferentes");
  console.log(arrayOne.join(" - "));
  console.log(arrayTwo.join(" - "));
}

preguntarPalabraArrayOne();
