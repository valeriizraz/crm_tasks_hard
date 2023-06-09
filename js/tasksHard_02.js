'use strict'

{
  let tax = 0;
  let taxPlus = 0;
  let taxBig = 0;

  const money = prompt('Сумма зарплаты', '')
  const statusSalary = 'Высокая зарплата';

  switch (statusSalary) {
    case "Низкая зарплата":
      tax = money * 0.13;
      console.log('Низкая зарплата')
      break;
    case "Средняя зарплата":
      tax = 15000 * 0.13;
      taxPlus = (money - 15000) * 0.2;
      console.log('Средняя зарплата')
      break;
    case "Высокая зарплата":
      tax = 15000 * 0.13;
      taxPlus = (money - 15000) * 0.2;
      taxBig = (money - 50000) * 0.3;
      console.log('Высокая зарплата')
      break;
    default:
      tax = 0;
      break;
  }

  console.log('Налог до 15000:', tax);

  console.log('Налог от 15000:', taxPlus);
  console.log('Налог до 15000 и от 15000:',tax + taxPlus);

  console.log('Налог от 50000:',taxBig);
  console.log('Налог до 15000, от 15000 и от 50000:',tax + taxPlus + taxBig);
}