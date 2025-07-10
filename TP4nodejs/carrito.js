import inquirer from "inquirer";
import chalk from "chalk";
import productos from "./productos.js";
import fs from "fs";

let carrito = [];

async function main() {
  while (true) {
    await menu();
  }
}

async function menu() {
  console.log(
    chalk.blue(`
    1.- Mostrar productos
    2.- Agregar productos
    3.- Eliminar productos
    4.- Ver el monto gastado
    5.- Finalizar compra
    6.- Salir
  `)
  );

  const { selectedOption } = await inquirer.prompt([
    {
      type: "input",
      name: "selectedOption",
      message: "¿Qué quiere hacer? (1-6)",
    },
  ]);

  const eleccion = Number(selectedOption);
  if (isNaN(eleccion) || eleccion < 1 || eleccion > 6) {
    console.log(chalk.red("❌ Error: Ingresa un número del 1 al 6"));
    return;
  }

  switch (eleccion) {
    case 1:
      await mostrarProductos();
      break;
    case 2:
      await agregarProductos();
      break;
    case 3:
      await eliminarProductos();
      break;
    case 4:
      await verMontoGastado();
      break;
    case 5:
      await finalizarCompra();
      break;
    case 6:
      console.log(chalk.green("¡Hasta luego!"));
      process.exit(0);
  }
}

async function mostrarProductos() {
  console.log(chalk.blue("Productos disponibles"));
  console.table(productos);
}

async function agregarProductos() {
  console.table(productos);

  const { selectedOption } = await inquirer.prompt([
    {
      type: "input",
      name: "selectedOption",
      message: "Ingrese el ID del producto a agregar:",
    },
  ]);

  const seleccionID = Number(selectedOption);

  // Buscar por ID, no por índice
  const producto = productos.find((p) => p.id === seleccionID); //si no encuntra nada, devuelve undefined

  if (!producto) {
    console.log(chalk.red("❌ ID inválido. Productos disponibles:"));
    console.table(productos);
    return;
  }

  if (producto.stock <= 0) {
    console.log(
      chalk.red(`❌ No hay stock disponible para ${producto.nombre}`)
    );
    return;
  }

  carrito.push(producto);
  producto.stock--;
  console.log(chalk.green(`✅ ${producto.nombre} agregado al carrito!`));
  console.log(chalk.yellow("🛒 Carrito actual:"));
  console.table(carrito);

  const { confirm } = await inquirer.prompt([
    {
      type: "confirm",
      name: "confirm",
      message: "¿Agregar otro producto?",
    },
  ]);

  if (confirm) await agregarProductos();
}

async function eliminarProductos() {
  if (carrito.length === 0) {
    console.log(chalk.yellow("🛒 El carrito está vacío"));
    return;
  }

  console.log(chalk.yellow("🛒 Carrito actual:"));
  carrito.forEach((producto, index) => {
    console.log(
      chalk.blue(`${index}: ${producto.nombre} - $${producto.precio}`)
    );
  });

  const { eliminar } = await inquirer.prompt([
    {
      type: "input",
      name: "eliminar",
      message: "Ingresa el número del producto a eliminar:",
    },
  ]);

  const eliminarID = Number(eliminar);

  if (eliminarID < 0 || isNaN(eliminarID) || eliminarID >= carrito.length) {
    console.log(chalk.red("❌ Número inválido"));
    return;
  }

  // Actualiza el stock y elimina del carrito
  const productoEliminado = carrito.splice(eliminarID, 1)[0];
  const productoEnStock = productos.find((p) => p.id === productoEliminado.id);
  if (productoEnStock) productoEnStock.stock++;

  console.log(
    chalk.green(`✅ ${productoEliminado.nombre} eliminado del carrito`)
  );
  console.table(carrito); // Muestra el carrito actualizado
}

async function verMontoGastado() {
  if (carrito.length === 0) {
    console.log(chalk.yellow("🛒 El carrito está vacío"));
    return;
  }
  const total = carrito.reduce((sum, p) => sum + p.precio, 0);
  console.log(chalk.green(`💰 Total gastado: $${total}`));
}

async function finalizarCompra() {
  if (carrito.length === 0) {
    console.log(chalk.yellow("🛒 No se puede finalizar una compra vacía."));
    return;
  }

  const total = carrito.reduce((sum, p) => sum + p.precio, 0);

  let ticket = "🧾 Ticket de compra\n\n";
  carrito.forEach((producto, index) => {
    ticket += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
  });
  ticket += `\n💰 Total: $${total}\n`;

  fs.writeFile("Ticket.txt", ticket, (err) => {
    if (err) {
      console.log(chalk.red("❌ Error al generar el ticket"));
    } else {
      console.log(chalk.green("✅ Ticket generado con éxito: Ticket.txt"));
    }
    process.exit(0); // Salir después de guardar el ticket
  });
}
main();
