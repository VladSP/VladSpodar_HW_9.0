arrA = new Array(+prompt('Введіть довжину масиву: '));
arrB = [];
toLabel:
for(i = 0; i < arrA.length; i++) {
    arrA[i] = Math.floor(Math.random()*100);

    for(j = 2; j < arrA[i]; j++) {
        if (arrA[i] % j == 0) {
            continue toLabel;
        }
    }
    arrB[i] = arrA[i];
};

console.log(arrA);
document.write(arrA + "<br>");
arrB = arrB.filter(Boolean);
console.log(arrB);
document.write(arrB + "<br>");

minValue = maxValue = arrB[0];

for (i = 0; i < arrB.length; i++) {
    if (arrB[i] < minValue) {
        minValue = arrB[i];
    }
    else if (arrB[i] > maxValue) {
        maxValue = arrB[i];
    }
}

console.log(`Мінімальне просте число: ${minValue}`);
console.log(`Максимальне просте число: ${maxValue}`);
document.write(`Мінімальне просте число: ${minValue}<br>`);
document.write(`Максимальне просте число: ${maxValue}<br>`);