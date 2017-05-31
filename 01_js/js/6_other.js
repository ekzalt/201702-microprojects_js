'use strict';

//////////////////////////////////////////////////////////////////////////////////////

/*
Полиморфная функция formatDate

Напишите функцию formatDate(date), которая возвращает дату в формате dd.mm.yy.
Ее первый аргумент должен содержать дату в одном из видов:
- Как объект Date.
- Как строку, например yyyy-mm-dd или другую в стандартном формате даты.
- Как число секунд с 01.01.1970.
- Как массив [гггг, мм, дд], месяц начинается с нуля
Для этого вам понадобится определить тип данных аргумента и, при необходимости, преобразовать входные данные в нужный формат.

function formatDate(date) { // ваш код  }

alert( formatDate('2011-10-02') ); // 02.10.11
alert( formatDate(1234567890) ); // 14.02.09
alert( formatDate([2014, 0, 1]) ); // 01.01.14
alert( formatDate(new Date(2014, 0, 1)) ); // 01.01.14
 */

/*
function getClass(obj) {
  return {}.toString.call(obj).slice(8, -1);
}

function formatDate(date) {
  var dd, mm, yy;
  
  // если аргумент - объект Date
  if (getClass(date) === 'Date') {
    if (date.getDate() < 10) {
      dd = '0' + date.getDate();
    } else {
      dd = date.getDate();
    }

    if (date.getMonth() < 9) {
      mm = '0' + (date.getMonth() + 1);
    } else {
      mm = date.getMonth() + 1;
    }

    yy = '' + date.getFullYear();

    return dd + '.' + mm + '.' + yy.slice(2);
  
  // если аргумент - строка
  } else if (getClass(date) === 'String') {
    var arrStr = date.split('-');
    
    return arrStr[2] + '.' + arrStr[1] + '.' + arrStr[0].slice(2);
  
  // если аргумент - число секунд
  } else if (getClass(date) === 'Number') {
    var ms = new Date(date * 1000);

    if (ms.getDate() < 10) {
      dd = '0' + ms.getDate();
    } else {
      dd = ms.getDate();
    }

    if (ms.getMonth() < 9) {
      mm = '0' + (ms.getMonth() + 1);
    } else {
      mm = ms.getMonth() + 1;
    }

    yy = '' + ms.getFullYear();

    return dd + '.' + mm + '.' + yy.slice(2);
  
  // если аргумент - массив чисел
  } else if (getClass(date) === 'Array') {
    if (date[2] < 10) {
      dd = '0' + date[2];
    } else {
      dd = date[2];
    }

    if (date[1] < 9) {
      mm = '0' + (date[1] + 1);
    } else {
      mm = date[1] + 1;
    }

    yy = '' + date[0];
    
    return dd + '.' + mm + '.' + yy.slice(2);
  }
}

formatDate('2011-10-02');
formatDate(1234567890);
formatDate([2014, 0, 1]);
formatDate(new Date(2014, 0, 1));
*/

/*
// Оригинал
function formatDate(date) {
  if (typeof date == 'number') {
    // перевести секунды в миллисекунды и преобразовать к Date
    date = new Date(date * 1000);
  } else if (typeof date == 'string') {
    // строка в стандартном формате автоматически будет разобрана в дату
    date = new Date(date);
  } else if (Array.isArray(date)) {
    date = new Date(date[0], date[1], date[2]);
  } else {
    return 'Неверный формат даты';
  }
  // преобразования для поддержки полиморфизма завершены, 
  // теперь мы работаем с датой (форматируем её)

  return date.toLocaleString("ru", {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit'
  });


  // // можно и вручную, если лень добавлять в старый IE поддержку локализации
  // var day = date.getDate();
  // if (day < 10) day = '0' + day;
    
  // var month = date.getMonth() + 1;
  // if (month < 10) month = '0' + month;
    
  // // взять 2 последние цифры года
  // var year = date.getFullYear() % 100;
  // if (year < 10) year = '0' + year;
    
  // var formattedDate = day + '.' + month + '.' + year;
      
  // return formattedDate;

}
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Превратите объект в JSON

Превратите объект leader из примера ниже в JSON:

var leader = {
  name: "Василий Иванович",
  age: 35
};

После этого прочитайте получившуюся строку обратно в объект.
 */

