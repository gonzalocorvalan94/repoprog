let arreglo = [-1, -2, -10, 5, -3, 10, 0, 0, 15, -21, 23, 25, 0, -14];
let contpositivo = 0;
let cont0 = 0;
let contneg = 0;
function cuenta() {
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 0) {
      contpositivo = contpositivo + 1;
    } else if (arreglo[i] === 0) {
      cont0 = cont0 + 1;
    } else {
      contneg = contneg + 1;
    }
  }
  console.log(
    `Tenes ${contpositivo} valores positivos, ${cont0} valores 0, y ${contneg} valores negativos`
  );
}
cuenta();
