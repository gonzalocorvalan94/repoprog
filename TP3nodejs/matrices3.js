let nombres = [
  ["ana", "luis"],
  ["cami", "juan"],
  ["lucas", "carlos"],
];

let NOMBRES = nombres.map((mayus) => [
  mayus[0].toLocaleUpperCase(),
  mayus[1].toLocaleUpperCase(),
]);

console.log(NOMBRES);
