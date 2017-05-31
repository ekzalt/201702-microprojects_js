'use strict';

//////////////////////////////////////////////////////////////////////////////////////

// Функциональное ООП

//////////////////////////////////////////////////////////////////////////////////////

/*
Добавить метод и свойство кофеварке

Улучшите готовый код кофеварки, который дан ниже: добавьте в кофеварку публичный метод stop(), который будет останавливать кипячение (через clearTimeout).

function CoffeeMachine(power) {
  this.waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  var self = this;

  function getBoilTime() {
    return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  function onReady() {
    alert( 'Кофе готово!' );
  }

  this.run = function() {
    setTimeout(onReady, getBoilTime());
  };

}

Вот такой код должен ничего не выводить:

var coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();
coffeeMachine.stop(); // кофе приготовлен не будет

P.S. Текущую температуру воды вычислять и хранить не требуется.
P.P.S. При решении вам, скорее всего, понадобится добавить приватное свойство timerId, которое будет хранить текущий таймер.
 */

////////////////

/*
function CoffeeMachine(power) {
  var self = this,
      timerId,
      WATER_HEAT_CAPACITY = 4200;

  this.waterAmount = 0;

  function getBoilTime() {
    return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }
  function onReady() {
    alert('Кофе готово!');
  }

  this.run = function() {
    timerId = setTimeout(onReady, getBoilTime());
  };
  this.stop = function() {
    clearTimeout(timerId);
  };
}

var coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();
coffeeMachine.stop();
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Написать объект с геттерами и сеттерами

Напишите конструктор User для создания объектов:
С приватными свойствами имя firstName и фамилия surname.
С сеттерами для этих свойств.
С геттером getFullName(), который возвращает полное имя.

function User() {
  // ваш код
}

var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");

alert( user.getFullName() ); // Петя Иванов
 */

////////////////

/*
function User() {
  var firstName,
      surname;

  this.getFullName = function() {
    return firstName + ' ' + surname;
  }
  this.setFirstName = function(str) {
    firstName = str;
  }
  this.setSurname = function(str) {
    surname = str;
  }
}

var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");
user.getFullName();
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Добавить геттер для power

Добавьте кофеварке геттер для приватного свойства power, чтобы внешний код мог узнать мощность кофеварки.

function CoffeeMachine(power, capacity) {
  //...
  this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить воды больше, чем " + capacity);
    }

    waterAmount = amount;
  };

  this.getWaterAmount = function() {
    return waterAmount;
  };

}

Обратим внимание, что ситуация, когда у свойства power есть геттер, но нет сеттера – вполне обычна.
Здесь это означает, что мощность power можно указать лишь при создании кофеварки и в дальнейшем её можно прочитать, но нельзя изменить.
 */

////////////////

/*
function CoffeeMachine(power, capacity) {
  var waterAmount = 0;

  //...
  this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить воды больше, чем " + capacity);
    }
    waterAmount = amount;
  };
  this.getWaterAmount = function() {
    return waterAmount;
  };
  this.getPower = function() {
    return power;
  };
}

var coff1 = new CoffeeMachine(1500, 1500);
coff1.getPower();
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Добавить публичный метод кофеварке

Добавьте кофеварке публичный метод addWater(amount), который будет добавлять воду.
При этом, конечно же, должны происходить все необходимые проверки – на положительность и превышение ёмкости.

function CoffeeMachine(power, capacity) {
  var waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить больше, чем " + capacity);
    }

    waterAmount = amount;
  };

  function onReady() {
    alert( 'Кофе готов!' );
  }

  this.run = function() {
    setTimeout(onReady, getTimeToBoil());
  };
}

Вот такой код должен приводить к ошибке:

var coffeeMachine = new CoffeeMachine(100000, 400);
coffeeMachine.addWater(200);
coffeeMachine.addWater(100);
coffeeMachine.addWater(300); // Нельзя залить больше, чем 400
coffeeMachine.run();
 */

////////////////

