let arrA = [];
let arrB = [];
let length = prompt('Введіть довжину масиву: ');
for (let i = 0; i < length; i++) {
  arrA.push(Math.floor(Math.random() * 100)); 
}
for (let i = 0; i < arrA.length; i++) {
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(arrA[i]); j++) {
    if (arrA[i] % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    arrB.push(arrA[i]);
  }
}
let min = arrB[0];
let max = arrB[0];
for (let i = 1; i < arrB.length; i++) {
  if (arrB[i] < min) {
    min = arrB[i];
  }
  if (arrB[i] > max) {
    max = arrB[i];
  }
}
console.log(arrA);
console.log(arrB);
console.log(`Мінімальне просте число: ${min}`);
console.log(`Максимальне просте число: ${max}`);
document.write(`${arrA.join(', ')}<br>`);
document.write(`${arrB.join(', ')}<br>`);
document.write(`Мінімальне просте число: ${min}<br>`);
document.write(`Максимальне просте число: ${max}<br>`);