let arreglo = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 720, 15, 25, 30, 15, -30, -25, 10, 40,
];
let pares = [];
let impares = [];

function muestra() {
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
      pares.push(arreglo[i]);
    } else {
      impares.push(arreglo[i]);
    }
  }
  console.log(
    `Los valores del arreglo con ${arreglo.join(
      " - "
    )}. Los valores pares son ${pares.join(
      " - "
    )} y los impares son ${impares.join(" - ")}`
  );
}
muestra();