/*
function CoffeeMachine(power, capacity) {
  var waterAmount = 0;
  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }
  function onReady() {
    alert( 'Кофе готов!' );
  }

  this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить больше, чем " + capacity);
    }
    waterAmount = amount;
  };
  this.addWater = function(amount) {
    this.setWaterAmount(waterAmount + amount);
  };
  this.run = function() {
    setTimeout(onReady, getTimeToBoil());
  };
}

var coffeeMachine = new CoffeeMachine(100000, 400);
coffeeMachine.addWater(200);
coffeeMachine.addWater(100);
coffeeMachine.addWater(300); // Нельзя залить больше..
coffeeMachine.run();
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Создать сеттер для onReady

Обычно когда кофе готов, мы хотим что-то сделать, например выпить его.
Сейчас при готовности срабатывает функция onReady, но она жёстко задана в коде:

function CoffeeMachine(power, capacity) {
  var waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.setWaterAmount = function(amount) {
    // ... проверки пропущены для краткости
    waterAmount = amount;
  };

  this.getWaterAmount = function(amount) {
    return waterAmount;
  };

  function onReady() {
      alert( 'Кофе готов!' );
    }

  this.run = function() {
    setTimeout(onReady, getTimeToBoil());
  };

}

Создайте сеттер setOnReady, чтобы код снаружи мог назначить свой onReady, вот так:

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(150);

coffeeMachine.setOnReady(function() {
  var amount = coffeeMachine.getWaterAmount();
  alert( 'Готов кофе: ' + amount + 'мл' ); // Кофе готов: 150 мл
});

coffeeMachine.run();

P.S. Значение onReady по умолчанию должно быть таким же, как и раньше.
P.P.S. Постарайтесь сделать так, чтобы setOnReady можно было вызвать не только до, но и после запуска кофеварки, то есть чтобы функцию onReady можно было изменить в любой момент до её срабатывания.
 */

////////////////

/*
function CoffeeMachine(power, capacity) {
  var waterAmount = 0;
  var WATER_HEAT_CAPACITY = 4200;
  var self = this;
  var readyFunc;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.setWaterAmount = function(amount) {
    // ... проверки пропущены для краткости
    waterAmount = amount;
  };
  this.getWaterAmount = function(amount) {
    return waterAmount;
  };
  this.setOnReady = function(f) {
      if (readyFunc) readyFunc();
      if (!arguments.length && !readyFunc) alert('Кофе готов!');
      readyFunc = f;
    }
  this.run = function() {
    setTimeout(self.setOnReady, getTimeToBoil());
  };
}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(150);

coffeeMachine.setOnReady(function() {
  var amount = coffeeMachine.getWaterAmount();
  alert( 'Готов кофе: ' + amount + 'мл' );
});

coffeeMachine.run();
*/

////////////////

/*
// Вариант из учебника
function CoffeeMachine(power, capacity) {
  var waterAmount = 0;
  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.setWaterAmount = function(amount) {
    // ... проверки пропущены для краткости
    waterAmount = amount;
  };
  this.getWaterAmount = function(amount) {
    return waterAmount;
  };
  function onReady() {
    alert( 'Кофе готов!' );
  }
  this.setOnReady = function(newOnReady) {
    onReady = newOnReady;
  };
  this.run = function() {
    setTimeout(function() {
      onReady();
    }, getTimeToBoil());
  };
}
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Добавить метод isRunning

Из внешнего кода мы хотели бы иметь возможность понять – запущена кофеварка или нет.
Для этого добавьте кофеварке публичный метод isRunning(), который будет возвращать true, если она запущена и false, если нет.

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

alert( 'До: ' + coffeeMachine.isRunning() ); // До: false

coffeeMachine.run();
alert( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true

coffeeMachine.setOnReady(function() {
  alert( "После: " + coffeeMachine.isRunning() ); // После: false
});
 */

////////////////

