'use strict';

// точная проверка на число

/*
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
*/

///////////////////////////////////////////////////////////////////////////////////

// Интерфейс суммы

// Создайте страницу, которая предлагает ввести два числа и выводит их сумму

/*
var a = +prompt('Number1', '');

while (isNaN(a) == true) {
  a = +prompt('Number1', '');
}

var b = +prompt('Number2', '');

while (isNaN(b) == true) {
  b = +prompt('Number2', '');
}

alert(a + b);
*/

///////////////////////////////////////////////////////////////////////////////////

// Сложение цен

// Получится глупо, если при заказе двух товаров с ценами 0.10$ и 0.20$ человек получит общую стоимость 0.30000000000000004$ :)

/*
function check () {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum = sum + (arguments[i] * 100);
  }
  return (sum / 100) + '$';
}

check(0.1, 0.24, 0.36);
*/

/////////////////////////////////////////////////////////////////////////////////////

// Как получить дробную часть числа?

// Напишите функцию getDecimal(num), которая возвращает десятичную часть числа

/*
function getDecimal(num) {
  var str = '' + num;
  // если метод .indexOf('букваИлиСимвол') , принимающий "строку" , не найдет переданного ему элемента, он возвращает  значение -1 (тип number)
  var dot = str.indexOf('.');
  
  // если значение dot == -1 т.е. если символ "." не найден - вернем 0 - остатка нет, он нулевой!
  if (dot == -1) return 0;
  
  str = str.slice(dot);
  return +str;
};

alert( getDecimal(112.555) );
alert( getDecimal(-1.2) );
alert( getDecimal(123) );
*/

//////////////////////////////////////////////////////////////////////////////////////

// Формула Бине

// Существует формула Бине, согласно которой Fn равно ближайшему целому для ϕn/√5, где ϕ=(1+√5)/2 – золотое сечение.

/*
function fibBinet(n) {
  var phi = (1 + Math.sqrt(5)) / 2;
  
  // используем Math.round для округления до ближайшего целого
  return Math.round(Math.pow(phi, n) / Math.sqrt(5));
};

function fib(n) {
  var a = 1,
    b = 0,
    x;
  for (i = 0; i < n; i++) {
    x = a + b;
    a = b
    b = x;
  }
  return b;
};

alert( fibBinet(2) ); // 1, равно fib(2)
alert( fibBinet(8) ); // 21, равно fib(8)
alert( fibBinet(77) ); // 5527939700884755
alert( fib(77) ); // 5527939700884757, не совпадает!
*/

/////////////////////////////////////////////////////////////////////////////////////

// Случайное из интервала (min, max)

// Напишите код для генерации случайного числа от min до max, не включая max.

/*
// Сгенерируем значение из интервала 0...max-min, а затем сдвинем на min:
var min = 5, max = 10;
alert( min + Math.random() * (max - min) );
*/

/////////////////////////////////////////////////////////////////////////////////////

// Напишите функцию randomInteger(min, max) для генерации случайного целого числа между min и max, включая min,max как возможные значения

/*
function randomInteger(min, max) {
  var rand = min + Math.random() * (( max + 1) - min);
  rand = Math.floor(rand);
  return rand;
};
randomInteger(1, 100);
*/

/* ВАРИАНТ 2
function randomNum(startNum, endNum) {
  return Math.floor(startNum + Math.random() * ((endNum + 1) - startNum));
}
randomNum(0, 100);
// Итог: случайное целое число в диапазоне включительно 0-100
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
Сделать первый символ заглавным

Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом, например:

ucFirst("вася") == "Вася";
ucFirst("") == ""; // нет ошибок при пустой строке

P.S. В JavaScript нет встроенного метода для этого. Создайте функцию, используя toUpperCase() и charAt().
*/

/*
var str = 'вася';

// вариант 1
function ucFirst(str) {
  if (str == '') return '';
  
  // вариант проверки из учебника
  // только пустая строка в логическом контексте даст false
  // if (!str) return str;
  
  return newStr = str[0].toUpperCase() + str.slice(1);
};

// вариант 2
function ucFirst(str) {
  // метод .charAt() всегда позвращает строку, даже если символа нет (строка пуста) - потому проверка на пустую строку не нужна :)
  return newStr = str.charAt(0).toUpperCase() + str.slice(1);
};

ucFirst('вася');
ucFirst('');
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
Проверьте спам

Напишите функцию checkSpam(str), которая возвращает true, если строка str содержит „viagra“ или „XXX“, а иначе false.
Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
*/

