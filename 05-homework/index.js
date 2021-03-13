const getRandomArray = (min, max, length) =>
    Array(length).fill(0).map(item => Math.floor(Math.random() * (max - min + 1) + min))
console.log("Масив випадкових чисел:", getRandomArray(1, 100, 15));
function getModa(...numbers) {
    let moda=0;
    let maxCounterValue = 0;
    numbers.filter(number => Number.isInteger(number) == true).map((number) => {
        let counter = 0;
        for (let i = 0; i < numbers.length; i++) { 
            if (number === numbers[i]) 
            counter++;   
        }
        if (counter > maxCounterValue){
            maxCounterValue = counter;    
            moda = number;
        } else {
            counter = 0;
        }
    });
    return moda;
}
console.log("Мода масиву:", getModa(6, 2, 55, 6, 6, 78, 2, 55, 6, 77, 57, 87, 23, 2, 6, 56, 3, 2));
console.log("Мода масиву:", getModa(6, 2, 55, 3, 6, 78, 2, 55, 6, 77, 57, 87, 23, 2, 6, 3, 2, 2, 2, 2));
const getAverage = (...numbers) => numbers.reduce((total, number) => total + number) / numbers.length;
console.log("Середнє арифметичне переданих аргументів: ", getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
function getMedian(...numbers) {
	numbers = numbers.filter(number => Number.isInteger(number) == true);
    const halfArray = Math.floor(numbers.length / 2);
    numbers.sort((a, b) => { return a - b;});
    if (numbers.length % 2) {
        return numbers[halfArray];
    } else {
        return (numbers[halfArray-1] + numbers[halfArray]) / 2;
  }
}
console.log("Медіана масиву:", getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log("Медіана масиву:",getMedian(1, 2, 3, 4));
const filterEvenNumbers = (...numbers) => numbers.filter(number => number % 2 !== 0)
console.log("Масив з відфільтрованими парними числами:",filterEvenNumbers(1, 2, 3, 4, 5, 6));
const countPositiveNumbers = (...numbers) => numbers.filter(number => number > 0);
console.log("Кількість чисел більших за 0:",countPositiveNumbers(1, -2, 3, -4, -5, 6).length);
const getDividedByFive = (...numbers) => numbers.filter(number => number % 5 === 0);
console.log("Масив чисел, що діляться на 5:", getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
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
function divideByThree(word) {
    const divideByThreeArray = [];
    for (let i = 0; i < word.length; i += 3) {
        divideByThreeArray.push(word.toLowerCase().substr(i, 3));
    }
    return divideByThreeArray;    
}
console.log('Слова розбиті на склади по 3 букви:', divideByThree("Commander"));
console.log('Слова розбиті на склади по 3 букви:', divideByThree("live"));