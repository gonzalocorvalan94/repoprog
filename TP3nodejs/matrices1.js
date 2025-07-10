let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

matriz[1][2] = 99; // cambia la fila 2 columna 3 por 99. Acordate que las matrices arrancan en fila y columna 0.

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(matriz[i][j]);
  }
}
// El for anterior recorre el objeto y lo imprime por consola



//Este for imprime la matriz completa en forma de matriz.
for (let i = 0; i < matriz.length; i++) {
  console.log(matriz[i].join(" "));
}