/*
function CoffeeMachine(power, capacity) {
  var waterAmount = 0;
  var WATER_HEAT_CAPACITY = 4200;
  var self = this;
  var readyFunc;
  var inAction = false;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.setWaterAmount = function(amount) {
    // ... проверки пропущены для краткости
    waterAmount = amount;
  };
  this.getWaterAmount = function(amount) {
    return waterAmount;
  };
  this.setOnReady = function(f) {
      if (readyFunc) readyFunc();
      if (!arguments.length && !readyFunc) alert('Кофе готов!');
      readyFunc = f;
      inAction = false;
    }
  this.run = function() {
    inAction = true;
    setTimeout(self.setOnReady, getTimeToBoil());
  };
  this.isRunning = function() {
    return inAction;
  }
}
*/

////////////////

/*
// Вариант из учебника
function CoffeeMachine(power, capacity) {
  var waterAmount = 0;
  var timerId;
  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }
  function onReady() {
    alert( 'Кофе готов!' );
  }

  this.setWaterAmount = function(amount) {
    // ... проверки пропущены для краткости
    waterAmount = amount;
  };
  this.getWaterAmount = function(amount) {
    return waterAmount;
  };
  this.setOnReady = function(newOnReady) {
    onReady = newOnReady;
  };
  this.run = function() {
    timerId = setTimeout(function() {
      timerId = null;
      onReady();
    }, getTimeToBoil());
  };
  this.isRunning = function() {
    return !!timerId;
  };
}
 */

//////////////////////////////////////////////////////////////////////////////////////

/*
Запускать только при включённой кофеварке

В коде CoffeeMachine сделайте так, чтобы метод run выводил ошибку, если кофеварка выключена.

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.run(); // ошибка, кофеварка выключена!

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run(); // ...Кофе готов!
 */

////////////////

/*
function Machine(power) {
  var self = this;

  this._power = power;
  this._enabled = false;

  this.enable = function() {
    self._enabled = true;
  };
  this.disable = function() {
    self._enabled = false;
  };
}

function CoffeeMachine(power) {
  Machine.apply(this, arguments);

  var parentEnable = this.enable;
  
  function onReady() {
    alert( 'Кофе готов!' );
  }

  this.run = function() {
    if (!this._enabled) throw new Error('Coffee Machine is OFF');

    setTimeout(onReady, 1000);
  }
  this.enable = function() {
    parentEnable();
    // this.run();
  }
}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.run();
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Останавливать кофеварку при выключении

Когда кофеварку выключают – текущая варка кофе должна останавливаться.

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable(); // остановит работу, ничего не выведет
 */

////////////////

/*
function Machine(power) {
  var self = this;

  this._power = power;
  this._enabled = false;

  this.enable = function() {
    self._enabled = true;
  };
  this.disable = function() {
    self._enabled = false;
  };
}

function CoffeeMachine(power) {
  Machine.apply(this, arguments);

  var parentEnable = this.enable,
      parentDisable = this.disable,
      timerId;
  
  function onReady() {
    alert( 'Кофе готов!' );
  }

  this.run = function() {
    if (!this._enabled) throw new Error('Coffee Machine is OFF');

    timerId = setTimeout(onReady, 1000);
  }
  this.enable = function() {
    parentEnable();
    // this.run();
  }
  this.disable = function() {
    parentDisable();
    clearTimeout(timerId);
  }
}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable();
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Унаследуйте холодильник

Создайте класс для холодильника Fridge(power), наследующий от Machine, с приватным свойством food и методами addFood(...), getFood():
- Приватное свойство food хранит массив еды.
- Публичный метод addFood(item) добавляет в массив food новую еду, доступен вызов с несколькими аргументами addFood(item1, item2...) для добавления нескольких элементов сразу.
- Если холодильник выключен, то добавить еду нельзя, будет ошибка.
- Максимальное количество еды ограничено power/100, где power – мощность холодильника, указывается в конструкторе. При попытке добавить больше – будет ошибка
- Публичный метод getFood() возвращает еду в виде массива, добавление или удаление элементов из которого не должно влиять на свойство food холодильника.

Код для проверки:

var fridge = new Fridge(200);
fridge.addFood("котлета"); // ошибка, холодильник выключен

Ещё код для проверки:

// создать холодильник мощностью 500 (не более 5 еды)
var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "зелень");
fridge.addFood("варенье", "пирог", "торт"); // ошибка, слишком много еды

Код использования холодильника без ошибок:

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "варенье");

var fridgeFood = fridge.getFood();
alert( fridgeFood ); // котлета, сок, варенье

// добавление элементов не влияет на еду в холодильнике
fridgeFood.push("вилка", "ложка");

alert( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье

Исходный код класса Machine, от которого нужно наследовать:

function Machine(power) {
  this._power = power;
  this._enabled = false;

  var self = this;

  this.enable = function() {
    self._enabled = true;
  };

  this.disable = function() {
    self._enabled = false;
  };
}
 */