/*
function checkSpam(str) {
  str = str.toLowerCase();
  if (~str.indexOf('viagra') ||
      ~str.indexOf('xxx')) return true;
  
  // 2-й вариант проверки
  // if (str.indexOf('viagra') != -1 || str.indexOf('xxx') != -1) return true;
  
  return false;
  
  // вариант из учебника - логическое преобразование типа через !! (двойное отрицание)
  // return !!(~lowerStr.indexOf('viagra') || ~lowerStr.indexOf('xxx'));
};

checkSpam('buy ViAgRA now');
checkSpam('free xxxxx');
checkSpam('innocent rabbit');
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
Усечение строки

Создайте функцию truncate(str, maxlength), которая проверяет длину строки str, и если она превосходит maxlength – заменяет конец str на "...", так чтобы ее длина стала равна maxlength.
Результатом функции должна быть (при необходимости) усечённая строка.

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хоте..."
truncate("Всем привет!", 20) = "Всем привет!"
*/

/*
function truncate(str, maxlength) {
  if (str.length < maxlength) return str;
  
  // maxlength - 3 - это проправка на 3 символа-точки - '...'
  return str.slice(0, maxlength - 3) + '...';
};

// 2-й вариант для варианта из 2-х вариантов :)))
function truncate(str, maxlength) {
  // return (условие) ? вариант1 : вариант2 ;
  return (str.length < maxlength) ? str : str.slice(0, maxlength - 3) + '...';
};

truncate('Вот, что мне хотелось бы сказать на эту тему:', 20);
truncate('Всем привет!', 20);
*/

// в кодировке Unicode существует специальный символ «троеточие»: … (HTML: &hellip;) - он занимает всего места всего 1 символ!

/////////////////////////////////////////////////////////////////////////////////////

/*
Выделить число

Есть стоимость в виде строки: "$120". То есть, первым идёт знак валюты, а затем – число.
Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять число-значение, в данном случае 120.
*/

/*
function extractCurrencyValue(str) {
  return +str.slice(1);
};
extractCurrencyValue('$120');
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
Определите, пуст ли объект

Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.
*/

/*
function isEmpty(obj) {
  for (var key in obj) {
    key = obj[key];
  }
  return (key == undefined) ? true : false;
}

var schedule = {};
schedule["8:30"] = "подъём";

alert( isEmpty(schedule) );
*/

/* оригинал
function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
Сумма свойств

Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
Если объект пустой, то результат должен быть 0.
*/

/*
var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

function calcSum(obj) {
  var sum = 0;
  
  for (var key in obj) {
    sum += obj[key];
  }
  
  return sum;
}

calcSum(salaries);
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
Свойство с наибольшим значением

Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
Если объект пустой, то пусть он выводит «нет сотрудников».
*/

/*
var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

function findBig(obj) {
  var maxKey = 'нет сотрудников';
  var maxVal = 0;
  
  for (var key in obj) {
    if (maxVal < obj[key]) {
	  maxKey = key;
	  maxVal = obj[key];
	}
  }
   
  return maxKey + ': ' + maxVal;
}

findBig(salaries);
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
Умножьте численные свойства на 2

Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2
*/

/*
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function multiplyNumeric(obj) {
  for (var key in obj) {
    if (isNumeric(obj[key])) {
	  obj[key] *= 2;
	}
  }
}

var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

menu;
*/

/////////////////////////////////////////////////////////////////////////////////////

// Получить последний элемент массива

// Как получить последний элемент из произвольного массива?

/*
var arr = [];
var last = arr.length - 1;

arr[last] ||
arr[arr.length - 1];
*/

/////////////////////////////////////////////////////////////////////////////////////

// Добавить новый элемент в массив

// Как добавить элемент в конец произвольного массива?

/*
arr.push('comp'); ||
arr[arr.length] = 'comp';
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
Создание массива

Задача из 5 шагов-строк:
1. Создайте массив styles с элементами «Джаз», «Блюз».
2. Добавьте в конец значение «Рок-н-Ролл»
3. Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов любой длины.
4. Удалите первое значение массива и выведите его alert.
5. Добавьте в начало значения «Рэп» и «Регги».
*/

