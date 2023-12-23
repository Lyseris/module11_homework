let a = prompt('Введите простое число')

function isPrime(a) {
      if (a>=1000) {
       alert('Данные неверны')
        return false;
    } else if (a===1) {
        alert('Данные неверны')
        return 'Не простое число';
    } else if (a===2) {
        alert('Простое число')
        return 'Простое Число';
    } else {
        for(let x = 2; x < a; x++) {
          if (a % x===0) {
            alert('Не простое число')
            return 'Не простое число';
          }
        }
        alert('Простое число')
        return 'Простое Число';
      }
  }
  
  console.log(isPrime());
  