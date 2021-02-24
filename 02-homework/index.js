let numberN;
let numberM;
do {
    getNumberN = +prompt('Введіть перше число N. Якщо введете НЕ число, доведеться вводити повторно.');
} while (Number.isNaN(getNumberN));
do {
    getNumberM = +prompt('Введіть друге число M. Якщо введете НЕ число, доведеться вводити повторно.');
} while (Number.isNaN(getNumberM));
let sumOfNumbers = 0;
const skipEvenNumbers = confirm('Чи потрібно пропустити парні числа?');
console.log(skipEvenNumbers);
for (let i = getNumberN; i <= getNumberM; i++){
    if (skipEvenNumbers && (i % 2 == 0)) {
        continue;
    }
    sumOfNumbers += i;
}
alert(`Сума чисел від ${getNumberN} до ${getNumberM} дорівнює ${sumOfNumbers}`)