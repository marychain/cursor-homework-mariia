const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
    }];
const getSubjects = (students) => Object.keys(students.subjects).map((subject) => {
    return subject[0].toUpperCase() + subject.slice(1).split('_').join(' ')
});
function getAverageMark(students) {
    const markArray = Object.values(students.subjects).flat();
    total = markArray.reduce((total, number) => {
        return total + number;
    }, 0);
    return (total / markArray.length).toFixed(2);
}
function getStudentInfo(students) {
    const studentInfo = {
        name: students.name,
        course: students.course,
        averageMark: getAverageMark(students)
    }
    return studentInfo;
}
function getStudentsNames() {
    const studentsNamesArray = Object.values(students).map((object) => {
        return object.name;
    });
    return studentsNamesArray.sort();
}
function getBestStudent() {
    for (let i = 0; i < students.length; i++){
        students[i].averageMark = getAverageMark(students[i]);
    }
    let bestMark = 0;
    let bestName = '';
    const studentsBestMark = Object.values(students).map((object) => {
        if (bestMark < object.averageMark) {
            bestMark = object.averageMark;
            bestName = object.name;
        }
    });
    return bestName;
}
function calculateWordLetters(string) {
    const lettersArray = [...string.toLowerCase()];
    const calculateLetters = {};
    lettersArray.map((letter) => {
        let counter = 0;
        for (let i = 0; i < lettersArray.length; i++) {
            if (letter === lettersArray[i]) {
                counter++;
            }
             calculateLetters[letter] = counter;
        }
    })
    return calculateLetters;
}
// console.log('Список предметів для конкретного студента:',getSubjects(students[0]));
// console.log('Cередня оцінка по усім предметам для переданого студента:', getAverageMark(students[0]));
// console.log('Інформація загального виду по переданому студенту:', getStudentInfo(students[0]));
// console.log('Функція повертає імена студентів у алфавітному порядку:', getStudentsNames(students));
// console.log('Кращий студент зі списку по показнику середньої оцінки:', getBestStudent(students));
// console.log('Обє`кт, в якому ключі це букви у слові, а значення – кількість їх повторень:',calculateWordLetters("Тест"));
export {calculateWordLetters};