////////////////

/*
function Machine(power) {
  var self = this;

  this._power = power;
  this._enabled = false;

  this.enable = function() {
    self._enabled = true;
  };
  this.disable = function() {
    self._enabled = false;
  };
}

function Fridge(power) {
  Machine.apply(this, arguments);

  var parentEnable = this.enable,
      parentDisable = this.disable,
      space = power / 100,
      food = [];

  this.addFood = function() {
    if (!this._enabled) throw new Error('Холодильник выключен, еду добавлять нельзя!');
    
    for (var i = 0; i < arguments.length; i++) {
      if (food.length < space) {
        food.push(arguments[i]);
        console.log('Максимальная емкость: ' + space + ', осталось: ' + (space - food.length));
      } else {
        throw new Error('Холодильник переполнен! Максимальная емкость: ' + space);
      }
    }
  }
  this.getFood = function() {
    var pubFood = food.slice();
    return pubFood;
  }
  this.enable = function() {
    parentEnable();
  }
  this.disable = function() {
    parentDisable();
  }
}
*/

////////////////

/*
// с учебника
function Fridge(power) {
  // унаследовать
  Machine.apply(this, arguments);

  var food = []; // приватное свойство food

  this.addFood = function() {
    if (!this._enabled) {
      throw new Error("Холодильник выключен");
    }
    if (food.length + arguments.length >= this._power / 100) {
      throw new Error("Нельзя добавить, не хватает мощности");
    }
    for (var i = 0; i < arguments.length; i++) {
      food.push(arguments[i]); // добавить всё из arguments
    }
  };
  this.getFood = function() {
    // копируем еду в новый массив, чтобы манипуляции с ним не меняли food
    return food.slice();
  };
}
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Добавьте методы в холодильник

Добавьте в холодильник методы:
- Публичный метод filterFood(func), который возвращает всю еду, для которой func(item) == true
- Публичный метод removeFood(item), который удаляет еду item из холодильника.
Код для проверки:

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
  title: "котлета",
  calories: 100
});
fridge.addFood({
  title: "сок",
  calories: 30
});
fridge.addFood({
  title: "зелень",
  calories: 10
});
fridge.addFood({
  title: "варенье",
  calories: 150
});

fridge.removeFood("нет такой еды"); // без эффекта
alert( fridge.getFood().length ); // 4

var dietItems = fridge.filterFood(function(item) {
  return item.calories < 50;
});

dietItems.forEach(function(item) {
  alert( item.title ); // сок, зелень
  fridge.removeFood(item);
});

alert( fridge.getFood().length ); // 2
 */

////////////////

/*
function Machine(power) {
  var self = this;

  this._power = power;
  this._enabled = false;

  this.enable = function() {
    self._enabled = true;
  };
  this.disable = function() {
    self._enabled = false;
  };
}

function Fridge(power) {
  Machine.apply(this, arguments);

  var parentEnable = this.enable,
      parentDisable = this.disable,
      space = power / 100,
      food = [];

  this.addFood = function() {
    if (!this._enabled) throw new Error('Холодильник выключен, еду добавлять нельзя!');
    
    for (var i = 0; i < arguments.length; i++) {
      if (food.length < space) {
        food.push(arguments[i]);
        console.log('Максимальная емкость: ' + space + ', осталось: ' + (space - food.length));
      } else {
        throw new Error('Холодильник переполнен! Максимальная емкость: ' + space);
      }
    }
  };
  this.getFood = function() {
    return food.slice();
  };
  this.enable = function() {
    parentEnable();
  };
  this.disable = function() {
    parentDisable();
  };
  this.filterFood = function(func) {
    return food.filter(func);
  };
  this.removeFood = function(item) {
    if (~food.indexOf(item)) {
      food.splice(food.indexOf(item), 1);
    } else {
      throw new Error('Нет такой еды');
    }
  };
}
*/

