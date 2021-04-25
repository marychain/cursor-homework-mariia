'use strict';

var _index_hw = require('./index_hw1.js');

var _index_hw2 = require('./index_hw2.js');

var _index_hw3 = require('./index_hw3.js');

var _index_hw4 = require('./index_hw4.js');

var _index_hw5 = require('./index_hw5.js');

var _index_hw6 = require('./index_hw6.js');

var _index_hw7 = require('./index_hw7.js');

var _index_hw8 = require('./index_hw8.js');

var _index_hw9 = require('./index_hw10.js');

var _index_hw10 = require('./index_hw12.js');

var _index_hw11 = require('./index_hw15.js');

require('./styles.css');

var _index_hw12 = require('./index_hw13');

var _index_hw13 = require('./index_hw11');

console.log("Max price from HW#1:", _index_hw.maxPrice);
(0, _index_hw2.getSumOfNumbers)();
console.log("Random number from HW#3:", (0, _index_hw3.getRandomNumber)(1, 9));
console.log("Students with marks from HW#4:", _index_hw4.marksStudents);
console.log("Replace bad word from HW#5:", (0, _index_hw5.replaceBadWords)("Are you fucking kidding?"));
console.log("Calculate word letters from HW#6:", (0, _index_hw6.calculateWordLetters)("Test"));
(0, _index_hw7.getMySalary)(_index_hw7.ukraine);
console.log("Get info about student from HW#8:", _index_hw8.student.getInfo());
(0, _index_hw9.generateBlocks)();
(0, _index_hw9.generateBlocksInterval)();
(0, _index_hw10.getRandomChinese)(4);
console.log("Id Generator from HW#15:", _index_hw11.idGenerator.next().value);
console.log("Id Generator from HW#15:", _index_hw11.idGenerator.next().value);
console.log("Id Generator from HW#15:", _index_hw11.idGenerator.next().value);
var buttonHW13 = document.createElement('button');
document.body.appendChild(buttonHW13);
buttonHW13.classList.add('button_13');
buttonHW13.textContent = 'Get Info HW#13';
document.querySelector('.button_13').addEventListener('click', _index_hw12.getListOfPlanet);
(0, _index_hw13.getKeySound)();
