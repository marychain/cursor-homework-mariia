export const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };
function getMyTaxes(salary){
    return myTax = salary * this.tax;
}
//console.log('Величина податку IT-спеціаліста в одній з країн :', getMyTaxes.call(ukraine, 1000));
function getMiddleTaxes() {
    return middleTaxes = this.tax * this.middleSalary;
}
//console.log('Середня величина податку IT-спеціаліста в Україні:', getMiddleTaxes.call(ukraine));
//console.log('Середня величина податку IT-спеціаліста в Латвії:', getMiddleTaxes.call(latvia));
//console.log('Середня величина податку IT-спеціаліста в Литві:', getMiddleTaxes.call(litva));
function getTotalTaxes() {
    return totalTaxCountry = this.tax * this.middleSalary * this.vacancies;
}
//console.log('Загальна сума податку в Україні:', getTotalTaxes.call(ukraine));
//console.log('Загальна сума податку в Латвії:', getTotalTaxes.call(latvia));
//console.log('Загальна сума податку в Литві:', getTotalTaxes.call(litva));
function getMySalary(country) {
    setInterval(() => {
        const min = 1500;
        const max = 2000
        const mySalary = {};
        mySalary.salary = Math.floor(Math.random() * (max - min + 1)) + min;
        mySalary.taxes = +(mySalary.salary * country.tax).toFixed(2);
        mySalary.profit = +(mySalary.salary - mySalary.taxes).toFixed(2);
        console.log('Output of the object every 10 seconds from HW7:', mySalary);
    }, 10000);
}
export {getMySalary};