////////////////

/*
// вариант с учебника
function Fridge(power) {
  // унаследовать
  Machine.apply(this, arguments);

  var food = []; // приватное свойство food

  this.addFood = function() {
    if (!this._enabled) {
      throw new Error("Холодильник выключен");
    }
    if (food.length + arguments.length >= this._power / 100) {
      throw new Error("Нельзя добавить, не хватает мощности");
    }
    for (var i = 0; i < arguments.length; i++) {
      food.push(arguments[i]); // добавить всё из arguments
    }

  };
  this.getFood = function() {
    // копируем еду в новый массив, чтобы манипуляции с ним не меняли food
    return food.slice();
  };
  this.filterFood = function(filter) {
    return food.filter(filter);
  };
  this.removeFood = function(item) {
    var idx = food.indexOf(item);
    if (idx != -1) food.splice(idx, 1);
  };
}
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Переопределите disable

Переопределите метод disable холодильника, чтобы при наличии в нём еды он выдавал ошибку.

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("кус-кус");
fridge.disable(); // ошибка, в холодильнике есть еда
 */

////////////////

/*
function Machine(power) {
  var self = this;

  this._power = power;
  this._enabled = false;

  this.enable = function() {
    self._enabled = true;
  };
  this.disable = function() {
    self._enabled = false;
  };
}

function Fridge(power) {
  Machine.apply(this, arguments);

  var parentEnable = this.enable,
      parentDisable = this.disable,
      space = power / 100,
      food = [];

  this.addFood = function() {
    if (!this._enabled) throw new Error('Холодильник выключен, еду добавлять нельзя!');
    
    for (var i = 0; i < arguments.length; i++) {
      if (food.length < space) {
        food.push(arguments[i]);
        console.log('Максимальная емкость: ' + space + ', осталось: ' + (space - food.length));
      } else {
        throw new Error('Холодильник переполнен! Максимальная емкость: ' + space);
      }
    }
  };
  this.getFood = function() {
    return food.slice();
  };
  this.enable = function() {
    parentEnable();
  };
  this.disable = function() {
    if (food.length) throw new Error('Холодильник выключать нельзя, там есть еда!');

    parentDisable();
  };
  this.filterFood = function(func) {
    return food.filter(func);
  };
  this.removeFood = function(item) {
    if (~food.indexOf(item)) {
      food.splice(food.indexOf(item), 1);
    } else {
      throw new Error('Нет такой еды');
    }
  };
}
*/

//////////////////////////////////////////////////////////////////////////////////////

// Прототипное ООП

//////////////////////////////////////////////////////////////////////////////////////

/*
Алгоритм для поиска

Есть объекты:

var head = {
  glasses: 1
};

var table = {
  pen: 3
};

var bed = {
  sheet: 1,
  pillow: 2
};

var pockets = {
  money: 2000
};

Задание состоит из двух частей:
1) Присвойте объектам ссылки __proto__ так, чтобы любой поиск чего-либо шёл по алгоритму pockets -> bed -> table -> head.
То есть pockets.pen == 3, bed.glasses == 1, но table.money == undefined.
2) После этого ответьте на вопрос, как быстрее искать glasses: обращением к pockets.glasses или head.glasses? Попробуйте протестировать.
 */

////////////////

/*
var head = {
  glasses: 1
};

var table = {
  pen: 3
};

var bed = {
  sheet: 1,
  pillow: 2
};

var pockets = {
  money: 2000
};

// obj.__proto__ = proto;
pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

console.time('glasses');
pockets.glasses;
console.timeEnd('glasses');
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Добавить функциям defer

Добавьте всем функциям в прототип метод defer(ms), который откладывает вызов функции на ms миллисекунд.

function f() {
  alert( "привет" );
}
f.defer(1000); // выведет "привет" через 1 секунду
 */

