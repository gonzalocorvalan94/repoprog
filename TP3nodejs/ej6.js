let i = 0;
let j = 0;

while (i < 500) {
  if (i % 5 === 0) {
    console.log("---------------------------------------");
  }
  if (i % 4 === 0 && i % 9 === 0) {
    console.log(`${i} <---- Es multiplo de 4 y 9`);
  } else if (i % 4 === 0) {
    console.log(`${i} <---- Es multiplo de 4`);
  } else if (i % 9 === 0) {
    console.log(`${i} <---- Es multiplo de 9`);
  } else {
    console.log(i);
  }
  i++;
}