/*
var styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-Ролл');
styles[styles.length - 2] = 'Классика';
styles.shift();
styles.unshift('Рэп', 'Регги');
*/

/////////////////////////////////////////////////////////////////////////////////////

// Получить случайное значение из массива

// Напишите код для вывода alert случайного значения из массива

/*
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
var rand = Math.floor(Math.random() * arr.length);
arr[rand];
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
Создайте калькулятор для введённых значений

Напишите код, который:
- Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
- Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
- При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
- Выводит сумму всех значений массива
*/

/*
var arr = [];

while (true) {
  var num = prompt('введите число', 0);
  if (num === '' || isNaN(num) || num === null) break;
  arr.push(+num);
}

var sum = 0;

for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}

alert(sum);
*/

/////////////////////////////////////////////////////////////////////////////////////

// КОПИРОВАНИЕ МАССИВОВ

/*
var arr = [1, 2, 3];
var arr2 = [];

for (var i = 0; i < arr.length; i++) arr2[i] = arr[i];
*/

/*
var arr1 = [1, 2, 3];

function copyArr(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) newArr[i] = arr[i];
  return newArr;
}

var arr2 = copyArr(arr1);
arr2;
*/

/////////////////////////////////////////////////////////////////////////////////////

// КОПИРОВАНИЕ ОБЪЕКТОВ

/*
var obj1 = {
  // виды чисел
  num: 77,
  float: 123.456,
  zero: 0,
  // виды строк
  str: 'hello',
  emptyStr: '',
  // булевые
  bool: true,
  // обнуленные (undefined не буду использовать, чтоб не было путаницы)
  nullable: null,
  // виды массивов
  arrNum: [7, 8, 9],
  arrStr: ['a', 'b', 'c'],
  // вложенные объекты (со своими всем типами данных)
  insideObj: {
	name: 'Vasya',
    age: 25,
	money: [10, 20, 30],
	child: {name: 'Pit', age: 1},
	funcLevel2: function() {console.log('function level 2')}
  },
  // вложенные функции-методы
  funcLevel1: function() {console.log('function level 1')}
};

function copyObj(obj) {
  var newObj = {};
  for (var key in obj) newObj[key] = obj[key];
  return newObj;
}

var obj2 = copyObj(obj1);
obj2;
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
Поиск в массиве

Создайте функцию find(arr, value), которая ищет в массиве arr значение value и возвращает его номер, если найдено, или -1, если не найдено.
Например:
arr = ["test", 2, 1.5, false];
find(arr, "test"); // 0
find(arr, 2); // 1
find(arr, 1.5); // 2
find(arr, 0); // -1
*/

/*
arr1 = ["test", 2, 1.5, false];

function findInArr(arr, value) {
  var index = -1;
  for (var i = 0; i < arr.length; i++) {
    if (value === arr[i]) index = i;
  }
  return index;
}

findInArr(arr1, 'test');

// или тупо встроенным методом
arr1.indexOf('test');
*/

/* Проверка на наличие метода .indexOf()

function find(array, value) {
  if (array.indexOf) { // если метод существует т.е. если это именно массив, а не коллекция/псевдомассив
    return array.indexOf(value);
  }
  
  // если метода .indexOf() нет, то используем обычный итератор
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }

  return -1;
}
*/

/* Лучший метод - проверка на поддержку метода .indexOf() браузером

// если у массива есть .indexOf() т.е. этот метод видит браузер?
// то в переменную записываем функцию с методом .indexOf()
if ([].indexOf) {
  var find = function(array, value) {
    return array.indexOf(value);
  }

// иначе в переменную записываем функцию с обычным итератором
} else {
  var find = function(array, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === value) return i;
    }
    return -1;
  }
}
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
Фильтр диапазона

Создайте функцию filterRange(arr, a, b), которая принимает массив чисел arr и возвращает новый массив, который содержит только числа из arr из диапазона от a до b. То есть, проверка имеет вид a ≤ arr[i] ≤ b. 

var arr = [5, 4, 3, 8, 0];
var filtered = filterRange(arr, 3, 5);  // теперь filtered = [5, 4, 3]
*/

