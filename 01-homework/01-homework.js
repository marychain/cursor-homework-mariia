const priceApple = 15.678;
const priceOrange = 123.965;
const pricePeach = 90.2345;
console.log(`Ціна яблука ${priceApple}`);
console.log(`Ціна апельсина ${priceOrange}`);
console.log(`Ціна персика ${pricePeach}`);
console.log(
  `Максимальна ціна ${Math.max(priceApple, priceOrange, pricePeach)}`
);
console.log(`Мінімальна ціна ${Math.min(priceApple, priceOrange, pricePeach)}`);
const totalAmount = priceApple + priceOrange + pricePeach;
console.log(`Сума всіх товарів ${totalAmount}`);
const priceAppleInteger = Math.trunc(priceApple);
const priceOrangeInteger = Math.trunc(priceOrange);
const pricePeachInteger = Math.trunc(pricePeach);
const totalAmountInteger =
  priceAppleInteger + priceOrangeInteger + pricePeachInteger;
console.log(`Сума товарів безкопійок ${totalAmountInteger}`);
console.log(
  `Сума товарів округлена до сотень ${
    Math.round(totalAmountInteger / 100) * 100
  }`
);
if (totalAmountInteger % 2 === 0) {
  console.log(`Сума є парним числом? ${true}`);
} else {
  console.log(`Сума є непарним числом? ${false}`);
}
const clientCash = 500;
console.log(`Решта від 500 ${clientCash - totalAmount}`);
console.log(
  `Середнє значення цін ${((priceApple + priceOrange + pricePeach) / 3).toFixed(
    2
  )}`
);
const randomDiscount = Math.floor(Math.random() * 101);
const discount = (totalAmount / 100) * randomDiscount;
const discountedAmount = (totalAmount - discount).toFixed(2);
console.log(`Сума до оплати зі знижкою ${discountedAmount}`);
const costPrice = totalAmount / 2;
console.log(`Чистий прибуток ${costPrice - discount}`);
