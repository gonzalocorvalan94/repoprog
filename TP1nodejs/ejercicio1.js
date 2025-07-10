import { createInterface } from "readline";
import chalk from "chalk";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function saludar() {
  rl.question(chalk.bgYellow("Dime tu nombre \n"), (nombre) => {
    console.log(chalk.yellow("Holaaaaa " + nombre));
    rl.close();
  });
}

saludar();
