'use strict';

//////////////////////////////////////////////////////////////////////////////////////

/*
Сумма через замыкание

Напишите функцию sum, которая работает так: sum(a)(b) = a+b.

sum(1)(2) = 3
sum(5)(-1) = 4
*/

/*
function sum(a) {
  return function(b) {
    return a + b;
  }
}

sum(1)(2);
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Функция - строковый буфер

В некоторых языках программирования существует объект «строковый буфер», который аккумулирует внутри себя значения. Его функционал состоит из двух возможностей:
1. Добавить значение в буфер.
2. Получить текущее содержимое.

Задача – реализовать строковый буфер на функциях в JavaScript, со следующим синтаксисом:
- Создание объекта: var buffer = makeBuffer();.
- Вызов makeBuffer должен возвращать такую функцию buffer, которая при вызове buffer(value) добавляет значение в некоторое внутреннее хранилище, а при вызове без аргументов buffer() – возвращает его.

function makeBuffer() { // ваш код // }
var buffer = makeBuffer();
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');
alert( buffer() ); // Замыкания Использовать Нужно!

Буфер должен преобразовывать все данные к строковому типу:

var buffer = makeBuffer();
buffer(0);
buffer(1);
buffer(0);
alert( buffer() ); // '010'

Решение не должно использовать глобальные переменные.
*/

/*
function makeBuffer() {
  var str = '';
  
  return function(arg) {
    //if (!arg) return str;
	if (arguments.length < 1) return str;
	
	str += arg;
  }
}

var buffer = makeBuffer();

buffer(0);
buffer(1);
buffer(0);

buffer();
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Строковый буфер с очисткой

Добавьте буферу из решения задачи Функция - строковый буфер метод buffer.clear(), который будет очищать текущее содержимое буфера:

function makeBuffer() {
  ...ваш код...
}

var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
alert( buffer() ); // Тест тебя не съест

buffer.clear();

alert( buffer() ); // ""
*/

/*
function makeBuffer() {
  var str = '';
  
  function buffer(arg) {
	if (arguments.length < 1) return str;
	str += arg;
  }
  
  buffer.clear = function() {str = '';}
  
  return buffer;
}

var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
buffer();

buffer.clear();
buffer();
*/

//////////////////////////////////////////////////////////////////////////////////////

// СОРТИРОВКА МАССИВОВ

/* вариант 1 - исходный

arr.sort(function(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
});
*/

/* вариант 2 - упрощенный (через тринарный оператор "?")

arr.sort(function(a, b) {
  return a > b ? 1 : -1;
});
*/

/* вариант 3 - совсем упрощенный. Но работает только с цифрами :(

arr.sort(function(a, b) {
  return a - b;
});
*/

// Первые 2 варианта универсальные - работают как со строками, так и с цифрами :)

//////////////////////////////////////////////////////////////////////////////////////

/*
Сортировка

У нас есть массив объектов:

var users = [{
  name: "Вася",
  surname: 'Иванов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}];

Обычно сортировка по нужному полю происходит так:

// по полю name (Вася, Маша, Петя)
users.sort(function(a, b) {
  return a.name > b.name ? 1 : -1;
});

// по полю age  (Маша, Вася, Петя)
users.sort(function(a, b) {
  return a.age > b.age ? 1 : -1;
});

Мы хотели бы упростить синтаксис до одной строки, вот так:

users.sort(byField('name'));
users.forEach(function(user) {
  alert( user.name );
}); // Вася, Маша, Петя

users.sort(byField('age'));
users.forEach(function(user) {
  alert( user.name );
}); // Маша, Вася, Петя

То есть, вместо того, чтобы каждый раз писать в sort function... – будем использовать byField(...)
Напишите функцию byField(field), которую можно использовать в sort для сравнения объектов по полю field, чтобы пример выше заработал.
*/

