import inquirer from "inquirer";

let contador = 0;
const passwd = Math.floor(1000 + Math.random() * 9000); // La contraseña va a estar entre 1000 y 9999, es para asegurarme las 4 cifras

console.log("(solo para pruebas) Contraseña generada:", passwd);

async function contraseña() {
  while (contador < 3) {
    const respuesta = await inquirer.prompt([
      {
        type: "input",
        name: "rta",
        message: "Ingrese la contraseña:",
      },
    ]);

    const rta = Number(respuesta.rta);

    if (isNaN(rta) || rta < 0) {
      console.log("⚠️ Ingrese una contraseña válida.");
      continue;
    }

    if (rta === passwd) {
      console.log("✅ Contraseña correcta");
      return;
    } else {
      contador++;
      if (contador < 3) {
        console.log(
          ` Contraseña incorrecta🤦‍♂️. Intento ${contador}/3. Intente nuevamente.`
        );
      } else {
        console.log("🥲 Has agotado todos los intentos 🥲");
      }
    }
  }
}

await contraseña();
