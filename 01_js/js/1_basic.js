'use strict';

/*
Повторять цикл, пока ввод неверен

Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Cancel (ESC).
Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.
*/

/*
var n = 0;

while (n < 100 && n != null) {
  n = prompt('Введите число больше 100', 0);
};
*/

////////////////////////////////////////////////////////////////////////////////////

/*
Вывести простые числа

Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
Другими словами, n>1 – простое, если при делении на любое число от 2 до n-1 есть остаток.
Создайте код, который выводит все простые числа из интервала от 2 до 10. Результат должен быть: 2,3,5,7.
P.S. Код также должен легко модифицироваться для любых других интервалов.
*/

/* оригинал
nextStep: for (var n = 2; n < 10; n++) {
  for (var i = 2; i < n; i++) {
    if (n % i == 0) {
      continue nextStep;
    }
  }
  alert(n);
};
*/

/*
for (var n = 2; n < 10; n++) {
  if (n % 2 != 0 &&
      n % (n-1) != 0 &&
	  n / n == 1) {
    alert(n);
  }
};
*/

////////////////////////////////////////////////////////////////////////////////////

/*
Перепишите функцию, используя оператор '?' или '||'

Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку. Сделайте два варианта функции checkAge:
Используя оператор '?'
Используя оператор ||

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
};
*/

/*
function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
};
*/

/*
function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
};
*/

////////////////////////////////////////////////////////////////////////////////////

/*
Функция pow(x,n)

Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...*1 = 1

Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.
*/

/*
var x = +prompt('введите число', '');
var n = +prompt('введите степень', '');

function powww(x, n) {
  var result = x;
  
  for (var i = 1; i < n; i++) {
    result *= x;
  }
  return result;
};

if (n <= 1) {
  alert('введите степень больше 1');
}
else {
  alert(powww(x, n));
}
*/

////////////////////////////////////////////////////////////////////////////////////

/*
Вычислить сумму чисел до данного

Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n, например:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

Сделайте три варианта решения:
С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) для n > 1.
С использованием формулы для суммы арифметической прогрессии.
*/

/*
function sumTo1(n) {
  var result = n;
  for (var i = n - 1; i >= 0; i--) {
    result += i;
  }
  return result;
};
alert(sumTo1(100));
*/

/* оригинал
function sumTo1(n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
alert(sumTo1(100));
*/


/*
function sumTo2(n) {
  if (n != 0) {
    return n + sumTo2(n - 1);
  } else {
    return n;
  }
};
alert(sumTo2(100));
*/

/* оригинал
function sumTo2(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}
alert(sumTo2(100));
*/


/*
function sumTo3(n) {
  var result = n + ((n * (n - 1)) / 2);
  // var result = n + n * (n - 1) / 2;
  return result;
};
alert(sumTo3(100));
*/

/* оригинал, формула: n*(n+1)/2
function sumTo3(n) {
  return n * (n + 1) / 2;
}
alert(sumTo3(100));
*/

////////////////////////////////////////////////////////////////////////////////////

/*
Вычислить факториал

Факториа́л числа – это число, умноженное на «себя минус один», затем на «себя минус два» и так далее, до единицы. Обозначается n!
Определение факториала можно записать как:
n! = n * (n - 1) * (n - 2) * ...*1
Примеры значений для разных n:

1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120

Задача – написать функцию factorial(n), которая возвращает факториал числа n!, используя рекурсивный вызов.
alert( factorial(5) ); // 120
Подсказка: обратите внимание, что n! можно записать как n * (n-1)!. Например: 3! = 3*2! = 3*2*1! = 6
*/

/*
function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
};
alert(factorial(5));
*/

/*
function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
};
alert(factorial(5));
*/

/* оригинал
Базисом рекурсии является значение 1. А можно было бы сделать базисом и 0. Тогда код станет чуть короче.
В этом случае вызов factorial(1) сведётся к 1*factorial(0), будет дополнительный шаг рекурсии.

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}
alert(factorial(5));
*/

////////////////////////////////////////////////////////////////////////////////////

/*
Числа Фибоначчи

Последовательность чисел Фибоначчи имеет формулу Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.
Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....
Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.
Напишите функцию fib(n), которая возвращает n-е число Фибоначчи.
*/

/*
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};
alert(fib(7));
*/

/*
function fib(n) {
  var a = 1;
  var b = 1;
  for (var i = 2; i < n; i++) {
	var c = a + b;
    a = b;
	b = c;
  }
  return c;
};
alert(fib(77));
*/

/* оригинал
function fib(n) {
  var a = 1,
    b = 1;
  for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}
alert( fib(3) ); // 2
alert( fib(7) ); // 13
alert( fib(77) ); // 5527939700884757
*/

function showPrimes(n) {

  for (var i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // простое
  }
}

function isPrime(n) {
  for (var i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}
showPrimes(7);