/*
var arr1 = [5, 4, 3, 8, 0];

function filterRange(arr, a, b) {
  var filterArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) filterArr.push(arr[i]);
  }
  return filterArr;
}

var filtered = filterRange(arr1, 3, 5);
filtered;
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
Решето Эратосфена

Целое число, большее 1, называется простым, если оно не делится нацело ни на какое другое, кроме себя и 1.
Древний алгоритм «Решето Эратосфена» для поиска всех простых чисел до n выглядит так:

Создать список последовательных чисел от 2 до n: 2, 3, 4, ..., n.
Пусть p=2, это первое простое число.
Зачеркнуть все последующие числа в списке с разницей в p, т.е. 2*p, 3*p, 4*p и т.д. В случае p=2 это будут 4,6,8....
Поменять значение p на первое не зачеркнутое число после p.
Повторить шаги 3-4 пока p2 < n.
Все оставшиеся не зачеркнутыми числа – простые.

Найдите все простые числа до 100 и выведите их сумму.
*/

/* Оригинал

// шаг 1
var arr = [];

for (var i = 2; i < 100; i++) {
  arr[i] = true
}

// шаг 2
var p = 2;

do {
  // шаг 3
  for (i = 2 * p; i < 100; i += p) {
    arr[i] = false;
  }

  // шаг 4
  for (i = p + 1; i < 100; i++) {
    if (arr[i]) break;
  }

  p = i;
} while (p * p < 100); // шаг 5

// шаг 6 (готово)
// посчитать сумму
var sum = 0;
for (i = 0; i < arr.length; i++) {
  if (arr[i]) {
    sum += i;
  }
}

alert( sum );  // 1060
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
Подмассив наибольшей суммы

На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
Задача – найти непрерывный подмассив arr, сумма элементов которого максимальна.
Ваша функция должна возвращать только эту сумму.
Например:

getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
getMaxSubSum([2, -1, 2, 3, -9]) = 6
getMaxSubSum([-1, 2, 3, -9, 11]) = 11
getMaxSubSum([-2, -1, 1, 2]) = 3
getMaxSubSum([100, -9, 2, -3, 5]) = 100
getMaxSubSum([1, 2, 3]) = 6 (неотрицательные - берем всех)

Если все элементы отрицательные, то не берём ни одного элемента и считаем сумму равной нулю:

getMaxSubSum([-1, -2, -3]) = 0

Постарайтесь придумать решение, которое работает за O(n2), а лучше за O(n) операций.
*/

/* работает неверно - суммирует все подряд положительные

function getMaxSubSum(arr) {
  var sum = 0;
  for (i = 0; i < arr.length; i++) {
    var temp = arr[i];
	if (temp < 0 || temp < arr[i]) continue;
	sum += temp;
  }
  return sum;
}

getMaxSubSum([1, 2, 3]);
*/

/* оригинал 1 - тормознутое вычисление через вложенный цикл

function getMaxSubSum(arr) {
  var maxSum = 0; // если совсем не брать элементов, то сумма 0

  for (var i = 0; i < arr.length; i++) {
    var sumFixedStart = 0;
    for (var j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}
*/

/*
Подсказка (быстрое решение)

Будем идти по массиву и накапливать в некоторой переменной s текущую частичную сумму. Если в какой-то момент s окажется отрицательной, то мы просто присвоим s=0. Утверждается, что максимум из всех значений переменной s, случившихся за время работы, и будет ответом на задачу.

Докажем этот алгоритм.

В самом деле, рассмотрим первый момент времени, когда сумма s стала отрицательной. Это означает, что, стартовав с нулевой частичной суммы, мы в итоге пришли к отрицательной частичной сумме – значит, и весь этот префикс массива, равно как и любой его суффикс имеют отрицательную сумму.
Следовательно, от всего этого префикса массива в дальнейшем не может быть никакой пользы: он может дать только отрицательную прибавку к ответу.
*/

/* оригинал 2 - быстрый проход в 1 цикл

function getMaxSubSum(arr) {
  var maxSum = 0,
      partialSum = 0;
  
  for (var i = 0; i < arr.length; i++) {
    partialSum += arr[i];
    maxSum = Math.max(maxSum, partialSum);
    
	if (partialSum < 0) partialSum = 0;
  }
  
  return maxSum;
}
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
Добавить класс в строку

В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом:

var obj = {
  className: 'open menu'
}

Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет:

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'
*/

