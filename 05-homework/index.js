//1.Функція яка повертає масив випадкових цілих чисел
function getRandomArray(length, min, max) {
    const randomArray = [];
    for (let index = 0; index < length; index++) {
        randomArray[index] = [Math.floor(Math.random() * (max - min + 1)) + min];
    }
    return randomArray;
}
console.log(getRandomArray(15, 1, 100));
function getAverage(...numbers) {
    numbers= numbers.filter(number => Number.isInteger(number) == true);
    total = numbers.reduce((total, number) => {
        return total + number;
    }, 0);
    return total / numbers.length;
}
console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
function filterEvenNumbers(...numbers) {
    const filterNumbers = numbers.filter(number => (number % 2) !== 0);
    return filterNumbers;
}
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));
//6.Функція яка порахує кількість чисел більших 0
function countPositiveNumbers(...numbers) {
    const positiveNumbers = numbers.filter(number => number > 0);
    return positiveNumbers.length;
}
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));
//7.Функція яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
function getDividedByFive(...numbers) {
    const dividedByFive = numbers.filter(number => (number % 5) === 0);
    return dividedByFive;
}
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
// 8.Функція яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*)
function replaceBadWords(string) {
    const wordsArray = string.split(' ');
    const badWords = ["shit", "fuck"];
    let words = wordsArray.map((word) => {
        for (let i = 0; i < badWords.length; i++){
            word = word.replaceAll(badWords[i], "****");
        }
        return word;   
    })
    return words.join(' ');
}
console.log(replaceBadWords("Are you fucking kidding?"));
console.log(replaceBadWords("Holy shit!"));
console.log(replaceBadWords("It's bullshit!"));
// 9.Функція яка розбиває кожне слово на умовні склади по 3 букви
function divideByThree(word) {
    const divideByThreeArray = [];
    for (let i = 0; i < word.length; i += 3) {
        divideByThreeArray.push(word.toLowerCase().substr(i, 3));
    }
    return divideByThreeArray;    
}
console.log(divideByThree("Commander"));
console.log(divideByThree("live"));