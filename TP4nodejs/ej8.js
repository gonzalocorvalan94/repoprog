let arreglo = [1, 4, 7, 67, 5, 34, 4, 65, 35, 23];
let num = arreglo[0];
let mayores = [];

function MostrarMayores() {
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 5) {
      mayores.push(arreglo[i]);
    }
  }
  console.log(mayores.join(" - "));
}
MostrarMayores();