/*
var obj1 = {
  className: 'open menu'
};

function addClass(obj, cls) {
  var str = '',
      arr = [];
  
  for (var key in obj) {
    str = obj[key];
  }
  
  arr = str.split(' ');
  
  if(arr.indexOf(cls) == -1) {
    arr.push(cls);
  }
  
  str = arr.join(' ');

  return obj[key] = str;
}

addClass(obj1, 'new');
*/

/* оригинал
function addClass(obj, cls) {
  var classes = obj.className ? obj.className.split(' ') : [];

  for (var i = 0; i < classes.length; i++) {
    if (classes[i] == cls) return; // класс уже есть
  }

  classes.push(cls); // добавить

  obj.className = classes.join(' '); // и обновить свойство
}
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
Перевести текст вида border-left-width в borderLeftWidth

Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
То есть, дефисы удаляются, а все слова после них получают заглавную букву.

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

Такая функция полезна при работе с CSS.
P.S. Вам пригодятся методы строк charAt, split и toUpperCase.
*/

/*
function camelize(str) {
  var arr = [],
      charBig = '',
	  word = '';
  
  if (str.charAt(0) === '-') str = str.slice(1);
  
  arr = str.toLowerCase().split('-');
  
  for (var i = 1; i < arr.length; i++) {
    charBig = arr[i].charAt(0).toUpperCase();
	word = arr[i];
	word = charBig + word.slice(1);
	arr[i] = word;
  }
  
  return arr.join('');
}

camelize('-WebKit-TranSitioN');
*/

/* оригинал
function camelize(str) {
  var arr = str.split('-');

  for (var i = 1; i < arr.length; i++) {
    // преобразовать: первый символ с большой буквы
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  return arr.join('');
}
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
Функция removeClass

У объекта есть свойство className, которое хранит список «классов» – слов, разделенных пробелами:

var obj = {
  className: 'open menu'
};

Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:

removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений (нет такого класса)

P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:

obj = {
  className: 'my menu menu'
};

removeClass(obj, 'menu');
alert( obj.className ); // 'my'

Лишних пробелов после функции образовываться не должно.
*/

/*
var obj1 = {
  className: 'my open menu menu'
};

function removeClass(obj, cls) {
  var str = '',
      arr = [];
  
  for (var key in obj) {
    str = obj[key];
  }
  
  arr = str.split(' ');
  
  for (var i = 0; i < arr.length; i++) {
    if (cls === arr[i]) {
      arr.splice(i, 1);
	  i--;
	}
  }
  
  str = arr.join(' ');

  return obj[key] = str;
}

removeClass(obj1, 'menu');
obj1;
*/

/* оригинал

function removeClass(obj, cls) {
  var classes = obj.className.split(' ');

  for (var i = 0; i < classes.length; i++) {
    if (classes[i] == cls) {
      classes.splice(i, 1); // удалить класс
      i--; // (*)
    }
  }
  obj.className = classes.join(' ');

}
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
Фильтрация массива "на месте"

Создайте функцию filterRangeInPlace(arr, a, b), которая получает массив с числами arr и удаляет из него все числа вне диапазона a..b. То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция должна менять сам массив и ничего не возвращать.

arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
alert( arr ); // массив изменился: остались [3, 1]
*/

/*
var arr1 = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
	  arr.splice(i, 1);
	  i--;
	}
  }
}

filterRangeInPlace(arr1, 1, 4);
arr1;
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
Сортировать в обратном порядке

Как отсортировать массив чисел в обратном порядке?

var arr = [5, 2, 1, -10, 8];
// отсортируйте?
alert( arr ); // 8, 5, 2, 1, -10
*/

/*
var arr = [5, 2, 1, -10, 8];

function toBig(a, b) {
  return a - b;
}

function toSmall(a, b) {
  return b - a;
}

arr.sort(toBig);
arr;
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
Скопировать и отсортировать массив

Есть массив строк arr. Создайте массив arrSorted – из тех же элементов, но отсортированный.
Исходный массив не должен меняться.

var arr = ["HTML", "JavaScript", "CSS"];
// ... ваш код ...
alert( arrSorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)

Постарайтесь сделать код как можно короче.
*/

/*
var arr1 = ["HTML", "JavaScript", "CSS"];
var arrSorted = arr.slice().sort();
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
Случайный порядок в массиве

Используйте функцию sort для того, чтобы «перетрясти» элементы массива в случайном порядке.

var arr = [1, 2, 3, 4, 5];
arr.sort(ваша функция);
alert( arr ); // элементы в случайном порядке, например [3,5,1,2,4]
*/

