let fila = [10, 20, 30];

let nuevaFila = fila.map((valor) => valor + 1);

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let nuevaMatriz = matriz.map((valor) => [
  valor[0] + 1,
  valor[1] + 1,
  valor[2] + 1,
]);
console.log(nuevaFila);
console.log(nuevaMatriz);
