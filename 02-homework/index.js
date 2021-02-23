const getNumberN = +prompt('Введіть перше число N.');
console.log(typeof (getNumberN));
const getNumberM = +prompt('Введіть друге число M.');
console.log(typeof (getNumberM));
const numberN = parseInt(getNumberN, 10);
console.log(numberN);
const numberM = parseInt(getNumberM, 10);
console.log(numberM);
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