/*
var arr = [1, 2, 3, 4, 5];

function toRandom(a, b) {
  return Math.random() - 0.5;
}

arr.sort(toRandom);
arr;
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
Сортировка объектов

Напишите код, который отсортирует массив объектов people по полю age.

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];
... ваш код ...
// теперь people: [vovochka, masha, vasya]
alert(people[0].age) // 6

Выведите список имён в массиве после сортировки.
*/

/*
var vasya = {name: "Вася", age: 23};
var masha = {name: "Маша", age: 18};
var vovochka = {name: "Вовочка", age: 6};

var people = [vasya ,masha ,vovochka];

function byAge(a, b) {
  return a.age - b.age;
}

people.sort(byAge);
people;
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
Вывести односвязный список

Односвязный список – это структура данных, которая состоит из элементов, каждый из которых хранит ссылку на следующий. Последний элемент может не иметь ссылки, либо она равна null.
Например, объект ниже задаёт односвязный список, в next хранится ссылка на следующий элемент:

var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

Альтернативный способ создания:

var list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
*/

/*
var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
*/

// Прямая циклическая

/*
function printList(list) {
  var tmp = list;
  
  while(tmp != null) {
    console.log(tmp.value);
	tmp = tmp.next;
  }
}

printList(list);

// или Прямая циклическая - вариант 2

function printList(list) {
  while(list) {
    alert( list.value );
    list = list.next;
  }
}

printList(list);
*/

// Прямая рекурсивная

/*
function printListRec(list) {
  console.log(list.value);
  
  if (list.next) printListRec(list.next);
}

printListRec(list);
*/

// Обратная рекурсивная

/*
function printListRecReverse(list) {
  if (list.next) printListRec(list.next);
  
  console.log(list.value);
}

printListRecReverse(list);
*/

// Обратный вывод с помощью цикла

/*
function printListReverse(list) {
  var tmp = list,
      arr = [];
  
  while(tmp != null) {
    arr.push(tmp.value);
	tmp = tmp.next;
  }
  
  for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
  
  //альтернанивный вариант обратной итерации по массиву
  //for (var i = 0; i < arr.length; i++) { console.log(arr[arr.length - 1 - i]); }
}

printListReverse(list);
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
Оставить уникальные элементы массива

Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
Например:

var strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", "8-()"];
alert( unique(strings) ); // кришна, харе, 8-()
*/

/* вариант 1
var strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", "8-()"];

function unique(arr) {
  var obj = {},
      word = '',
	  result = [];
  
  for (var i = 0; i < arr.length; i++) {
    word = arr[i];
	obj[word] = arr[i];
  }
  
  for (var key in obj) result.push(obj[key]);
  
  return result
}

unique(strings);
*/

/*
function unique(arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) obj[arr[i]] = true;
  return Object.keys(obj)
}
unique(strings);
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
Перепишите цикл через map

Код ниже получает из массива строк новый массив, содержащий их длины:

var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = [];
for (var i = 0; i < arr.length; i++) {
  arrLength[i] = arr[i].length;
}

alert( arrLength ); // 4,5,2,5

Перепишите выделенный участок: уберите цикл, используйте вместо него метод map.
*/

/*
var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = arr.map(function(item) {
  return item.length;
});

arrLength;
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
Массив частичных сумм

Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.
Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов, в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.

для arr = [ 1, 2, 3, 4, 5 ]
getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
*/

/*
var arr1 = [1, 2, 3, 4, 5];

function getSums(arr) {
  var result = [],
      finSum = 0;
  
  finSum = arr.reduce(function(a, b) {
    result.push(a);
	return a + b;
  });
  result.push(finSum);
  
  return result;
}

getSums(arr1);
*/

/* оригинал

function getSums(arr) {
  var result = [];
  
  // !!! зачем это условие дополнительно ???
  if (!arr.length) return result;

  var totalSum = arr.reduce(function(sum, item) {
    result.push(sum);
    return sum + item;
  });
  result.push(totalSum);

  return result;
}
*/

