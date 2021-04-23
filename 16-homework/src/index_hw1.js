const priceApple = 15.678;
const priceOrange = 123.965;
const pricePeach = 90.2345;
//console.log(`Ціна яблука ${priceApple}`);
//console.log(`Ціна апельсина ${priceOrange}`);
//console.log(`Ціна персика ${pricePeach}`);
export const maxPrice = Math.max(priceApple, priceOrange, pricePeach);
//console.log(`Максимальна ціна ${maxPrice}`);
const minPrice = Math.min(priceApple, priceOrange, pricePeach);
//console.log(`Мінімальна ціна ${minPrice}`);
const totalAmount = priceApple + priceOrange + pricePeach;
//console.log(`Сума всіх товарів ${totalAmount}`);
const priceAppleInteger = Math.trunc(priceApple);
const priceOrangeInteger = Math.trunc(priceOrange);
const pricePeachInteger = Math.trunc(pricePeach);
const totalAmountInteger =
  priceAppleInteger + priceOrangeInteger + pricePeachInteger;
//console.log(`Сума товарів безкопійок ${totalAmountInteger}`);
const amountRoundedToHundreds = Math.round(totalAmountInteger / 100) * 100;
//console.log(
//   `Сума товарів округлена до сотень ${amountRoundedToHundreds}`
// );
if (totalAmountInteger % 2 === 0) {
  //console.log(`Сума є парним числом? ${true}`);
} else {
  //console.log(`Сума є непарним числом? ${false}`);
}
const clientCash = 500;
const restPayment = clientCash - totalAmount;
//console.log(`Решта від 500 ${restPayment}`);
const averageValueOfPrices = ((priceApple + priceOrange + pricePeach) / 3).toFixed(2);
//console.log(
//   `Середнє значення цін ${averageValueOfPrices}`
// );
const randomDiscount = Math.floor(Math.random() * 101);
const discount = (totalAmount / 100) * randomDiscount;
const discountedAmount = (totalAmount - discount).toFixed(2);
//console.log(`Сума до оплати зі знижкою ${discountedAmount}`);
const costPrice = totalAmount / 2;
const profit = costPrice - discount;
//console.log(`Чистий прибуток ${profit}`);
