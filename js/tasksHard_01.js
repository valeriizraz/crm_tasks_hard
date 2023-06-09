'use strict'

{
  let tax = 0;

  const money = prompt('Введите сумму', '');
  const taxStatus = 'Высокая';

  switch (taxStatus) {
    case "Низкая":
      tax = money * 0.13;
      console.log('Низкая')
      break;
    case ('Средняя'):
      tax = money * 0.2;
      console.log('Средняя')
      break;
    case "Высокая":
      tax = money * 0.3;
      console.log('Высокая')
      break;
      default:
        tax = 0;
        break;
  }
  
  console.log('Сумма налога:', tax);
}