////////////////

/*
Function.prototype.defer = function(ms) {
  var timerId = setTimeout(this, ms);
};
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Добавить функциям defer с аргументами

Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

function f(a, b) {
  alert( a + b );
}
f.defer(1000)(1, 2); // выведет 3 через 1 секунду.

То есть, должны корректно передаваться аргументы.
 */

////////////////

/*
Function.prototype.defer = function(ms) {
  // 1) делаем копию функции, к которой применим метод
  var f = this;

  return function () {
    // 2) сохраняем аргументы и контекст подвызова
    var args = arguments,
        context = this,
        timerId = setTimeout(function() {
      // 3) вызываем копию
      f.apply(context, args);
    }, ms);
  };
};

function f(a, b) {
  alert(a + b);
}

f.defer(1000)(1, 2);
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Перепишите в виде класса

Есть класс CoffeeMachine, заданный в функциональном стиле.
Задача: переписать CoffeeMachine в виде класса с использованием прототипа.

function CoffeeMachine(power) {
  var waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.run = function() {
    setTimeout(function() {
      alert( 'Кофе готов!' );
    }, getTimeToBoil());
  };

  this.setWaterAmount = function(amount) {
    waterAmount = amount;
  };

}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();

P.S. При описании через прототипы локальные переменные недоступны методам, поэтому нужно будет переделать их в защищённые свойства.
 */

////////////////

/*
function CoffeeMachine(power) {
  this._power = power;
  this._waterAmount = 0;
}

CoffeeMachine.prototype._WATER_HEAT_CAPACITY = 4200;

CoffeeMachine.prototype._getTimeToBoil = function() {
  return this._waterAmount * this._WATER_HEAT_CAPACITY * 80 / this._power;
};

CoffeeMachine.prototype.run = function() {
  setTimeout(function() {
    alert('Кофе готов!');
  }, this._getTimeToBoil());
};

CoffeeMachine.prototype.setWaterAmount = function(amount) {
  this._waterAmount = amount;
};

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Хомяки с __proto__

Вы – руководитель команды, которая разрабатывает игру, хомяковую ферму. Один из программистов получил задание создать класс «хомяк» (англ – "Hamster").
Объекты-хомяки должны иметь массив food для хранения еды и метод found для добавления.
Ниже – его решение. При создании двух хомяков, если поел один – почему-то сытым становится и второй тоже.
В чём дело? Как поправить?

function Hamster() {}

Hamster.prototype.food = []; // пустой "живот"

Hamster.prototype.found = function(something) {
  this.food.push(something);
};

// Создаём двух хомяков и кормим первого
var speedy = new Hamster();
var lazy = new Hamster();

speedy.found("яблоко");
speedy.found("орех");

alert( speedy.food.length ); // 2
alert( lazy.food.length ); // 2 (!??)
 */

////////////////

/*
function Hamster() {
  this.food = [];
}

Hamster.prototype.found = function(something) {
  this.food.push(something);
};

var speedy = new Hamster();
var lazy = new Hamster();

speedy.found("яблоко");
speedy.found("орех");

alert( speedy.food.length );
alert( lazy.food.length );
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Класс "часы"

Есть реализация часиков, оформленная в виде одной функции-конструктора. У неё есть приватные свойства timer, template и метод render.
Задача: переписать часы на прототипах. Приватные свойства и методы сделать защищёнными.
P.S. Часики тикают в браузерной консоли (надо открыть её, чтобы увидеть).

function Clock(options) {
  var template = options.template;
  var timer;

  function render() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var min = date.getMinutes();
    if (min < 10) min = '0' + min;

    var sec = date.getSeconds();
    if (sec < 10) sec = '0' + sec;

    var output = template.replace('h', hours).replace('m', min).replace('s', sec);

    console.log(output);
  }

  this.stop = function() {
    clearInterval(timer);
  };
  this.start = function() {
    render();
    timer = setInterval(render, 1000);
  }
}

var clock = new Clock({
  template: 'h:m:s'
});
clock.start();
 */

