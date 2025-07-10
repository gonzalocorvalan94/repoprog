// voy a contar cuantas veces aparece el numero 7

let arreglo = [1, 2, 3, 4, 5, 7, 8, 7, 5, 4, 8, 7, 9, 6, 3, 1, 7, 7];
let contador = 0;
function cuenta7() {
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] === 7) {
      contador = contador + 1;
    }
  }
  console.log(`Hay ${contador} sietes`);
}

cuenta7();