/* вот хорошее решение :)

function getSums(arr) {
  var newarr = [];
  
  arr.reduce(function(f1, current) {
    f1 = f1 + current;
    newarr.push(f1);
    return f1;
  }, 0);
  
  return newarr;
}
*/

/////////////////////////////////////////////////////////////////////////////////////

/* Проверка на аргумент-undefined

Как в функции отличить отсутствующий аргумент от undefined?

function f(x) {
  // ..ваш код..
  // выведите 1, если первый аргумент есть, и 0 - если нет
}
f(undefined); // 1
f(); // 0
*/

/*
function f(x) {
  return arguments.length ? 1 : 0;
}

f(undefined);
f();
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
Сумма аргументов

Напишите функцию sum(...), которая возвращает сумму всех своих аргументов:

sum() = 0
sum(1) = 1
sum(1, 2) = 3
sum(1, 2, 3) = 6
sum(1, 2, 3, 4) = 10
*/

/*
function sumNumArgs() {
  var result = 0;
  
  for (var i = 0; i < arguments.length; i++) result += arguments[i];
  
  return result;
}
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
Создайте дату

Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут.
Временная зона – местная. Выведите его на экран.
*/

/*
var date = new Date(2012, 1, 20, 3, 12, 0, 0);
date;
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
Имя дня недели

Создайте функцию getWeekDay(date), которая выводит текущий день недели в коротком формате „пн“, „вт“, … „вс“.

var date = new Date(2012,0,3);  // 3 января 2012
alert( getWeekDay(date) );      // Должно вывести 'вт'
*/

/* метод старый

var date = new Date(2012, 0, 3);

function getWeekDay(date) {
  var weekArr = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
  return weekArr[date.getDay()];
}

getWeekDay(date);
*/

// во всех браузерах встроен объект-настройки для даты, выглятит он так

/*
var options = {
  era: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  timezone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};
*/

// настройки-значения этого объекта можно менять напрямую в вызове метода .toLocaleString()
// поддержка IE11+

/**
 * @param {string} (варианты: 'ru', 'en-US' и т.д.)
 * @param {Object} options (этот объект встроен в любой современный браузер)
 * @return {string}
 */

// .toLocaleString('local', options)

/* метод новый :)

var date = new Date(2016, 2, 8);
date.toLocaleString('ru', {weekday: 'short'});
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
День недели в европейской нумерации

Напишите функцию, getLocalDay(date) которая возвращает день недели для даты date.
День нужно возвратить в европейской нумерации, т.е. понедельник имеет номер 1, вторник номер 2, …, воскресенье – номер 7.

var date = new Date(2012, 0, 3);  // 3 янв 2012
alert( getLocalDay(date) );       // вторник, выведет 2
*/

/*
var date = new Date(2012, 0, 3);

function getLocalDay(date) {
  var weekDay = date.getDay();
  
  if (weekDay == 0) weekDay = 7;
  
  return weekDay;
}

getLocalDay(date);
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
День указанное количество дней назад

Создайте функцию getDateAgo(date, days), которая возвращает число, которое было days дней назад от даты date.
Например, для 2 января 2015:

var date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 января 2015)
alert( getDateAgo(date, 2) ); // 31, (31 декабря 2014)
alert( getDateAgo(date, 365) ); // 2, (2 января 2014)

P.S. Важная деталь: в процессе вычислений функция не должна менять переданный ей объект date.
*/

/*
var date = new Date(2015, 0, 2);

function getDateAgo(date, days) {
  var dateAgo = new Date(date);
  
  dateAgo.setDate(date.getDate() - days);
  
  return dateAgo;
}

getDateAgo(date, 1);
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
Последний день месяца?

Напишите функцию getLastDayOfMonth(year, month), которая возвращает последний день месяца.
year – 4-значный год, например 2012.
month – месяц от 0 до 11.

getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
*/

/*
function getLastDayOfMonth(year, month) {
  var date = new Date(year, month + 1, 0);
  return date.getDate();
}

getLastDayOfMonth(2012, 1);
*/

// или чтобы вводить месяца "по-нормальному", типа февраль - 2-й месяц

