let numberN = 0;
let numberM = 0;
do {
    numberN = +prompt('Введіть перше число N. Якщо введете НЕ число або не ціле число доведеться вводити повторно.');
} while (!Number.isInteger(numberN));
do {
    numberM = +prompt('Введіть перше число N. Якщо введете НЕ число або не ціле число доведеться вводити повторно.');
} while (!Number.isInteger(numberM));
if (numberN > numberM) {
    console.log(`Число ${numberN} більше за ${numberM}, міняємо їх місцями.`);
    const tempN = numberN;
    numberN = numberM;
    numberM = tempN;
}
let sumOfNumbers = 0;
const skipEvenNumbers = confirm('Чи потрібно пропустити парні числа?');
console.log(skipEvenNumbers);
for (let i = numberN; i <= numberM; i++){
    if (skipEvenNumbers && (i % 2 == 0)) {
        continue;
    }
    sumOfNumbers += i;
}
alert(`Сума чисел від ${numberN} до ${numberM} дорівнює ${sumOfNumbers}`);