/*
var leader = {
  name: "Василий Иванович",
  age: 35
};

var str = JSON.stringify(leader);

var leader2 = JSON.parse(str);
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Превратите объекты со ссылками в JSON

Превратите объект team из примера ниже в JSON:

var leader = {
  name: "Василий Иванович"
};

var soldier = {
  name: "Петька"
};

// эти объекты ссылаются друг на друга!
leader.soldier = soldier;
soldier.leader = leader;

var team = [leader, soldier];

1) Может ли это сделать прямой вызов JSON.stringify(team)? Если нет, то почему?
2) Какой подход вы бы предложили для чтения и восстановления таких объектов?
 */

/*
var leader = {
  name: "Василий Иванович",
  id: 21
};

var soldier = {
  name: "Петька",
  id: 12
};

leader.soldierId = 12;
soldier.leaderId = 21;

var team = {
  21: leader, 
  12: soldier
};

var str = JSON.stringify(team);
*/

/*
Универсальный вариант - использование особой реализации JSON, которая не входит в стандарт и поддерживает расширенный формат для поддержки ссылок.
Она, к примеру, есть во фреймворке Dojo.

При вызове: 

dojox.json.ref.toJson(team) 

будет создано следующее строковое представление:

[{"name":"Василий Иванович","soldier":{"name":"Петька","leader":{"$ref":"#0"}}},{"$ref":"#0.soldier"}]

Метод разбора такой строки – также свой: 

dojox.json.ref.fromJson
 */

//////////////////////////////////////////////////////////////////////////////////////

/*
Вывод чисел каждые 100 мс

Напишите функцию printNumbersInterval(), которая последовательно выводит в консоль числа от 1 до 20, с интервалом между числами 100 мс. То есть, весь вывод должен занимать 2000 мс, в течение которых каждые 100 мс в консоли появляется очередное число.
P.S. Функция должна использовать setInterval.
 */

/*
// Вариант 1
function printNumbersInterval() {
  var x = 1;

  var idInt = setInterval(function() {
    console.log(x++);
  }, 100);

  var idSet = setTimeout(function() {
    clearInterval(idInt);
  }, 2000);
}

printNumbersInterval();
*/


/*
// Вариант 2
function printNumbersInterval() {
  var i = 1;
  var timerId = setInterval(function() {
    console.log(i);
    if (i == 20) clearInterval(timerId);
    i++;
  }, 100);
}
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Вывод чисел каждые 100 мс, через setTimeout

Сделайте то же самое, что в задаче Вывод чисел каждые 100 мс, но с использованием рекурсивного setTimeout вместо setInterval.
 */

/*
// Вариант 1
function printNumbersInterval() {
  var i = 1;

  var timerId = setTimeout(function print() {
    console.log(i);
    timerId = setTimeout(print, 100);
    if (i === 20) clearTimeout(timerId);
    i++;
  }, 100);
}

printNumbersInterval();
*/

/*
// Вариант 2
function printNumbersTimeout20_100() {
  var i = 1;
  var timerId = setTimeout(function go() {
    console.log(i);
    if (i < 20) setTimeout(go, 100);
    i++;
  }, 100);
}
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Для подсветки setInterval или setTimeout?

Стоит задача: реализовать подсветку синтаксиса в длинном коде при помощи JavaScript, для онлайн-редактора кода. Это требует сложных вычислений, особенно загружает процессор генерация дополнительных элементов страницы, визуально осуществляющих подсветку.
Поэтому решаем обрабатывать не весь код сразу, что привело бы к зависанию скрипта, а разбить работу на части: подсвечивать по 20 строк раз в 10 мс.
Как мы знаем, есть два варианта реализации такой подсветки:

Через setInterval, с остановкой по окончании работы:

timer = setInterval(function() {
  if (есть еще что подсветить) highlight();
  else clearInterval(timer);
}, 10);

Через рекурсивный setTimeout:

setTimeout(function go() {
  highlight();
  if (есть еще что подсветить) setTimeout(go, 10);
}, 10);

Какой из них стоит использовать? Почему?
 */

/*
// Вариант 2
setTimeout(function go() {
  highlight();
  if (есть еще что подсветить) setTimeout(go, 10);
}, 10);
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Функция-задержка

Напишите функцию delay(f, ms), которая возвращает обёртку вокруг f, задерживающую вызов на ms миллисекунд.

function f(x) {
  alert( x );
}

var f1000 = delay(f, 1000);
var f1500 = delay(f, 1500);

f1000("тест"); // выведет "тест" через 1000 миллисекунд
f1500("тест2"); // выведет "тест2" через 1500 миллисекунд

Упрощённо можно сказать, что delay возвращает "задержанный на ms" вариант f.
В примере выше у функции только один аргумент, но delay должна быть универсальной: передавать любое количество аргументов и контекст this.
 */

