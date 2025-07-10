let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function promedio() {
  let sum = 0;
  for (let i = 0; i < arreglo.length; i++) {
    sum = sum + arreglo[i];
  }
  let prom = sum / arreglo.length;
  console.log(prom);
}
promedio();
// mas facil usando el metodo reduce
function promedioReduce() {
  let sum = arreglo.reduce((acc, val) => acc + val, 0);
  let prom = sum / arreglo.length;
  console.log(prom);
}
promedioReduce();
