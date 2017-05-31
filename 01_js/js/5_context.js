'use strict';

//////////////////////////////////////////////////////////////////////////////////////

/*
Создайте калькулятор

Создайте объект calculator с тремя методами:
read() запрашивает prompt два значения и сохраняет их как свойства объекта
sum() возвращает сумму этих двух значений
mul() возвращает произведение этих двух значений

var calculator = {
  ...ваш код...
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

/*
var calculator = {
  read: function() {
    this.n1 = +prompt('выберите первое число', 0);
  this.n2 = +prompt('выберите второе число', 0);
  },
  
  sum: function() {
    return this.n1 + this.n2;
  },
  
  mul: function() {
    return this.n1 * this.n2;
  }
};

calculator.read();
calculator.sum();
calculator.mul();
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Цепочка вызовов

Есть объект «лестница» ladder:

var ladder = {
  step: 0,
  up: function() { // вверх по лестнице
    this.step++;
  },
  down: function() { // вниз по лестнице
    this.step--;
  },
  showStep: function() { // вывести текущую ступеньку
    alert( this.step );
  }
};

Сейчас, если нужно последовательно вызвать несколько методов объекта, это можно сделать так:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

Модифицируйте код методов объекта, чтобы вызовы можно было делать цепочкой, вот так:

ladder.up().up().down().up().down().showStep(); // 1

Как видно, такая запись содержит «меньше букв» и может быть более наглядной.
Такой подход называется «чейнинг» (chaining) и используется, например, во фреймворке jQuery.
*/

/*
var ladder = {
  step: 0,
  
  up: function() {
    this.step++;
  return this;
  },
  
  down: function() {
    this.step--;
  return this;
  },
  
  showStep: function() {
    alert( this.step );
  return this;
  }
};

ladder.up().up().down().up().down().showStep();
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Сумма произвольного количества скобок

Напишите функцию sum, которая будет работать так:

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15

Количество скобок может быть любым.
*/

/*
function sum(a) {
  var tmp = a;
  
  function inner(b) {
    tmp += b;
  return inner;
  }
  
  inner.toString = function() {
    return tmp;
  }
  
  return inner;
}
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Напишите функцию-конструктор Calculator, которая создает объект с тремя методами:
Метод read() запрашивает два значения при помощи prompt и запоминает их в свойствах объекта.
Метод sum() возвращает сумму запомненных свойств.
Метод mul() возвращает произведение запомненных свойств.

var calculator = new Calculator();
calculator.read();
alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );
*/

/*
function Calculator() {
  this.read = function() {
    this.a = +prompt('a?', 0);
  this.b = +prompt('b?', 0);
  }
  
  this.sum = function() {
    return this.a + this.b;
  }
  
  this.mul = function() {
    return this.a * this.b;
  }
}

var calc = new Calculator();
calc.read();
calc.sum();
calc.mul();
calc;
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Создать Accumulator при помощи конструктора

Напишите функцию-конструктор Accumulator(startingValue). Объекты, которые она создает, должны хранить текущую сумму и прибавлять к ней то, что вводит посетитель.
Более формально, объект должен:
- Хранить текущее значение в своём свойстве value. Начальное значение свойства value ставится конструктором равным startingValue.
- Метод read() вызывает prompt, принимает число и прибавляет его к свойству value.
Таким образом, свойство value является текущей суммой всего, что ввел посетитель при вызовах метода read(), с учетом начального значения startingValue.

var accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
alert( accumulator.value ); // выведет текущее значение
*/

/*
function Accumulator(a) {
  this.value = a;
  
  this.read = function() {
    this.value += +prompt('more?', 0);
  }
}

var acc = new Accumulator(1);
acc.read();
acc.read();
acc.value;
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Создайте калькулятор

Напишите конструктор Calculator, который создаёт расширяемые объекты-калькуляторы.
Эта задача состоит из двух частей, которые можно решать одна за другой.
Первый шаг задачи: вызов calculate(str) принимает строку, например «1 + 2», с жёстко заданным форматом «ЧИСЛО операция ЧИСЛО» (по одному пробелу вокруг операции), и возвращает результат. Понимает плюс + и минус -.

var calc = new Calculator;
alert( calc.calculate("3 + 7") ); // 10

Второй шаг – добавить калькулятору метод addMethod(name, func), который учит калькулятор новой операции. Он получает имя операции name и функцию от двух аргументов func(a,b), которая должна её реализовывать.
Например, добавим операции умножить *, поделить / и возвести в степень **:

var powerCalc = new Calculator;
powerCalc.addMethod("*", function(a, b) {
  return a * b;
});
powerCalc.addMethod("/", function(a, b) {
  return a / b;
});
powerCalc.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});
var result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

Поддержка скобок и сложных математических выражений в этой задаче не требуется.
Числа и операции могут состоять из нескольких символов. Между ними ровно один пробел.
Предусмотрите обработку ошибок. Какая она должна быть – решите сами.
*/

