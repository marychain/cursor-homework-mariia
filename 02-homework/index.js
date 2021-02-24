let numberN;
let numberM;
do {
    getNumberN = +prompt('Введіть перше число N. Якщо введете НЕ число, доведеться вводити повторно.');
    numberN = parseInt(getNumberN, 10);
} while (Number.isNaN(numberN));
do {
    getNumberM = +prompt('Введіть друге число M. Якщо введете НЕ число, доведеться вводити повторно.');
    numberM = parseInt(getNumberM, 10);
} while (Number.isNaN(numberM));
let sumOfNumbers = 0;
const skipEvenNumbers = confirm('Чи потрібно пропустити парні числа?');
console.log(skipEvenNumbers);
for (let i = numberN; i <= numberM; i++){
    if (skipEvenNumbers && (i % 2 == 0)) {
        continue;
    }
    sumOfNumbers += i;
}
alert(`Сума чисел від ${numberN} до ${numberM} дорівнює ${sumOfNumbers}`)