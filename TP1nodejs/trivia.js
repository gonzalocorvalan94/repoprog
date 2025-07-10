import { createInterface } from "readline";
import chalk from "chalk";
import preguntas from "./preguntas.js";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(chalk.bgCyan("Bienvenido a la Trivia") + "\n");

let puntaje = 0;
let indice = 0;
let correctas = 0;
let pregRandom = [];
let cantidadDePreguntas = 0;

function preguntarCantidad() {
  rl.question(
    chalk.bgCyan("¿Cuántas preguntas desea responder? (1-100) "),
    (cant) => {
      cantidadDePreguntas = parseInt(cant);

      if (
        isNaN(cantidadDePreguntas) ||
        cantidadDePreguntas <= 0 ||
        cantidadDePreguntas > 100
      ) {
        console.log(chalk.red("Cantidad inválida. Debe ser entre 1 y 100."));
        preguntarCantidad(); // volver a preguntar
      } else {
        while (pregRandom.length < cantidadDePreguntas) {
          let num = Math.floor(Math.random() * preguntas.length);
          if (!pregRandom.includes(num)) {
            pregRandom.push(num);
          }
        } //Genero las preguntas aleatorias despues de tener la cantidad

        hacerPregunta(); // llamo a la funcion ahora que ya se cuantas preguntas se quieren responder
      }
    }
  );
}

function hacerPregunta() {
  if (indice >= cantidadDePreguntas) {
    console.log(
      chalk.bgGreen(
        `\nTrivia finalizada. Respondiste correctamente ${correctas} preguntas. Puntaje total: ${puntaje} puntos`
      )
    );
    return rl.close();
  }

  const preguntaActual = preguntas[pregRandom[indice]];
  console.log(
    chalk.bgYellowBright(`\nPregunta ${indice + 1}: ${preguntaActual.pregunta}`)
  );
  console.log(chalk.blue(preguntaActual.opciones.join("\n")));

  rl.question(chalk.yellow("Tu respuesta (1-4): "), (respuesta) => {
    const rta = parseInt(respuesta);

    if (isNaN(rta) || rta < 1 || rta > 4) {
      console.log(chalk.red("Opción inválida. Intenta nuevamente."));
      return hacerPregunta(); // Vuelve a hacer la misma pregunta
    }

    if (rta === preguntaActual.correcta) {
      puntaje = puntaje + 10;
      correctas = correctas + 1;
      console.log(chalk.green("¡Respuesta correcta!"));
    } else {
      console.log(
        chalk.red(
          "Respuesta incorrecta. La respuesta correcta era la " +
            preguntaActual.correcta
        )
      );
    }

    indice++;
    hacerPregunta();
  });
}

preguntarCantidad();