/*
// Шаг 1
function Calculator() {
  function toArr(str) {
    var arr = str.split(' ');
  this.a = parseFloat(arr[0]);
  this.b = parseFloat(arr[2]);
  return arr[1];
  }
  
  this.calculate = function(str) {
    if(toArr(str) === '+') return this['+']();
  if(toArr(str) === '-') return this['-']();
  }
  
  this['+'] = function() {
    return a + b;
  }
  
  this['-'] = function() {
    return a - b;
  }
}

var calc = new Calculator();
calc.calculate('3 + 7');
calc.calculate('7 - 4');
*/

/*
// Шаг 2
function Calculator() {
  // все методы, как и добавляемые, держим во внутреннем объекте
  var methods = {
    '-': function(a, b) { return a - b; },
    '+': function(a, b) { return a + b; }
  };

  this.calculate = function(str) {
    // расщепляем строку в массив
    var arr = str.split(' '),
        a = +arr[0],
        op = arr[1],
        b = +arr[2]
    // добавляем проверки на свой вкус
    if (!methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    // obj.operation(a, b) === obj[operation](a, b);
    return methods[op](+a, +b);
  }

  this.addMethod = function(name, func) {
    methods[name] = func;
  };
}

var calc = new Calculator;

calc.addMethod('*', function(a, b) {
  return a * b;
});
calc.addMethod('/', function(a, b) {
  return a / b;
});
calc.addMethod('**', function(a, b) {
  return Math.pow(a, b);
});

var result = calc.calculate('2 ** 3');
alert( result ); // 8
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Добавить get/set-свойства

Вам попал в руки код объекта User, который хранит имя и фамилию в свойстве this.fullName:

function User(fullName) {
  this.fullName = fullName;
}
var vasya = new User("Василий Попкин");

Имя и фамилия всегда разделяются пробелом.
Сделайте, чтобы были доступны свойства firstName и lastName, причём не только на чтение, но и на запись, вот так:

var vasya = new User("Василий Попкин");
// чтение firstName/lastName
alert( vasya.firstName ); // Василий
alert( vasya.lastName ); // Попкин
// запись в lastName
vasya.lastName = 'Сидоров';
alert( vasya.fullName ); // Василий Сидоров

Важно: в этой задаче fullName должно остаться свойством, а firstName/lastName – реализованы через get/set. Лишнее дублирование здесь ни к чему.
*/

/*
function User(str) {
  this.fullName = str;
  
  Object.defineProperties(this, {
  
  firstName: {
    get: function() {
    return this.fullName.split(' ')[0];
    },
    set: function(newStr) {
      this.fullName = newStr + ' ' + this.lastName;
    }
  },
  
  lastName: {
    get: function() {
    return this.fullName.split(' ')[1];
    },
    set: function(newStr) {
      this.fullName = this.firstName + ' ' + newStr;
    }
  }
  });
}

var vasya = new User('Василий Попкин');
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Счетчик объектов

Добавить в конструктор Article:
 - Подсчёт общего количества созданных объектов.
 - Запоминание даты последнего созданного объекта.
Используйте для этого статические свойства.
Пусть вызов Article.showStats() выводит то и другое.

function Article() {
  this.created = new Date();
  // ... ваш код ...
}
new Article();
new Article();
Article.showStats(); // Всего: 2, Последняя: (дата)
new Article();
Article.showStats(); // Всего: 3, Последняя: (дата)
*/

/*
function Article() {
  this.created = new Date();
  Article.lastDate = this.created;
  Article.count++;  
}

Article.count = 0;

Article.showStats = function() {
  return 'Всего: ' + this.count + ', Последняя: ' + this.lastDate;
}

new Article();
new Article();
Article.showStats();
new Article();
Article.showStats();
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Перепишите суммирование аргументов

Есть функция sum, которая суммирует все элементы массива:

 function sum(arr) {
  return arr.reduce(function(a, b) {
    return a + b;
  });
}
alert( sum([1, 2, 3]) ); // 6 (=1+2+3)

Создайте аналогичную функцию sumArgs(), которая будет суммировать все свои аргументы:

function sumArgs() {
  // ваш код
}
alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива

Для решения примените метод reduce к arguments, используя call, apply или одалживание метода.
P.S. Функция sum вам не понадобится, она приведена в качестве примера использования reduce для похожей задачи.
*/

