let arreglo = [1, 2, 3, 4, 10, 6, 3, 7];
let mayor = arreglo[0];
function mayores() {
  for (let i = 0; i < arreglo.length; i++) {
    if (mayor < arreglo[i]) {
      mayor = arreglo[i];
    }
  }
  console.log(`El numero mayor es ${mayor}`);
}
mayores();
