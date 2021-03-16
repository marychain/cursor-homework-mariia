class Student {
    constructor(university, course, fullName, marks = []) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
    }
    getInfo() {
        return `Студент ${this.course}го курсу ${this.university} ${this.fullName}`;
    }
    get getMarks() {
        if(this.isDismiss !== null){
            return this.marks;
        } else {
            return null;
        }
    }
    set setMarks(newMark) {
        if(this.marks !== null)
        this.marks.push(newMark);
    }
    getAverageMark() {
        if (this.marks !== null) {
            const total = this.marks.reduce((total, mark) => {
                return total + mark;
            }, 0);
            return (total / this.marks.length);
        } else {
            return null;
        }
    }
    dismiss() {
        this.marks = null;
    }
    recover() {
        this.marks = [];
    }   
}
class BudgetStudent extends Student {
    constructor(university, course, fullName, marks = [], scholarship) {
        super(university, course, fullName, marks);
        this.scholarship = scholarship;
        setInterval(() => console.log(`Ви отримали ${this.getScholarship()} грн. стипендії`), 30000);
    }
    getScholarship() {
        if(this.isDismiss !== null && this.getAverageMark() >= 4){
            return this.scholarship;
        }  else {
            return null;
        } 
    }
}
const student = new Student('Вищої Школи Психотерапії м.Одеса', '1', 'Остап Родоманський Бендер', [5, 4, 4, 5]);
const budgetStudent = new BudgetStudent('Держаного університету телекомунікацій', '1', 'Чаїн-Головіна Марія', [5, 4, 5, 5], 1400);
console.log(student.getInfo());
console.log('Початковий масив оцінок', student.getMarks);
student.setMarks = 5;
console.log('Поставили оцінку студенту', student.getMarks);
console.log('Середній бал', student.getAverageMark());
student.dismiss();
console.log('Масив оцінок після виключення студента', student.getMarks);
student.setMarks = 5;
console.log('Спроба поставити оцінку після виключення студента', student.getMarks);
student.recover();
console.log('Масив оцінок після відновлення студента', student.getMarks);
student.setMarks = 5;
console.log('Ставимо оцінку після відновлення студента', student.getMarks);
//Advanced
console.log(budgetStudent.getInfo());
console.log(`Ви отримали ${budgetStudent.getScholarship()} грн. стипендії`);
budgetStudent.dismiss();
console.log('Стипендія після виключення студента:', budgetStudent.getScholarship());