/*
// одалживание
function sumArgs() {
  arguments.reduce = [].reduce;
  
  return arguments.reduce(function(a, b) { return a + b; });
}
sumArgs(1, 2, 3);

// call
function sumArgs() {
  return [].reduce.call(arguments, function(a, b) { return a + b; });
}
sumArgs(1, 2, 3);

// apply
function sumArgs() {
  return [].reduce.apply(arguments, [function(a, b) { return a + b; }]);
}
sumArgs(1, 2, 3);
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Примените функцию к аргументам

Напишите функцию applyAll(func, arg1, arg2...), которая получает функцию func и произвольное количество аргументов.
Она должна вызвать func(arg1, arg2...), то есть передать в func все аргументы, начиная со второго, и возвратить результат.

// Применить Math.max к аргументам 2, -2, 3
alert( applyAll(Math.max, 2, -2, 3) ); // 3

// Применить Math.min к аргументам 2, -2, 3
alert( applyAll(Math.min, 2, -2, 3) ); // -2

Область применения applyAll, конечно, шире, можно вызывать её и со своими функциями:

function sum() { // суммирует аргументы: sum(1,2,3) = 6
  return [].reduce.call(arguments, function(a, b) {
    return a + b;
  });
}

function mul() { // перемножает аргументы: mul(2,3,4) = 24
  return [].reduce.call(arguments, function(a, b) {
    return a * b;
  });
}

alert( applyAll(sum, 1, 2, 3) ); // -> sum(1, 2, 3) = 6
alert( applyAll(mul, 2, 3, 4) ); // -> mul(2, 3, 4) = 24
 */

/*
function sum() {
  return [].reduce.call(arguments, function(a, b) {
    return a + b;
  });
}

function mul() {
  return [].reduce.call(arguments, function(a, b) {
    return a * b;
  });
}

// Вариант 1
function applyAll(func) {
  var arr = [];
  for (var i = 1; i < arguments.length; i++) arr.push(arguments[i]);
  return func.apply(null, arr);
}

// Вариант 2
function applyAll(func) {
  return func.apply(this, [].slice.call(arguments, 1));
}
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Использование функции вопросов

Вызов user.checkPassword() в коде ниже должен, при помощи ask, спрашивать пароль и вызывать loginOk/loginFail в зависимости от правильности ответа.
Однако, его вызов приводит к ошибке. Почему?
Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

"use strict";

function ask(question, answer, ok, fail) {
  var result = prompt(question, '');
  if (result.toLowerCase() == answer.toLowerCase()) ok();
  else fail();
}

var user = {
  login: 'Василий',
  password: '12345',

  loginOk: function() {
    alert( this.login + ' вошёл в сайт' );
  },

  loginFail: function() {
    alert( this.login + ': ошибка входа' );
  },

  checkPassword: function() {
    ask("Ваш пароль?", this.password, this.loginOk, this.loginFail);
  }
};

user.checkPassword();

P.S. Ваше решение должно также срабатывать, если переменная user будет перезаписана, например вместо user.checkPassword() в конце будут строки:

var vasya = user;
user = null;
vasya.checkPassword();
 */

/*
function ask(question, answer, ok, fail) {
  var result = prompt(question, '');
  if (result.toLowerCase() === answer.toLowerCase()) ok();
  else fail();
}

var user = {
  login: 'Василий',
  password: '12345',

  loginOk: function() {
    alert( this.login + ' вошёл в сайт' );
  },

  loginFail: function() {
    alert( this.login + ': ошибка входа' );
  },

  checkPassword: function() {
    ask("Ваш пароль?", this.password, this.loginOk.bind(this), this.loginFail.bind(this));
  }
};

user.checkPassword();

var vasya = user;
user = null;
vasya.checkPassword();
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Использование функции вопросов с каррингом

Эта задача – усложнённый вариант задачи Использование функции вопросов. В ней объект user изменён.
Теперь заменим две функции user.loginOk() и user.loginFail() на единый метод: user.loginDone(true/false), который нужно вызвать с true при верном ответе и fail – при неверном.
Код ниже делает это, соответствующий фрагмент выделен.
Сейчас он обладает важным недостатком: при записи в user другого значения объект перестанет корректно работать, вы увидите это, запустив пример ниже (будет ошибка).
Как бы вы написали правильно?
Исправьте выделенный фрагмент, чтобы код заработал.

"use strict";

function ask(question, answer, ok, fail) {
  var result = prompt(question, '');
  if (result.toLowerCase() == answer.toLowerCase()) ok();
  else fail();
}

var user = {
  login: 'Василий',
  password: '12345',

  // метод для вызова из ask
  loginDone: function(result) {
    alert( this.login + (result ? ' вошёл в сайт' : ' ошибка входа') );
  },

  checkPassword: function() {
    ask("Ваш пароль?", this.password,
      function() {
        user.loginDone(true);
      },
      function() {
        user.loginDone(false);
      }
    );
  }
};

var vasya = user;
user = null;
vasya.checkPassword();

Изменения должны касаться только выделенного фрагмента.
Если возможно, предложите два решения, одно – с использованием bind, другое – без него. Какое решение лучше?
 */