////////////////

/*
function Clock(options) {
  this._template = options.template;
}

Clock.prototype._render = function() {
  var date = new Date();

  var hours = date.getHours();
  if (hours < 10) hours = '0' + hours;

  var min = date.getMinutes();
  if (min < 10) min = '0' + min;

  var sec = date.getSeconds();
  if (sec < 10) sec = '0' + sec;

  var output = this._template.replace('h', hours).replace('m', min).replace('s', sec);

  console.clear();
  console.log(output);
};

Clock.prototype.stop = function() {
  clearInterval(this._timer);
};

Clock.prototype.start = function() {
  var self = this;
  
  this._render();
  this._timer = setInterval(function() {
    self._render();
  }, 1000);
};

var clock = new Clock({
  template: 'h:m:s'
});
clock.start();
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Класс "расширенные часы"

Есть реализация часиков на прототипах. Создайте класс, расширяющий её, добавляющий поддержку параметра precision, который будет задавать частоту тика в setInterval. Значение по умолчанию: 1000.
Для этого класс Clock надо унаследовать. Пишите ваш новый код в файле extended-clock.js.
Исходный класс Clock менять нельзя.
Пусть конструктор потомка вызывает конструктор родителя. Это позволит избежать проблем при расширении Clock новыми опциями.
P.S. Часики тикают в браузерной консоли (надо открыть её, чтобы увидеть).
 */

////////////////

/*
// оригинальные часы
function Clock(options) {
  this._template = options.template;
}

Clock.prototype._render = function() {
  var date = new Date();

  var hours = date.getHours();
  if (hours < 10) hours = '0' + hours;

  var min = date.getMinutes();
  if (min < 10) min = '0' + min;

  var sec = date.getSeconds();
  if (sec < 10) sec = '0' + sec;

  var output = this._template.replace('h', hours).replace('m', min).replace('s', sec);

  console.clear();
  console.log(output);
};

Clock.prototype.stop = function() {
  clearInterval(this._timer);
};

Clock.prototype.start = function() {
  var self = this;
  
  this._render();
  this._timer = setInterval(function() {
    self._render();
  }, 1000);
};

// расширенные часы
function ExtendedClock(options) {
  // наследуем свойства родителя
  Clock.apply(this, arguments);

  // допиливаем свои свойства
  this._precision = +options.precision || 1000;
}

// наследуем методы родителя
ExtendedClock.prototype = Object.create(Clock.prototype);

// сохраняем свой конструктор
ExtendedClock.prototype.constructor = ExtendedClock;

// меняем родительский .start()
ExtendedClock.prototype.start = function() {
  var self = this;
  
  this._render();
  this._timer = setInterval(function() {
    self._render();
  }, this._precision);
};

var lowResolutionClock = new ExtendedClock({
  template: 'h:m:s',
  precision: 10000
});
lowResolutionClock.start();
*/

////////////////

