function suma() {
  let sum = 0;
  for (let i = 0; i <= 100; i++) {
    sum = sum + i;
  }
  console.log(sum);
}
suma();

// mas facil usando la suma de Gauss
function sumaGauss() {
  let n = 100;
  let sum = (n * (n + 1)) / 2;
  console.log(sum);
}
sumaGauss();
// mas facil usando la suma de Gauss con un parametro
function sumaGaussParam(n) {
  let sum = (n * (n + 1)) / 2;
  console.log(sum);
}
sumaGaussParam(100);
