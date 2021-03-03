const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function getPairs() {
    const pairGirl = [students[0], students[1], students[4]];
    const pairBoy = [students[2], students[3], students[5]];
    const pairsArray = [];
    for (let index = 0; index < pairGirl.length; index++){
        pairsArray[index] = [pairGirl[index], pairBoy[index]];
    }
    return pairsArray;
}
function getThemes() {
    const pairsThemesArray = [];
    for (let index = 0; index < pairs.length; index++){
        pairsThemesArray[index] = pairs[index].join(' і ').split(',');
        pairsThemesArray[index].push(themes[index]);
    }
    return pairsThemesArray;
}
function getMarks() {
    const markForStudent = [];
    for (let index = 0; index < students.length; index++){
        markForStudent[index] = [students[index], marks[index]];
    }
    return markForStudent;
}
function getMarksRandom() {
      const randomMarkForStudent = [];
     for (let index = 0; index < themesPairs.length; index++){
          const randomMark = Math.floor(Math.random() * (6 - 1)) + 1;
        	randomMarkForStudent[index]=themesPairs[index].concat(randomMark);
    }
     return randomMarkForStudent;
 }
const pairs = getPairs(students);
console.log(`Масив з парами студентів:`pairs);
const themesPairs = getThemes(themes)
console.log(`Масив з теми проєктів: ${themesPairs}`);
const marksStudents = getMarks(marks);
console.log(`Масив оцінок з студентами: ${marksStudents}`);
const studentsMarksRandom = getMarksRandom();
console.log(`Масив з студентами, проєктами та випадковими оцінками: ${studentsMarksRandom}`);
console.log(students);
console.log(themes);
console.log(marks);