/*
// кроссбраузерные методы

// inherit() - "ручная" реализация Object.create() , если метод не поддерживается старым браузером IE8-
function inherit(proto) {
  function F() {}
  F.prototype = proto;
  return new F;
}

// кроссбраузерная автоматизация наслелования
function extend(Child, Parent) {
  Child.prototype = inherit(Parent.prototype);
  Child.prototype.constructor = Child;
  Child.parent = Parent.prototype;
}
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Меню с таймером для анимации

Есть класс Menu. У него может быть два состояния: открыто STATE_OPEN и закрыто STATE_CLOSED.
Создайте наследника AnimatingMenu, который добавляет третье состояние STATE_ANIMATING.
При вызове open() состояние меняется на STATE_ANIMATING, а через 1 секунду, по таймеру, открытие завершается вызовом open() родителя.
Вызов close() при необходимости отменяет таймер анимации (назначаемый в open) и передаёт вызов родительскому close.
Метод showState для нового состояния выводит "анимация", для остальных – полагается на родителя.

function Menu(state) {
  this._state = state || Menu.STATE_CLOSED;
};

Menu.STATE_OPEN = 1;
Menu.STATE_CLOSED = 0;

Menu.prototype.open = function() {
  this._state = Menu.STATE_OPEN;
};

Menu.prototype.close = function() {
  this._state = Menu.STATE_CLOSED;
};

Menu.prototype._stateAsString = function() {
  switch (this._state) {
    case Menu.STATE_OPEN:
      return 'открыто';

    case Menu.STATE_CLOSED:
      return 'закрыто';
  }
};

Menu.prototype.showState = function() {
  alert(this._stateAsString());
};

var AnimatingMenu = Menu; // замените на ваш код для AnimatingMenu

// использование..

var menu = new AnimatingMenu();

menu.showState(); // закрыто

menu.open();
menu.showState(); // анимация

setTimeout(function() {
  menu.showState(); // открыто

  menu.close();
  menu.showState(); // закрыто (закрытие без анимации)
}, 1000);
 */

////////////////

/*
function Menu(state) {
  this._state = state || Menu.prototype.STATE_CLOSED;
}

Menu.prototype.STATE_OPEN = 1;
Menu.prototype.STATE_CLOSED = 0;

Menu.prototype._stateAsString = function() {
  switch (this._state) {
    case Menu.prototype.STATE_OPEN:
      return 'открыто';

    case Menu.prototype.STATE_CLOSED:
      return 'закрыто';
  }
};

Menu.prototype.open = function() {
  this._state = Menu.prototype.STATE_OPEN;
};

Menu.prototype.close = function() {
  this._state = Menu.prototype.STATE_CLOSED;
};

Menu.prototype.showState = function() {
  alert(this._stateAsString());
};

// создаем наследника
function AnimatingMenu(state) {
  Menu.apply(this, arguments);
}
AnimatingMenu.prototype = Object.create(Menu.prototype);
AnimatingMenu.prototype.constructor = AnimatingMenu;

AnimatingMenu.prototype.STATE_ANIMATING = 2;

AnimatingMenu.prototype.open = function() {
  var self = this;

  this._state = AnimatingMenu.prototype.STATE_ANIMATING;

  this._timer = setTimeout(function() {
    Menu.prototype.open.apply(self);
  }, 1000);
};

AnimatingMenu.prototype.close = function() {
  clearTimeout(this._timer);
  Menu.prototype.close.apply(this);
};

AnimatingMenu.prototype.showState = function() {
  if (this._state === AnimatingMenu.prototype.STATE_ANIMATING) return 'анимация';

  Menu.prototype.showState.apply(this);
};

var menu = new AnimatingMenu();

menu.showState(); // закрыто

menu.open();
menu.showState(); // анимация

setTimeout(function() {
  menu.showState(); // открыто
  menu.close();
  menu.showState(); // закрыто (закрытие без анимации)
}, 1000);
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Унаследуйте от SyntaxError

Создайте ошибку FormatError, которая будет наследовать от встроенного класса SyntaxError.
Синтаксис для её создания – такой же, как обычно:

var err = new FormatError("ошибка форматирования");
alert( err.message ); // ошибка форматирования
alert( err.name ); // FormatError
alert( err.stack ); // стек на момент генерации ошибки
alert( err instanceof SyntaxError ); // true
 */

////////////////

function FormatError(message) {
  SyntaxError.apply(this, arguments);

  this.name = "FormatError";
  this.message = message;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }
}

FormatError.prototype = Object.create(SyntaxError.prototype);
FormatError.prototype.constructor = FormatError;

var err = new FormatError("ошибка форматирования");
err.message; // ошибка форматирования
err.name; // FormatError
err.stack; // стек на момент генерации ошибки
err instanceof SyntaxError; // true

////////////////

// генерация "своей" ошибки общего вида
function CustomError(message) {
  this.name = "CustomError";
  this.message = message;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }
}
CustomError.prototype = Object.create(Error.prototype);
CustomError.prototype.constructor = CustomError;