/*
function getLastDayOfMonth(year, month) {
  var date = new Date(year, month, 0);
  return date.getDate();
}

getLastDayOfMonth(2012, 2);
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
Сколько секунд уже прошло сегодня?

Напишите функцию getSecondsToday() которая возвращает, сколько секунд прошло с начала сегодняшнего дня.
Например, если сейчас 10:00 и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)

Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/

/* вариант 1

function getSecondsToday() {
  var date = new Date(),
      zeroDate = new Date(date),
	  result = 0;
  
  zeroDate.setHours(0, 0, 0, 0);
  result = Math.round((date - zeroDate) / 1000);
  
  return result;
}

getSecondsToday();
*/

/* вариант 2

function getSecondsToday() {
  var date = new Date();
  return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}

getSecondsToday();
*/

/* оригинал

function getSecondsToday() {
  var now = new Date();

  // создать объект из текущей даты, без часов-минут-секунд
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  var diff = now - today; // разница в миллисекундах
  return Math.floor(diff / 1000); // перевести в секунды
}
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
Сколько секунд - до завтра?

Напишите функцию getSecondsToTomorrow() которая возвращает, сколько секунд осталось до завтра.
Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600

P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/

/*
function getSecondsToTomorrow() {
  var date = new Date(),
      zero = new Date(date);
	  
  zero.setDate(date.getDate() + 1);
  zero.setHours(0, 0, 0, 0);
  
  return Math.round((zero - date) / 1000);
}

getSecondsToTomorrow();
*/

/* оригинал

function getSecondsToTomorrow() {
  var now = new Date();

  // создать объект из завтрашней даты, без часов-минут-секунд
  var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

  var diff = tomorrow - now; // разница в миллисекундах
  return Math.round(diff / 1000); // перевести в секунды
}
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
Вывести дату в формате дд.мм.гг

Напишите функцию formatDate(date), которая выводит дату date в формате дд.мм.гг:

var d = new Date(2014, 0, 30); // 30 января 2014
alert( formatDate(d) ); // '30.01.14'

P.S. Обратите внимание, ведущие нули должны присутствовать, то есть 1 января 2001 должно быть 01.01.01, а не 1.1.1.
*/

/* вариант 1

var d = new Date(2014, 0, 30);

function formatDate(date) {
  var day = '' + date.getDate(),
      month = '' + (date.getMonth() + 1),
	  year = '' + date.getFullYear(),
	  delim = '.';
  
  if (day.length < 2) day = '0' + day;
  if (month.length < 2) month = '0' + month;
  year = year.slice(2);
  
  return day + delim + month + delim + year;
}

formatDate(d);
*/

/* вариант 2

var d = new Date(2014, 0, 30);

function formatDate(date) {
  var day = '' + date.getDate(),
      month = '' + (date.getMonth() + 1),
	  year = '' + date.getFullYear(),
	  arr = [];
  
  if (day.length < 2) day = '0' + day;
  if (month.length < 2) month = '0' + month;
  year = year.slice(2);
  arr.push(day, month, year);
  
  return arr.join('.');
}

formatDate(d);
*/

/* оригинал

function formatDate(date) {

  var dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  var mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  var yy = date.getFullYear() % 100;
  if (yy < 10) yy = '0' + yy;

  return dd + '.' + mm + '.' + yy;
}
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
Относительное форматирование даты

Напишите функцию formatDate(date), которая форматирует дату date так:

Если со времени date прошло менее секунды, то возвращает "только что".
Иначе если со времени date прошло менее минуты, то "n сек. назад".
Иначе если прошло меньше часа, то "m мин. назад".
Иначе полная дата в формате "дд.мм.гг чч:мм".

function formatDate(date) { ваш код }

alert( formatDate(new Date(new Date - 1)) ); // "только что"
alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
alert( formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата в формате "дд.мм.гг чч:мм"
*/

function formatDate(date) {
  var dif = new Date() - date,
	  sec = Math.round(dif / 1000),
	  min = Math.round(dif / 60000);
	  
  if (dif < 1000) return 'только что';
  if (sec < 60) return sec + ' сек. назад';
  if (min < 60) return min + ' мин. назад';
  
  var arr = [
    '0' + date.getDate(),
    '0' + (date.getMonth() + 1),
    '0' + date.getFullYear(),
	'0' + date.getHours(),
	'0' + date.getMinutes()
  ];
  
  for (var i = 0; i < arr.length; i++) arr[i] = arr[i].slice(-2);
  
  return arr.slice(0, 3).join('.') + ' ' + arr.slice(3).join(':');
}

formatDate(new Date(new Date - 86400 * 1000));