/*
// Вариант 1 - bind
// передаем в аргумент this вместо user
// + как и раньше - "биндим" агрумент на bind(this)
function ask(question, answer, ok, fail) {
  var result = prompt(question, '');
  if (result.toLowerCase() === answer.toLowerCase()) ok();
  else fail();
}

var user = {
  login: 'Василий',
  password: '12345',

  // метод для вызова из ask - тренарный оператор '?'
  loginDone: function(result) {
    alert( this.login + (result ? ' вошёл в сайт' : ' ошибка входа') );
  },

  checkPassword: function() {
    ask("Ваш пароль?", this.password,
      function() {
        this.loginDone(true);
      }.bind(this),
      function() {
        this.loginDone(false);
      }.bind(this)
    );

    // короткая альтернатива
    // ask("Ваш пароль?", this.password, this.loginDone.bind(this, true), this.loginDone.bind(this, false));
  }
};

var vasya = user;
user = null;
vasya.checkPassword();

// Вариант 2
// скопировать this в локальную переменную
// чтобы внешняя перезапись не повлияла
var user = {
  login: 'Василий',
  password: '12345',

  loginDone: function(result) {
    alert( this.login + (result ? ' вошёл в сайт' : ' ошибка входа') );
  },

  checkPassword: function() {
    var self = this;
    ask("Ваш пароль?", this.password,
      function() {
        self.loginDone(true);
      },
      function() {
        self.loginDone(false);
      }
    );
  }
};
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Логирующий декоратор (1 аргумент)

Создайте декоратор makeLogging(f, log), который берет функцию f и массив log.
Он должен возвращать обёртку вокруг f, которая при каждом вызове записывает («логирует») аргументы в log, а затем передает вызов в f.
В этой задаче можно считать, что у функции f ровно один аргумент.

function work(a) {
  // work - произвольная функция, один аргумент
}

function makeLogging(f, log) { // ваш код }

var log = [];
work = makeLogging(work, log);

work(1); // 1, добавлено в log
work(5); // 5, добавлено в log

for (var i = 0; i < log.length; i++) {
  alert( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
}
 */

/*
function work(a) {
  return a * a;
}

// вариант 1
function makeLogging(f, log) {
  return function() {
    log.push(arguments[0]);
    return f.apply(this, arguments);
  }
}

var log = [];
work = makeLogging(work, log);

work(1);
work(5);

for (var i = 0; i < log.length; i++) {
  alert('Лог:' + log[i]);
}

// вариант 2
function makeLogging(f, log) {
  // обертка принимет аргумент, "пушит" его и передает в call
  function wrapper(a) {
    log.push(a);
    return f.call(this, a);
  }
  return wrapper;
}
*/

// Передача контекста (через call/apply) необходима, чтобы декоратор корректно работал с методами объекта.

//////////////////////////////////////////////////////////////////////////////////////

/*
Логирующий декоратор (много аргументов)

Создайте декоратор makeLogging(func, log), для функции func возвращающий обёртку, которая при каждом вызове добавляет её аргументы в массив log.
Условие аналогично задаче Логирующий декоратор (1 аргумент), но допускается func с любым набором аргументов.

function work(a, b) {
  alert( a + b ); // work - произвольная функция
}

function makeLogging(f, log) { // ваш код }

var log = [];
work = makeLogging(work, log);

work(1, 2); // 3
work(4, 5); // 9

for (var i = 0; i < log.length; i++) {
  var args = log[i]; // массив из аргументов i-го вызова
  alert( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
}
 */

/*
function work(a, b) {
  alert(a + b);
}

function makeLogging(f, log) {
  return function() {
    var arrArgs = [].slice.call(arguments);
    log.push(arrArgs);
    return f.apply(this, arrArgs);
  }
}

var log = [];
work = makeLogging(work, log);

work(1, 2);
work(4, 5);

for (var i = 0; i < log.length; i++) {
  var args = log[i];
  alert('Лог:' + args.join());
}
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Кеширующий декоратор

Создайте декоратор makeCaching(f), который берет функцию f и возвращает обертку, которая кеширует её результаты.
В этой задаче функция f имеет только один аргумент, и он является числом.
При первом вызове обертки с определенным аргументом – она вызывает f и запоминает значение.
При втором и последующих вызовах с тем же аргументом возвращается запомненное значение.

function f(x) {
  return Math.random() * x; // random для удобства тестирования
}

function makeCaching(f) { // ваш код }

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);
alert( a == b ); // true (значение закешировано)

b = f(2);
alert( a == b ); // false, другой аргумент => другое значение
 */

function f(x) {
  return Math.random() * x;
}

function makeCaching(f) {
  var cache = {};

  return function(x) {
    if (!(x in cache)) cache[x] = f.call(this, x);
    return cache[x];
  }
}

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);
alert(a === b);

b = f(2);
alert(a === b);
