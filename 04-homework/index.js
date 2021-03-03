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
// function getMarksRandom() {
//     let pairsThemesArray = [];
//     // let markRandomForStudent = [];
//     for (let index = 0; index < themesPairs.length; index++){
//         let randomMark = Math.floor(Math.random() * (6 - 1)) + 1;
//         randomMark = randomMark.split('');
//         console.log(randomMark);
//         pairsThemesArray[index].push(randomMark[0]);
//     }
//     console.log(randomMark);
//     return pairsThemesArray;
// }



const pairs = getPairs(students);
console.log(pairs);
const themesPairs = getThemes(themes)
console.log(themesPairs);
const marksStudents = getMarks(marks);
console.log(marksStudents);
const studentsMarksRandom = getMarksRandom();
console.log(studentsMarksRandom);
console.log(students);
