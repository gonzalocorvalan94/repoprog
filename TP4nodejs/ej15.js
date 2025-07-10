import chalk from "chalk";
import fs from "fs";

function generarTabla(num) {
  console.log(`Tabla del ${num} \n`);
  let resultado = `Tabla del ${num}\n`;
  for (let i = 1; i <= 10; i++) {
    const linea = `${num} x ${i} = ${num * i}`;
    console.log(chalk.blue(linea)); // Mostrar en consola
    resultado += linea + "\n"; // Agregar al string para guardar
  }
  return resultado;
}

const tabla = generarTabla(6);

fs.writeFile("tabla.txt", tabla, (err) => {
  if (err) {
    ("La tabla no pudo ser generada");
  } else {
    console.log("Tabla generada con exito");
  }
});
