let arreglo = [1, 2, 3, 4, 5, 7, 8, 9, 10];
let contador = 0;
function pares() {
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
      contador = contador + 1;
    }
  }
  console.log(`La cantidad de numeros pares es ${contador}`);
}

pares();
