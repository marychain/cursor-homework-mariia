const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };
function getMyTaxes(salary){
    const myTax = salary * this.tax;
    return myTax;
}
console.log('Величина податку IT-спеціаліста в одній з країн :', getMyTaxes.call(ukraine, 1000));
function getMiddleTaxes() {
    const middleTaxes = this.tax * this.middleSalary;
    return middleTaxes;
}
console.log('Середня величина податку IT-спеціаліста в Україні:', getMiddleTaxes.call(ukraine));
console.log('Середня величина податку IT-спеціаліста в Латвії:', getMiddleTaxes.call(latvia));
console.log('Середня величина податку IT-спеціаліста в Литві:', getMiddleTaxes.call(litva));
function getTotalTaxes() {
    const totalTaxCountry = this.tax * this.middleSalary * this.vacancies;
    return totalTaxCountry;
}
console.log('Загальна сума податку в Україні:', getTotalTaxes.call(ukraine));
console.log('Загальна сума податку в Латвії:', getTotalTaxes.call(latvia));
console.log('Загальна сума податку в Литві:', getTotalTaxes.call(litva));
function getMySalary(country) {
    setInterval(() => {
        const mySalary = {};
        mySalary.salary = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
        mySalary.taxes = +(mySalary.salary * country.tax).toFixed(2);
        mySalary.profit = +(mySalary.salary - mySalary.taxes).toFixed(2);
        console.log('Виведення об`єкту кожні 10 секунд:', mySalary);
    }, 10000);
}
getMySalary(ukraine);