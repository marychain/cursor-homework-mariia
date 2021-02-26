//Функція для знаходження максимальної цифри
function getMaxDigit(number) {
    const getDigitArray = number.toString().split('');
    const maxDigit = Math.max(...getDigitArray);
    return Number(maxDigit);
}
//Функція приведення до ступеню
function powNumber(number, pow) {
    const numberOfPow = number;
    for (let i = pow; i > 1; i=i-1){
        number = (number * numberOfPow);
    }
    return number;
}
//Функція, що приводить першу букву до верхнього регістра
function upperCaseFirstLetter(word) {
    const wordCase = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    return wordCase;
}
//Функція пошуку випадкового числа в заданому діапазоні
function getRandomNumber(min, max) {
    min = Math.floor(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * ((max + 1) - min)) + min;
}
//Функція перевірки, чи є вираз паліндромом
function checkPalindrome(str) {
  str = str.replace(/ /g, '').toUpperCase();
  return str == str.split('').reverse().join('');
}
//Функція генерації випадкового пароля, за замовчуванням 8 символів
function getRandomPassword(len) {
    if (len == undefined) {
        len = 8;
    }
    let password = '';
    const numbers = '1234567890';
    for (let i = 0; i < len; i++){
        password += numbers.charAt(Math.floor(Math.random() * numbers.length));     
    }
    return password;
}
console.log(`Функція пошуку найбільшої цифри getMaxDigit(238670897875) - ${getMaxDigit(238670897875)}`);
console.log(`Функція приведення до ступеня powNumber(5, 3) - ${powNumber(5, 3)}`);
console.log(`Функція робить першу букву великою upperCaseFirstLetter('сЛоВО') - ${upperCaseFirstLetter('сЛоВО')}`);
console.log(`Функція повертає випадкове ціле число getRandomNumber(1, 10) - ${getRandomNumber(1.2, 10.6)}`);
console.log(`Функція перевірки на паліндром checkPalindrome('Я несу гусеня') - ${checkPalindrome('Я несу гусеня')}`);
console.log(`Функція генерації випадкового пароля getRandomPassword(4)- ${getRandomPassword(4)}`);
console.log(`Функція генерації випадкового пароля getRandomPassword()- ${getRandomPassword()}`);