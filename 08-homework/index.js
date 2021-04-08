class Student {
    constructor(university, course, fullName, marks = [], isDismiss = false) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
        this.isDismiss = isDismiss;
    }
    getInfo() {
        return `Студент ${this.course}го курсу ${this.university} ${this.fullName}`;
    }
    get getMarks() {
        if(!this.isDismiss){
            return this.marks;
        } else {
            return null;
        }
    }
    set setMarks(newMark) {
        if(!this.isDismiss)
        this.marks.push(newMark);
    }
    getAverageMark() {
        const total = this.marks.reduce((total, mark) => {
        return total + mark;
        }, 0);
        return (total / this.marks.length);
    }
    dismiss() {
        this.isDismiss = true;
        //console.log('Студента виключено.');
    }
    recover() {
        this.isDismiss = false;
        //console.log('Студента поновлено.');
    }   
}
class BudgetStudent extends Student {
    constructor(university, course, fullName, marks = [], isDismiss, scholarship) {
        super(university, course, fullName, marks, isDismiss);
        this.scholarship = scholarship;
        setInterval(() => console.log(`Ви отримали ${this.getScholarship()} грн. стипендії`), 30000);
    }
    getScholarship() {
        if(!this.isDismiss && this.getAverageMark() >= 4){
            return this.scholarship;
        }  else {
            return null;
        } 
    }
}
const student = new Student('Вищої Школи Психотерапії м.Одеса', '1', 'Остап Бендер', [5, 4, 4, 5]);
const budgetStudent = new BudgetStudent('Держаного університету телекомунікацій', '1', 'Чаїн-Головіна Марія', [5, 4, 5, 5], false, 1400);
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
Advanced
console.log(budgetStudent.getInfo());
console.log(`Ви отримали ${budgetStudent.getScholarship()} грн. стипендії`);
budgetStudent.dismiss();
console.log('Стипендія після виключення студента:', budgetStudent.getScholarship());