/*
function byField(field) {
  return function(a, b) {
    return a[field] > b[field] ? 1 : -1;
  }
}

var users = [{
  name: "Вася",
  surname: 'Иванов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}];

users;
users.sort(byField('name'));
users.sort(byField('age'));
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Фильтрация через функцию

1. Создайте функцию filter(arr, func), которая получает массив arr и возвращает новый, в который входят только те элементы arr, для которых func возвращает true.
2. Создайте набор «готовых фильтров»: inBetween(a,b) – «между a,b», inArray([...]) – "в массиве [...]". Использование должно быть таким:
- filter(arr, inBetween(3,6)) – выберет только числа от 3 до 6,
- filter(arr, inArray([1,2,3])) – выберет только элементы, совпадающие с одним из значений массива.
Пример, как это должно работать:

// .. ваш код для filter, inBetween, inArray

var arr = [1, 2, 3, 4, 5, 6, 7];
alert(filter(arr, function(a) {
  return a % 2 == 0
})); // 2,4,6
alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6
alert( filter(arr, inArray([1, 2, 10])) ); // 1,2
*/

/*
function filter(arr, func) {
  var newArr = [];
  
  for (var i = 0; i < arr.length; i++) {
	if (func(arr[i])) newArr.push(arr[i]);
  }
  
  return newArr;
}

function inBetween(a, b) {
  return function(n) {
    return n >= a && n <= b;
  }
}

function inArray(arr) {
  return function(n) {
    return ~arr.indexOf(n);  // arr.indexOf(n) != -1;
  }
}

var arr = [1, 2, 3, 4, 5, 6, 7];

filter(arr, function(n) {
  return n % 2 == 0
});
filter(arr, inBetween(3, 6));
filter(arr, inArray([1, 2, 10]));
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Армия функций

Следующий код создает массив функций-стрелков shooters. По замыслу, каждый стрелок должен выводить свой номер:

function makeArmy() {
  var shooters = [];

  for (var i = 0; i < 10; i++) {
    var shooter = function() { // функция-стрелок
      alert( i ); // выводит свой номер
    };
    shooters.push(shooter);
  }
  return shooters;
}
var army = makeArmy();
army[0](); // стрелок выводит 10, а должен 0
army[5](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...9

Почему все стрелки  выводят одно и то же? Поправьте код, чтобы стрелки работали как задумано. Предложите несколько вариантов исправления.
*/

/* вариант 1 - через .bind()

function makeArmy() {
  var shooters = [];

  for (var i = 0; i < 10; i++) {

	var shooter = function(i) {
	  alert(i);
    }.bind(null, i);
    shooters.push(shooter);
  }
  return shooters;
}

var army = makeArmy();

army[0]();
army[5]();
*/

/* оригинал 1 - мне не нравится через Named Function Expression - тут только глобальный скоуп :(

function makeArmy() {
  var shooters = [];

  for (var i = 0; i < 10; i++) {

	var shooter = function ranger() {
	  alert(ranger.me);
    };
	shooter.me = i;
	
    shooters.push(shooter);
  }
  return shooters;
}

var army = makeArmy();

army[0]();
army[5]();
*/

/* вариант 2 - со свойством функции и Function Declaration

function makeArmy() {
  var shooters = [];

  for (var i = 0; i < 10; i++) {

	function shooter() {
	  alert(shooter.me);
    };
	shooter.me = i;
	
    shooters.push(shooter);
  }
  return shooters;
}

var army = makeArmy();

army[0]();
army[5]();
*/

/* оригинал 2 - использовать самовызывающиеся Function Expression (с Function Declaration такой номер не пройдет) по сути мы результат мгновенного выполнения анонимной функции записываем в переменную
К тому же такие самовызывающиеся функции лучше для подстраховки оборачивать в скобки - (function() { ... })();

function makeArmy() {
  var shooters = [];

  for (var i = 0; i < 10; i++) {
    var shooter = (function(x) {
      return function() {
        alert(x);
      };
    })(i);
    shooters.push(shooter);
  }
  return shooters;
}

var army = makeArmy();

army[0]();
army[5]();
*/

/* оригинал 3 - на каждой итерации цикла самовыполняется анонимная функция (обернули в нее всё тело цикла)

function makeArmy() {
  var shooters = [];

  for (var i = 0; i < 10; i++)(function(i) {
    var shooter = function() {
      alert(i);
    };
    shooters.push(shooter);
  })(i);
  return shooters;
}

var army = makeArmy();

army[0]();
army[5]();
*/