/*
function f(x) {
  alert(x);
}

function delay(f, ms) {
  return function() {
    // нужно вынести "контекст" и "аргументы" из "анонимки" в setTimeout наружу. Иначе будет undefined
    var argThis = this,
        argArgs = arguments,
        timer = setTimeout(function() {
      f.apply(argThis, argArgs);
    }, ms);
  }
}

var f1000 = delay(f, 1000);
var f1500 = delay(f, 1500);

f1000("тест");
f1500("тест2");
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Вызов не чаще чем в N миллисекунд

Напишите функцию debounce(f, ms), которая возвращает обёртку, которая передаёт вызов f не чаще, чем раз в ms миллисекунд.
«Лишние» вызовы игнорируются. Все аргументы и контекст – передаются.

function f() { ... }

var f = debounce(f, 1000);

f(1); // выполнится сразу же
f(2); // игнор

setTimeout( function() { f(3) }, 100); // игнор (прошло только 100 мс)
setTimeout( function() { f(4) }, 1100); // выполнится
setTimeout( function() { f(5) }, 1500); // игнор

Упрощённо можно сказать, что debounce возвращает вариант f, срабатывающий не чаще чем раз в ms миллисекунд.
 */

/*
function debounce(f, ms) {
  var state = null;
  var COOLDOWN = 1;

  return function() {
    if (state) return;

    f.apply(this, arguments);

    state = COOLDOWN;

    setTimeout(function() { state = null; }, ms);
  }
}

function f(x) { alert(x); }

var f = debounce(f, 1000);

f(1);
f(2);

setTimeout( function() { f(3); }, 100);
setTimeout( function() { f(4); }, 1100);
setTimeout( function() { f(5); }, 1500);
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Тормозилка

Напишите функцию throttle(f, ms) – «тормозилку», которая возвращает обёртку, передающую вызов f не чаще, чем раз в ms миллисекунд.
У этой функции должно быть важное существенное отличие от debounce: если игнорируемый вызов оказался последним, т.е. после него до окончания задержки ничего нет – то он выполнится.
 
var f = function(a) {
  console.log(a)
};

// затормозить функцию до одного раза в 1000 мс
var f1000 = throttle(f, 1000);

f1000(1); // выведет 1
f1000(2); // (тормозим, не прошло 1000 мс)
f1000(3); // (тормозим, не прошло 1000 мс)

// когда пройдёт 1000 мс...
// выведет 3, промежуточное значение 2 игнорируется
 */

/*
var f = function(a) {
  console.log(a)
};

function throttle(f, ms) {
  var freez = false,
      argThis,
      argArgs;

  function wrapper() {
    if (freez) {
      argThis = this;
      argArgs = arguments;
      return;
    }

    f.apply(this, arguments);

    freez = true;

    setTimeout(function() {
      freez = false;
      
      if (argArgs) {
        // f.apply(argThis, argArgs);

        // рекурсивный вызов создает систему "вызов-пауза"
        wrapper.apply(argThis, argArgs);
        
        argThis = null;
        argArgs = null;
      }
    }, ms);
  }
  return wrapper;
}

var f1000 = throttle(f, 1000);

f1000(1);
f1000(2);
f1000(3);
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Eval-калькулятор

Напишите интерфейс, который принимает математическое выражение (prompt) и возвращает его результат.
Проверять выражение на корректность не требуется.
 */

/*
function calc() {
  var str = prompt('Введите выражение', '2+2*2');
  alert(eval(str));
}
calc();
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Eval-калькулятор с ошибками

Напишите интерфейс, который принимает математическое выражение (в prompt) и результат его вычисления через eval.
При ошибке нужно выводить сообщение и просить переввести выражение.
Ошибкой считается не только некорректное выражение, такое как 2+, но и выражение, возвращающее NaN, например 0/0.
 */

function calc() {
  var expr, res;

  while (true) {
    expr = prompt("Введите выражение?", '2-');
    if (expr == null) break;

    try {
      res = eval(expr);
      if (isNaN(res)) {
        throw new Error("Результат неопределён");
      }
      break;
      
    } catch (e) {
      alert("Ошибка: " + e.message + ", повторите ввод");
    }
  }
  return res;
}

calc();

































