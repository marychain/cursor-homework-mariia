let numberN = 0;
let numberM = 0;
do {
    alert('Якщо Ви введете Не число, доведеться ввести дані повторно!')
    getNumberN = +prompt('Введіть перше число N.');
    getNumberM = +prompt('Введіть друге число M.');
    numberN = parseInt(getNumberN, 10);
    numberM = parseInt(getNumberM, 10);
} while (Number.isNaN(numberN) || Number.isNaN(numberM));
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