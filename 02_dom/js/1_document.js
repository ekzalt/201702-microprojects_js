'use strict';

/////////////////////////////////////////////////

/*
DOM children

Напишите код, который получит элемент HEAD.
Напишите код, который получит UL.
Напишите код, который получит второй LI. Будет ли ваш код работать в IE8-, если комментарий переместить между элементами LI?
*/

////////////////

/*
document.head;
document.documentElement.children[0];
document.documentElement.firstChild;

document.body.children[1];

document.body.children[1].lastElementChild;
document.body.children[1].children[1];
*/

/////////////////////////////////////////////////

/*
Проверка существования детей

Придумайте самый короткий код для проверки, пуст ли элемент elem.
«Пустой» – значит нет дочерних узлов, даже текстовых.

if (...ваш код проверки elem...) { узел elem пуст }
 */

////////////////

/*
if (!elem.childNodes.length) {}

if (!elem.firstChild) {}

if (elem.hasChildNodes()) {}
*/

/////////////////////////////////////////////////

/*
Выделите ячейки по диагонали

Напишите код, который выделит все ячейки в таблице по диагонали.
Вам нужно будет получить из таблицы table все диагональные td и выделить их, используя код:

// в переменной td DOM-элемент для тега <td>
td.style.backgroundColor = 'red';
 */

////////////////

/*
var table = document.body.children[0];

var one = table.children[0].children[0].children[0];
one.style.backgroundColor = 'red';

var two = table.children[0].children[1].children[1];
two.style.backgroundColor = 'red';

var three = table.rows[2].cells[2];
three.style.backgroundColor = 'red';

table.rows[3].cells[3].style.backgroundColor = 'red';

table.rows[4].cells[4].style.backgroundColor = 'red';
*/

////////////////

/*
var table = document.body.children[0];

function toRed() {
  for (var i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[i].style.backgroundColor = 'red';
  }
}

toRed();
*/

/////////////////////////////////////////////////

/*
Поиск элементов

Ниже находится документ с таблицей и формой.
Найдите (получите в переменную) в нём:

1) Все элементы label внутри таблицы. Должно быть 3 элемента.
2) Первую ячейку таблицы (со словом "Возраст").
3) Вторую форму в документе.
4) Форму с именем search, без использования её позиции в документе.
5) Элемент input в форме с именем search. Если их несколько, то нужен первый.
6) Элемент с именем info[0], без точного знания его позиции в документе.
7) Элемент с именем info[0], внутри формы с именем search-person.

Используйте для этого консоль браузера, открыв страницу table.html в отдельном окне.
https://learn.javascript.ru/task/find-elements/table.html
 */

////////////////

/*
// 1
document.querySelector('#age-table').querySelectorAll('label');
document.getElementById('age-table').getElementsByTagName('label');

// 2
document.querySelector('#age-table').rows[0].cells[0];
document.querySelector('#age-table td');
document.getElementById('age-table').getElementsByTagName('td')[0];

// 3
document.querySelectorAll('form')[1];
document.getElementsByName('search-person');
document.getElementsByTagName('form')[1];

// 4
document.getElementsByName('search')[0];
document.querySelector('form[name="search"]');

// 5
document.getElementsByName('search')[1];
document.querySelector('form[name="search"] input');

// 6
document.getElementsByName('info[0]')[0];
document.querySelector('[name="info[0]"]');

// 7
document.querySelector('form[name="search-person"] [name="info[0]"]');
*/

/////////////////////////////////////////////////

/*
Дерево

Есть дерево из тегов <ul>/<li>.
Напишите код, который для каждого элемента <li> выведет:
1) Текст непосредственно в нём (без подразделов).
2) Количество вложенных в него элементов <li> – всех, с учётом вложенных.
 
https://learn.javascript.ru/task/tree-info/solution/
http://plnkr.co/edit/L3ITT6sSOOYYDW74tWN2?p=preview
 */

////////////////

/*
var lis = document.querySelectorAll('li');

function logs(list) {
  for (var i = 0; i < list.length; i++) {
    // получаем "текстовый объект", не элемент! - list[i].firstChild
    // получаем из него данные - свойстово .data - Иначе при преобразованию в строку автовызовется toString() и мы получим [object Text] вместо содержания!
    // удаляем с помощью .trim() лишние пробелы, табуляцию и переносы строк
    var text = list[i].firstChild.data.trim(),
        num = list[i].querySelectorAll('li').length;
    console.log(text + ' : ' + num);
  }
}

logs(lis);
*/

////////////////

/*
var lis = document.getElementsByTagName('li');

for (var i = 0; i < lis.length; i++) {
  // получить название из текстового узла
  var title = lis[i].firstChild.data;

  title = title.trim(); // убрать лишние пробелы с концов

  // получить количество детей
  var childCount = lis[i].getElementsByTagName('li').length;

  alert(title + ': ' + childCount);
}
*/

/////////////////////////////////////////////////

/*
Бенчмаркинг методов поиска в DOM

Какой метод поиска элементов работает быстрее: getElementsByTagName(tag) или querySelectorAll(tag)?
Напишите код, который измеряет разницу между ними.
 */

////////////////

/*
function spans() {
  for (var i = 0; i < 100; i++) {
    document.write('<span>x</span>');
  }
}
spans();

console.time();
var a = document.getElementsByTagName('span');
console.timeEnd();
// default: 0.0250ms

console.time();
var b = document.querySelectorAll('span');
console.timeEnd();
// default: 0.0430ms
*/

/////////////////////////////////////////////////

/*
Получить второй LI

Есть длинный список ul:

<ul>
  <li>...</li>
  <li>...</li>
  <li>...</li>
  ...
</ul>

Как наиболее эффективно получить второй LI?
 */

////////////////

/*
// лучший вариант по скорости и простоте
document.querySelector('li:nth-child(2)');

// хороший
document.getElementsByTagName('li')[1];

// так себе...
document.querySelectorAll('li')[1];
*/

/////////////////////////////////////////////////

/*
Полифилл для matches

Метод elem.matches(css) в некоторых старых браузерах поддерживается под старым именем matchesSelector или с префиксами, то есть: webkitMatchesSelector (старый Chrome, Safari), mozMatchesSelector (старый Firefox) или Element.prototype.msMatchesSelector (старый IE).
Создайте полифилл, который гарантирует стандартный синтаксис elem.matches(css) для всех браузеров.
 */

////////////////

/*
(function() {
  if (!Element.prototype.matches) {
    Element.prototype.matches =
      
      Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||

      function(str) {
        if (this === document.querySelector(str)) return true;
        return false;
      };
  }
})();
*/

/////////////////////////////////////////////////

/*
Полифилл для closest

Метод elem.closest(css) для поиска ближайшего родителя, удовлетворяющего селектору css, не поддерживается некоторыми браузерами, например IE11-.
Создайте для него полифилл.
 */

////////////////

/*
(function() {
  if (!Element.prototype.closest) {
    Element.prototype.closest = function(str) {
      var elem = this;

      while (elem) {
        if (elem === document.querySelector(str)) return elem;

        elem = elem.parentElement;
      }

      return null;
    };
  }
})();
*/

////////////////

/*
// вариант из учебника сслылается на другой полифил - .matches
(function() {

  // проверяем поддержку
  if (!Element.prototype.closest) {

    // реализуем
    Element.prototype.closest = function(css) {
      var node = this;

      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
})();
*/

/////////////////////////////////////////////////

/*
Полифилл для textContent

Свойство textContent не поддерживается IE8. Однако, там есть свойство innerText.
Создаёте полифилл, который проверяет поддержку свойства textContent, и если её нет – создаёт его, используя innerText. Получится, что в IE8 «новое» свойство textContent будет «псевдонимом» для innerText.
Хотя свойство innerText и работает по-иному, нежели textContent, но в некоторых ситуациях они могут быть взаимозаменимы. Именно на них направлен полифилл.
 */

////////////////

/*
(function() {
  if (!Element.prototype.textContent) {
    Element.prototype.textContent = Element.prototype.innerText;
  }
})();
*/

////////////////

/*
// решение из учебника
(function() {
  // проверяем поддержку
  if (document.documentElement.textContent === undefined) {

    // определяем свойство
    Object.defineProperty(HTMLElement.prototype, 'textContent', {
      get: function() {
        return this.innerText;
      },
      set: function(value) {
        this.innerText = value;
      }
    });
  }
})();
*/

////////////////

// Оба варианта в IE8 не работают :(

////////////////

// Полифил для атрибута hidden - для IE11-

/*
(function() {
  if (document.documentElement.hidden === undefined) {
    Object.defineProperty(Element.prototype, "hidden", {
      set: function(value) {
        this.setAttribute('hidden', value);
      },
      get: function() {
        return this.getAttribute('hidden');
      }
    });
  }
})();
*/

////////////////

// Полифил для метода nodeA.compareDocumentPosition(nodeB) - для IE8-

/*
// код с http://compatibility.shwups-cms.ch/en/polyfills/?&id=82
(function() {
  var el = document.documentElement;
  if (!el.compareDocumentPosition && el.sourceIndex !== undefined) {

    Element.prototype.compareDocumentPosition = function(other) {
      return (this != other && this.contains(other) && 16) +
        (this != other && other.contains(this) && 8) +
        (this.sourceIndex >= 0 && other.sourceIndex >= 0 ?
          (this.sourceIndex < other.sourceIndex && 4) +
          (this.sourceIndex > other.sourceIndex && 2) : 1
        ) + 0;
    };
  }
})();
*/

/////////////////////////////////////////////////

/*
Получите пользовательский атрибут

Получите div в переменную.
Получите значение атрибута "data-widget-name" в переменную.
Выведите его.

<body>
  <div id="widget" data-widget-name="menu">Выберите жанр</div>
  <script>
    //
  </script>
</body>
 */

////////////////

/*
document.body.innerHTML = '<div id="widget" data-widget-name="menu">Выберите жанр</div>';
var div = document.querySelector('#widget'),
    dat = div.dataset.widgetName;

// в IE10-
var dat2 = div.getAttribute('data-widget-name');
*/

/////////////////////////////////////////////////

/*
Поставьте класс ссылкам

Сделайте желтыми внешние ссылки, добавив им класс external.
Все ссылки без href, без протокола и начинающиеся с http://internal.com считаются внутренними.

<style>
  .external {
    background-color: yellow
  }
</style>
<a name="list">список</a>
<ul>
  <li><a href="http://google.com">http://google.com</a></li>
  <li><a href="/tutorial">/tutorial.html</a></li>
  <li><a href="local/path">local/path</a></li>
  <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
  <li><a href="http://nodejs.org">http://nodejs.org</a></li>
  <li><a href="http://internal.com/test">http://internal.com/test</a></li>
</ul>
 */

////////////////

/*
var linksHttp = document.querySelectorAll('a[href^="http"]');
var linksFtp = document.querySelectorAll('a[href^="ftp"]');

for (var i = 0; i < linksHttp.length - 1; i++) linksHttp[i].classList.add('external');
linksFtp[0].classList.add('external');
*/

////////////////

/*
// вариант с учебника
var css = 'a[href*="://"]:not([href^="http://internal.com"])';
var links = document.querySelectorAll(css);

for (var i = 0; i < links.length; i++) {
  links[i].classList.add('external');
}
*/

/////////////////////////////////////////////////

/*
Удаление элементов

Напишите полифилл для метода remove для старых браузеров.

Вызов elem.remove():
- Если у elem нет родителя – ничего не делает.
- Если есть – удаляет элемент из родителя.

<div>Это</div>
<div>Все</div>
<div>Элементы DOM</div>

<script>
  // ваш код полифилла
  var elem = document.body.children[0];
  elem.remove(); // <-- вызов должен удалить элемент
</script>
 */

////////////////

/*
// Полифил для метода elem.remove() - для IE11-
(function() {
  if (!Element.prototype.remove) {
    Element.prototype.remove = function() {
      if (this.parentElement) return this.parentElement.removeChild(this);
    };
  }
})();
*/

////////////////

/*
// решение с учебника
if (!Element.prototype.remove) {
  Element.prototype.remove = function remove() {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}
*/

/////////////////////////////////////////////////

/*
insertAfter

Напишите функцию insertAfter(elem, refElem), которая добавит elem после узла refElem.

<div>Это</div>
<div>Элементы</div>

<script>
  var elem = document.createElement('div');
  elem.innerHTML = '<b>Новый элемент</b>';

  function insertAfter(elem, refElem) { // ваш код }

  var body = document.body;

  // вставить elem после первого элемента
  insertAfter(elem, body.firstChild); // <--- должно работать

  // вставить elem за последним элементом
  insertAfter(elem, body.lastChild); // <--- должно работать
</script>
 */

////////////////

/*
function insertAfter(elem, refElem) {
  if (!refElem.parentElement) throw new Error('Нет родителя Element!');
  return refElem.parentElement.insertBefore(elem, refElem.nextSibling);
}
*/

/////////////////////////////////////////////////

/*
removeChildren

Напишите функцию removeChildren, которая удаляет всех потомков элемента.

<table id="table">
  <tr>
    <td>Это</td>
    <td>Все</td>
    <td>Элементы DOM</td>
  </tr>
</table>

<ol id="ol">
  <li>Вася</li>
  <li>Петя</li>
  <li>Маша</li>
  <li>Даша</li>
</ol>

<script>
  function removeChildren(elem) { // ваш код }

  removeChildren(table); // очищает таблицу
  removeChildren(ol); // очищает список
</script>
 */

////////////////

/*
// мое решение best of the best :) - возвращает всех удаленных детей в виде коллекции

function removeChildren(elem) {
  var childs = elem.children,
      elemClone = elem.cloneNode(false);

  elem.parentElement.replaceChild(elemClone, elem);
  return childs;
}
*/

////////////////

/*
// с учебника: Решение через DOM
function removeChildren(elem) {
  while (elem.lastChild) {
    elem.removeChild(elem.lastChild);
  }
}
*/

////////////////

/*
// с учебника: Альтернатива через innerHTML
function removeChildren(elem) {
  try {
    elem.innerHTML = '';
  } catch (e) {
    while (elem.firstChild) {
      elem.removeChild(elem.firstChild);
    }
  }
}
*/

/////////////////////////////////////////////////

/*
Создать список

Напишите интерфейс для создания списка.
Для каждого пункта:
1) Запрашивайте содержимое пункта у пользователя с помощью prompt.
2) Создавайте пункт и добавляйте его к UL.
3) Процесс прерывается, когда пользователь нажимает ESC или вводит пустую строку.
Все элементы должны создаваться динамически.
Если посетитель вводит теги – пусть в списке они показываются как обычный текст.
 */

////////////////

/*
var ulElem = document.createElement('ul');
document.body.appendChild(ulElem);

var str = prompt('кладем в список', '');

while (str) {
  var liElem = document.createElement('li');
  // liElem.appendChild(document.createTextNode(str)); // кроссбраузерно
  liElem.textContent = str;
  ulElem.appendChild(liElem);
  str = prompt('кладем в список', '');
}
*/

////////////////

/*
// решение с учебника
var ul = document.createElement('ul');
document.body.appendChild(ul);

while (true) {
  var data = prompt("Введите текст для пункта списка", "");

  if (!data) {
    break;
  }

  var li = document.createElement('li');
  li.appendChild(document.createTextNode(data));
  ul.appendChild(li);
}
*/

/////////////////////////////////////////////////

/*
Создайте дерево из объекта

Напишите функцию, которая создаёт вложенный список UL/LI (дерево) из объекта.

var data = {
  "Рыбы": {
    "Форель": {},
    "Щука": {}
  },

  "Деревья": {
    "Хвойные": {
      "Лиственница": {},
      "Ель": {}
    },
    "Цветковые": {
      "Берёза": {},
      "Тополь": {}
    }
  }
};

var container = document.getElementById('container');
createTree(container, data); // создаёт

Результат (дерево).
Выберите один из двух способов решения этой задачи:
- Создать строку, а затем присвоить через container.innerHTML.
- Создавать узлы через методы DOM.
Если получится – сделайте оба.
P.S. Желательно, чтобы в дереве не было лишних элементов, в частности – пустых <ul></ul> на нижнем уровне.
http://plnkr.co/edit/TfoKQ3RxKycHvxYZG4zk?p=preview
 */

////////////////

/*
var data = {
  "Рыбы": {
    "Форель": {},
    "Щука": {}
  },
  "Деревья": {
    "Хвойные": {
      "Лиственница": {},
      "Ель": {}
    },
    "Цветковые": {
      "Берёза": {},
      "Тополь": {}
    }
  }
};

var container = document.getElementById('container');
createTree(container, data);
*/

/*
// с учебника: Через innerHTML
function createTree(container, obj) {
  container.innerHTML = createTreeText(obj);
}

function createTreeText(obj) { // отдельная рекурсивная функция
  var li = '';
  for (var key in obj) {
    li += '<li>' + key + createTreeText(obj[key]) + '</li>';
  }
  if (li) {
    var ul = '<ul>' + li + '</ul>';
  }
  return ul || '';
}
*/

////////////////

/*
// с учебника: Через DOM
function createTree(container, obj) {
  container.appendChild(createTreeDom(obj));
}

function createTreeDom(obj) {
  // если нет детей, то рекурсивный вызов ничего не возвращает
  // так что вложенный UL не будет создан
  if (isObjectEmpty(obj)) return;

  var ul = document.createElement('ul');

  for (var key in obj) {
    var li = document.createElement('li');
    li.innerHTML = key;

    var childrenUl = createTreeDom(obj[key]);
    if (childrenUl) li.appendChild(childrenUl);

    ul.appendChild(li);
  }
  return ul;
}

function isObjectEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}
*/

/////////////////////////////////////////////////

/*
Дерево

Есть дерево, организованное в виде вложенных списков <ul>/<li>.
Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. Узлы нижнего уровня, без детей – пропускайте.
http://plnkr.co/edit/0GuCmq4lzw2zV0FGn4ur?p=preview
 */

////////////////

/*
var list = document.querySelectorAll('li');

function counts(list) {
  for (var i = 0; i < list.length; i++) {
    var node = list[i].firstChild,
        num = list[i].querySelectorAll('li').length;

    if (num) node.data += ' [' + num + ']';
  }
}
counts(list);
*/

////////////////

/*
// решение с учебника
var lis = document.getElementsByTagName('li');

for (var i = 0; i < lis.length; i++) {
  // получить количество детей
  var childCount = lis[i].getElementsByTagName('li').length;
  if (!childCount) continue;
  // добавить кол-во детей к текстовому узлу
  lis[i].firstChild.data += ' [' + childCount + ']';
}
*/

/////////////////////////////////////////////////

/*
Создать календарь в виде таблицы

Напишите функцию, которая умеет генерировать календарь для заданной пары (месяц, год).
Календарь должен быть таблицей, где каждый день – это TD. У таблицы должен быть заголовок с названиями дней недели, каждый день – TH.
Синтаксис:
createCalendar(id, year, month);
Такой вызов должен генерировать текст для календаря месяца month в году year, а затем помещать его внутрь элемента с указанным id.
Например:
createCalendar("cal", 2012, 9); // сгенерирует в <div id=„cal“></div> следующий календарь:
P.S. Достаточно сгенерировать календарь, кликабельным его делать не нужно.
 */

////////////////

/*
//решение с учебника
function createCalendar(id, year, month) {
  var elem = document.getElementById(id);

  var mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
  var d = new Date(year, mon);

  var table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

  // заполнить первый ряд от понедельника
  // и до дня, с которого начинается месяц
  // * * * | 1  2  3  4
  for (var i = 0; i < getDay(d); i++) {
    table += '<td></td>';
  }

  // ячейки календаря с датами
  while (d.getMonth() == mon) {
    table += '<td>' + d.getDate() + '</td>';

    if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
      table += '</tr><tr>';
    }

    d.setDate(d.getDate() + 1);
  }

  // добить таблицу пустыми ячейками, если нужно
  if (getDay(d) != 0) {
    for (var i = getDay(d); i < 7; i++) {
      table += '<td></td>';
    }
  }

  // закрыть таблицу
  table += '</tr></table>';

  // только одно присваивание innerHTML
  elem.innerHTML = table;
}

function getDay(date) { // получить номер дня недели, от 0(пн) до 6(вс)
  var day = date.getDay();
  if (day == 0) day = 7;
  return day - 1;
}

createCalendar("calendar", 2012, 9);
*/

/////////////////////////////////////////////////

/*
Часики с использованием "setInterval"

Создайте цветные часики как в примере ниже:
 */

////////////////

/*
function getTime() {
  var date = new Date();

  var hh = date.getHours();
  if (hh < 10) hh = '0' + hh;

  var mm = date.getMinutes();
  if (mm < 10) mm = '0' + mm;

  var ss = date.getSeconds();
  if (ss < 10) ss = '0' + ss;

  var hour = document.querySelector('#hour');
  var minute = document.querySelector('#minute');
  var second = document.querySelector('#second');

  hour.textContent = hh;
  minute.textContent = mm;
  second.textContent = ss;
}

var timerId;

function clockStart() {
  var elem = document.createElement('div');
  elem.id = 'clock';
  elem.innerHTML = '<span id="hour"></span> : <span id="minute"></span> : <span id="second"></span>';
  document.body.appendChild(elem);

  hour.style.color = 'red';
  minute.style.color = 'green';
  second.style.color = 'blue';

  getTime();
  timerId = setInterval(getTime, 1000);
}

function clockStop() {
  clearInterval(timerId);
  timerId = null;
}

clockStart();
// clockStop();
*/

////////////////

/*
// решение с учебника
var timerId;

function update() {
  var clock = document.getElementById('clock');
  var date = new Date();

  var hours = date.getHours();
  if (hours < 10) hours = '0' + hours;
  clock.children[0].innerHTML = hours;

  var minutes = date.getMinutes();
  if (minutes < 10) minutes = '0' + minutes;
  clock.children[1].innerHTML = minutes;

  var seconds = date.getSeconds();
  if (seconds < 10) seconds = '0' + seconds;
  clock.children[2].innerHTML = seconds;
}

function clockStart() {
  setInterval(update, 1000);
  update(); // <--  начать тут же, не ждать 1 секунду пока setInterval сработает
}

function clockStop() {
  clearInterval(timerId);
  timerId = null;
}

clockStart();
*/

/////////////////////////////////////////////////

/*
Вставьте элементы в конец списка

Напишите код для вставки текста html в конец списка ul с использованием метода insertAdjacentHTML. Такая вставка, в отличие от присвоения innerHTML+=, не будет перезаписывать текущее содержимое.
Добавьте к списку ниже элементы <li>3</li><li>4</li><li>5</li>:

<ul>
  <li>1</li>
  <li>2</li>
</ul>
 */

////////////////

/*
var str = '<li>3</li><li>4</li><li>5</li>';
var ul = document.querySelector('ul');
ul.insertAdjacentHTML('beforeEnd', str);
*/

/////////////////////////////////////////////////

/*
Отсортировать таблицу

Есть таблица:

Имя       Фамилия   Отчество        Возраст

Вася      Петров    Александрович   10
Петя      Иванов    Петрович        15
Владимир  Ленин     Ильич           9
...       ...       ...             ...

Строк в таблице много: может быть 20, 50, 100… Есть и другие элементы в документе.
Как бы вы предложили отсортировать содержимое таблицы по полю Возраст? Обдумайте алгоритм, реализуйте его.
Как сделать, чтобы сортировка работала как можно быстрее? А если в таблице 10000 строк (бывает и такое)?
P.S. Может ли здесь помочь DocumentFragment?
P.P.S. Если предположить, что у нас заранее есть массив данных для таблицы в JavaScript – что быстрее: отсортировать эту таблицу или сгенерировать новую?
 */

////////////////

/*
console.time();

var table = document.querySelector('table');
var tbody = table.lastChild;
// сделал из колекции массив (без заголовка)
var arr2 = [].slice.call(table.children[1].children);

// доступ в последней ячейке
// arr2[0].children[3].textContent;

// 2й вариант доступа
// arr2[0].lastChild.innerHTML;

arr2.sort(function(a, b) {
  // return a.children[3].textContent - b.children[3].textContent;
  // как вариант
  return a.lastChild.innerHTML - b.lastChild.innerHTML;
});

table.removeChild(tbody);
tbody = tbody.cloneNode(false);

for (var i = 1; i < arr2.length; i++) tbody.appendChild(arr2[i])
table.appendChild(tbody);

console.timeEnd();
//default: 4.00ms
*/

/////////////////////////////////////////////////

// Полифил с поддержкой IE8- getComputedStyle, используется currentStyle для IE8-

// если значение CSS задано в % - вернет %
/*
function getStyle(elem) {
  return window.getComputedStyle ? getComputedStyle(elem, '') : elem.currentStyle;
}
*/

////////////////

// полифил для IE8-, который возвращает CSS-значения в px
/*
function getIEComputedStyle(elem, prop) {
  var value = elem.currentStyle[prop] || 0;

  // we use 'left' property as a place holder so backup values
  var leftCopy = elem.style.left;
  var runtimeLeftCopy = elem.runtimeStyle.left;

  // assign to runtimeStyle and get pixel value
  elem.runtimeStyle.left = elem.currentStyle.left;
  elem.style.left = (prop === "fontSize") ? "1em" : value;
  value = elem.style.pixelLeft + "px";

  // restore values for left
  elem.style.left = leftCopy;
  elem.runtimeStyle.left = runtimeLeftCopy;

  return value;
}
 */

/////////////////////////////////////////////////

/*
Скругленая кнопка со стилями из JavaScript

Создайте кнопку в виде элемента <a> с заданным стилем, используя JavaScript.
В примере ниже такая кнопка создана при помощи HTML/CSS. В вашем решении кнопка должна создаваться, настраиваться и добавляться в документ при помощи только JavaScript, без тегов <style> и <a>.

<style>
  .button {
    -moz-border-radius: 8px;
    -webkit-border-radius: 8px;
    border-radius: 8px;
    border: 2px groove green;
    display: block;
    height: 30px;
    line-height: 30px;
    width: 100px;
    text-decoration: none;
    text-align: center;
    color: red;
    font-weight: bold;
  }
</style>

<a class="button" href="/">Нажми меня</a>
 */

////////////////

/*
var a = document.createElement('a');
a.href = '/';
a.classList.add('button');
a.innerHTML = 'Нажми меня';
a.style.cssText = '-moz-border-radius: 8px; -webkit-border-radius: 8px; border-radius: 8px; border: 2px groove green; display: block; height: 30px; line-height: 30px; width: 100px; text-decoration: none; text-align: center; color: red; font-weight: bold;';
document.body.append(a);
*/

////////////////

/*
// решение с учебника
var a = document.createElement('a');
a.className = 'button';
a.appendChild(document.createTextNode('Нажми меня'));
a.href = '/';

var s = a.style
s.MozBorderRadius = s.WebkitBorderRadius = s.borderRadius = '8px';
s.border = '2px groove green';
s.display = 'block';
s.height = '30px';
s.lineHeight = '30px';
s.width = '100px';
s.textDecoration = 'none';
s.textAlign = 'center';
s.color = 'red';
s.fontWeight = 'bold';
 */

/////////////////////////////////////////////////

/*
Создать уведомление

Напишите функцию showNotification(options), которая показывает уведомление, пропадающее через 1.5 сек.
Описание функции:

/
 * Показывает уведомление, пропадающее через 1.5 сек
 *
 * @param options.top {number} вертикальный отступ, в px
 * @param options.right {number} правый отступ, в px
 * @param options.cssText {string} строка стиля
 * @param options.className {string} CSS-класс
 * @param options.html {string} HTML-текст для показа
/
function showNotification(options) {
  // ваш код
}

Пример использования:
// покажет элемент с текстом "Привет" и классом welcome справа-сверху окна

showNotification({
  top: 10,
  right: 10,
  html: "Привет",
  className: "welcome"
});

Элемент уведомления должен иметь CSS-класс notification, к которому добавляется класс из options.className, если есть. Исходный документ содержит готовые стили.
 */

////////////////

/*
// CSS
.hide { visibility: hidden; }
 */

/*
var timer1, timer2;

function showNotification(options) {
  var note = document.createElement('div');

  // чтобы не было undefined, надо запилить свойства по-умолчанию
  if (options.className) note.classList.add(options.className);
  if (options.cssText) note.style.cssText = options.cssText;

  note.style.marginTop = (options.top || 0) + 'px';
  note.style.marginRight = (options.right || 0) + 'px';
  note.innerHTML = options.html || '';

  document.body.append(note);

  // вариант "мигания" 1 - через внешний CSS-класс
  timer1 = setInterval(function() {
    note.classList.toggle('hide');
  }, 2000);

  // вариант "мигания" 2 - через JS
  note.style.visibility = 'visible';
  timer2 = setInterval(function() {
    if (note.style.visibility === 'visible') {
      note.style.visibility = 'hidden';
    } else {
      note.style.visibility = 'visible';
    }
  }, 2000);
}

function stopNotification() {
  // очистка "мигания" 1
  clearInterval(timer1);

  // очистка "мигания" 2
  clearInterval(timer2);
}

showNotification({
  top: 10,
  right: 10,
  html: "Привет",
  className: "welcome"
});

// stopNotification();
*/

/////////////////////////////////////////////////

// замечательный способ для проверки, виден ли элемент
/*
function isHidden(elem) {
  return !elem.offsetWidth && !elem.offsetHeight;
}
*/

/*
- Работает, даже если родителю элемента установлено свойство display:none.
- Работает для всех элементов, кроме TR, с которым возникают некоторые проблемы в разных браузерах. Обычно, проверяются не TR, поэтому всё ок.
- Считает элемент видимым, даже если позиционирован за пределами экрана или имеет свойство visibility:hidden.
- «Схлопнутый» элемент, например пустой div без высоты и ширины, будет считаться невидимым.
*/

/////////////////////////////////////////////////

/*
Найти размер прокрутки снизу

Свойство elem.scrollTop содержит размер прокрученной области при отсчете сверху. А как подсчитать размер прокрутки снизу?
Напишите соответствующее выражение для произвольного элемента elem.
Проверьте: если прокрутки нет вообще или элемент полностью прокручен – оно должно давать ноль.
 */

////////////////

// elem.scrollHeight - (elem.scrollTop + elem.clientHeight);

// elem.scrollHeight - elem.scrollTop - elem.clientHeight;

/////////////////////////////////////////////////

/*
Узнать ширину полосы прокрутки

Напишите код, который возвращает ширину стандартной полосы прокрутки. Именно самой полосы, где ползунок. Обычно она равна 16px, в редких и мобильных браузерах может колебаться от 14px до 18px, а кое-где даже равна 0px.
P.S. Ваш код должен работать на любом HTML-документе, независимо от его содержимого.
 */

////////////////

// если прокрутка вертикальная
// elem.offsetWidth - elem.clientLeft * 2 - elem.clientWidth;

// если прокрутка горизонтальная
// elem.offsetHeight - elem.clientTop * 2 - elem.clientHeight;

/////////////////////////////////////////////////

/*
Подменить div на другой с таким же размером

Посмотрим следующий случай из жизни. Был текст, который, в частности, содержал div с зелеными границами:
Допишите код Валеры, сделав так, чтобы текст оставался на своем месте после того, как DIV будет смещен.
http://plnkr.co/edit/CW9zVRzBUjsbrScjxRdN?p=preview
 */

////////////////

/*
var div = document.getElementById('moving-div');
var divClone = div.cloneNode(true);

div.parentElement.insertBefore(divClone, div);
divClone.style.visibility = 'hidden';

div.style.position = 'absolute';
div.style.right = div.style.top = 0;
*/

////////////////

/*
// решение с учебника
var div = document.getElementById('moving-div');

var placeHolder = document.createElement('div');
placeHolder.style.height = div.offsetHeight + 'px';
// можно и width, но в этом примере это не обязательно

// IE || другой браузер
var computedStyle = div.currentStyle || getComputedStyle(div, '');

placeHolder.style.marginTop = computedStyle.marginTop;
placeHolder.style.marginBottom = computedStyle.marginBottom;
*/

/////////////////////////////////////////////////

/*
Поместите мяч в центр поля

- Менять CSS нельзя, мяч должен переносить в центр ваш скрипт, через установку нужных стилей элемента.
- JavaScript-код должен работать при разных размерах мяча (10, 20, 30 пикселей) без изменений.
- JavaScript-код должен работать при различных размерах и местоположениях поля на странице без изменений. Также он не должен зависеть от ширины рамки поля border.
P.S. Да, центрирование можно сделать при помощи чистого CSS, но задача именно на JavaScript. Далее будут другие темы и более сложные ситуации, когда JavaScript будет уже точно необходим, это – своего рода «разминка».
http://plnkr.co/edit/x01bMLVUDcfSUezwuIuU?p=preview
 */

////////////////

/*
// некоторые браузеры не понимают дробные пиксели - поэтому Math.round()
ball.style.left = Math.round(field.clientWidth / 2 - ball.clientWidth / 2) + 'px';
ball.style.top = Math.round(field.clientHeight / 2 - ball.clientHeight / 2) + 'px';
// чтобы код работал стабильно, следует добавлять width/height в атрибуты <img src="ball.png" width="40" height="40" id="ball"> или в CSS
*/

/////////////////////////////////////////////////

/*
Расширить элемент

В <body> есть элемент <div> с заданной шириной width.
Задача – написать код, который «распахнет» <div> по ширине на всю страницу.
Исходный документ (<div> содержит текст и прокрутку)
P.S. Пользоваться следует исключительно средствами JS, CSS в этой задаче менять нельзя. Также ваш код должен быть универсален и не ломаться, если цифры в CSS станут другими.
P.P.S. При расширении элемент <div> не должен вылезти за границу <body>.
http://plnkr.co/edit/06CbsO05Qd9Tjt7j4zE4?p=preview
 */

////////////////

/*
var elem = document.getElementById('elem');

// вариант 1 - просто и адаптивно
elem.style.width = 'auto';

// вариант 2 - вычислять (там вся проблема в "паддингах" внутреннего элемента, а не в ширине "прокрутки")
elemStyle = getComputedStyle(elem);
elem.style.width = document.body.clientWidth - parseInt(elemStyle.paddingLeft) - parseInt(elemStyle.paddingRight) + 'px';
// не адаптивно, решение - вешать события для пересчета
*/

/////////////////////////////////////////////////

/*
// получение размеров страницы с учётом прокрутки
var scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);
*/

/////////////////////////////////////////////////

/*
// самый кросс-браузерный способ получения прокрутки, учитывающий IE7-
var html = document.documentElement;
var body = document.body;
var scrollTop = html.scrollTop || body && body.scrollTop || 0;
scrollTop -= html.clientTop; // в IE7- <html> смещён относительно (0,0)
alert( "Текущая прокрутка: " + scrollTop );
*/

/////////////////////////////////////////////////

/*
Полифилл для pageYOffset в IE8

Обычно в IE8 не поддерживается свойство pageYOffset. Напишите полифилл для него.
При подключённом полифилле такой код должен работать в IE8:
// текущая прокрутка страницы в IE8
alert( window.pageYOffset );
 */

////////////////

/*
// использовал самый кросс-браузерный способ получения прокрутки, учитывающий IE7-
if (!window.pageYOffset) {
  Object.defineProperty(window, 'pageYOffset', {
    get: function() {
      var html = document.documentElement;
      var body = document.body;
      var scrollTop = html.scrollTop || body && body.scrollTop || 0;

      scrollTop -= html.clientTop; // в IE7- <html> смещён относительно (0,0)

      return scrollTop;
    }
  });
}
*/

////////////////

/*
// решение с учебника
Object.defineProperty(window, 'pageYOffset', {
  get: function() {
    return document.documentElement.scrollTop;
  }
});
*/

/////////////////////////////////////////////////

/*
Найдите координаты точки в документе

В ифрейме ниже вы видите документ с зеленым «полем».
При помощи JavaScript найдите координаты указанных стрелками углов относительно окна браузера.
Для тестирования в документ добавлено удобство: клик в любом месте отображает координаты мыши относительно окна.
Ваш код должен при помощи DOM получить четыре пары координат:
- Левый-верхний угол снаружи, это просто.
- Правый-нижний угол снаружи, это тоже просто.
- Левый-верхний угол внутри, это чуть сложнее.
- Правый-нижний угол внутри, это ещё сложнее, но можно сделать даже несколькими способами.
Они должны совпадать с координатами, которые вы получите кликом по полю.
P.S. Код не должен быть как-то привязан к конкретным размерам элемента, стилям, наличию или отсутствию рамки.
http://plnkr.co/edit/5Dfm3iu2BuJJr47pPtOg?p=preview
 */

////////////////

/*
var field = document.getElementById('field');

var x1 = field.getBoundingClientRect().left;
var y1 = field.getBoundingClientRect().top;
var mark1 = x1 + ' : ' + y1;

var x2 = field.getBoundingClientRect().right;
var y2 = field.getBoundingClientRect().bottom;
var mark2 = x2 + ' : ' + y2;

var x3 = field.getBoundingClientRect().left + field.clientLeft;
var y3 = field.getBoundingClientRect().top + field.clientTop;
var mark3 = x3 + ' : ' + y3;

var x4 = field.getBoundingClientRect().right - field.clientLeft;
var y4 = field.getBoundingClientRect().bottom - field.clientTop;
var mark4 = x4 + ' : ' + y4;
*/

////////////////

/*
// решениие с учебника
var coords = elem.getBoundingClientRect();

var coords1 = [coords.left, coords.top];

var coords2 = [coords.right, coords.bottom];

var coords3 = [coords.left + field.clientLeft, coords.top + field.clientTop];

// вариант 1 - получаем данные из CSS
var coords4 = [
  coords.right - parseInt(getComputedStyle(field).borderRightWidth),
  coords.bottom - parseInt(getComputedStyle(field).borderBottomWidth)
];

// вариант 2 - вычисляем
var coords4 = [
  coords.left + field.clientLeft + field.clientWidth,
  coords.top + field.clientTop + field.clientHeight
];
*/

/////////////////////////////////////////////////

/*
Разместить заметку рядом с элементом

Создайте функцию positionAt(anchor, position, elem), которая позиционирует элемент elem, в зависимости от position, сверху ("top"), справа ("right") или снизу ("bottom") от элемента anchor.
Используйте её, чтобы сделать функцию showNote(anchor, position, html), которая показывает элемент с классом note и текстом html на позиции position рядом с элементом anchor.
http://plnkr.co/edit/hQROZcVYSGnQvKdiAVy3?p=preview
 */

////////////////

/*
function positionAt(anchor, position, elem) {
  var ancPos = anchor.getBoundingClientRect();

  switch(position) {
    case 'top':
      elem.style.left = ancPos.left + 'px';
      elem.style.top = ancPos.top - elem.offsetHeight + 'px';
      break;

    case 'right':
      elem.style.left = ancPos.right + 'px';
      elem.style.top = ancPos.top + 'px';
      break;

    case 'bottom':
      elem.style.left = ancPos.left + 'px';
      elem.style.top = ancPos.bottom + 'px';
      break;
  }
}

function showNote(anchor, position, html) {
  var note = document.createElement('span');
  note.innerHTML = html;
  note.classList.add('note');
  anchor.parentElement.append(note);

  positionAt(anchor, position, note);
}

var blockquote = document.querySelector('blockquote');
showNote(blockquote, 'top', 'заметка сверху');
showNote(blockquote, 'right', 'заметка справа');
showNote(blockquote, 'bottom', 'заметка снизу');
*/

/////////////////////////////////////////////////

/*
// функция для получения координат элемента относительно страницы
function getCoords(elem) { // кроме IE8-
  var box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    left: box.left + window.pageXOffset
  };
}
*/

////////////////

/*
// кросс-браузерный вариант с поддержкой IE8-
function getCoords(elem) {
  var box = elem.getBoundingClientRect(),
      body = document.body,
      docEl = document.documentElement,
      scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop,
      scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft,
      clientTop = docEl.clientTop || body.clientTop || 0,
      clientLeft = docEl.clientLeft || body.clientLeft || 0,
      top = box.top + scrollTop - clientTop,
      left = box.left + scrollLeft - clientLeft;

  return { top: top, left: left };
}
*/

/////////////////////////////////////////////////

/*
Область видимости для документа

Напишите функцию getDocumentScroll(), которая возвращает объект с информацией о текущей прокрутке и области видимости.
Свойства объекта-результата:
- top – координата верхней границы видимой части (относительно документа).
- bottom – координата нижней границы видимой части (относительно документа).
- height – полная высота документа, включая прокрутку.
В этой задаче учитываем только вертикальную прокрутку: горизонтальная делается аналогично, а нужна сильно реже.
 */

////////////////

/*
function getDocumentScroll() {
  var screen = document.documentElement.clientHeight,
      top = window.pageYOffset,
      bottom = top + screen,
      height = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );

  return { top: top, bottom: bottom, height: height };
}

getDocumentScroll();
*/

/////////////////////////////////////////////////

/*
Разместить заметку рядом с элементом (absolute)

Модифицируйте решение задачи Разместить заметку рядом с элементом, 
https://learn.javascript.ru/task/position-at
чтобы при прокрутке страницы заметка не убегала от элемента.
Используйте для этого координаты относительно документа и position:absolute вместо position:fixed.
В качестве исходного документа используйте решение задачи Разместить заметку рядом с элементом, 
http://plnkr.co/edit/6YrC7j9H3iDtSZVptEb7?p=preview
для тестирования прокрутки добавьте стиль <body style="height: 2000px">.
 */

////////////////

/*
function showNote(anchor, position, html) {
  var note = document.createElement('span');
  note.innerHTML = html;
  note.classList.add('note');

  // добавлено
  note.style.position = 'absolute';

  anchor.parentElement.append(note);
  positionAt(anchor, position, note);
}
*/

/////////////////////////////////////////////////

/*
Разместить заметку внутри элемента

Расширьте предыдущую задачу Разместить заметку рядом с элементом (absolute): 
https://learn.javascript.ru/task/position-at-absolute
научите функцию positionAt(anchor, position, elem) вставлять elem внутрь anchor.

Новые значения position:
top-out, right-out, bottom-out – работают так же, как раньше, то есть вставляют elem над/справа/под anchor.
top-in, right-in, bottom-in – вставляют elem внутрь anchor: к верхней границе/правой/нижней.

Например:
// покажет note сверху blockquote
positionAt(blockquote, "top-out", note);
// покажет note сверху-внутри blockquote
positionAt(blockquote, "top-in", note);

В качестве исходного документа возьмите решение задачи Разместить заметку рядом с элементом (absolute).
http://plnkr.co/edit/LcGbZ1EBByA95MYSEzid?p=preview
 */

function getCoords(elem) {
  var box = elem.getBoundingClientRect();

  var body = document.body;
  var docEl = document.documentElement;

  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  var clientTop = docEl.clientTop || body.clientTop || 0;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;

  var top = box.top + scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;

  return {
    top: top,
    left: left
  };
}

function positionAt(anchor, position, elem) {

  var anchorCoords = getCoords(anchor);

  switch (position) {
    case "top-out":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
      break;

    case "top-in":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top + "px";
      break;

    case "right-out":
      elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
      elem.style.top = anchorCoords.top + "px";
      break;

    case "right-in":
      // добавил ширину
      elem.style.width = '200px';
      
      elem.style.left = anchorCoords.left + anchor.offsetWidth - elem.offsetWidth + "px";
      elem.style.top = anchorCoords.top + "px";
      break;

    case "bottom-out":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
      break;

    case "bottom-in":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top + anchor.offsetHeight - elem.offsetHeight + "px";
      break;
  }
}

function showNote(anchor, position, html) {

  var note = document.createElement('div');
  note.className = "note";
  note.innerHTML = html;
  document.body.appendChild(note);
  positionAt(anchor, position, note);
}

// проверка работоспособности
var blockquote = document.querySelector('blockquote');

showNote(blockquote, "top-out", "заметка сверху");
showNote(blockquote, "right-out", "заметка справа");
showNote(blockquote, "bottom-out", "заметка снизу");

showNote(blockquote, "top-in", "заметка сверху внутри");
showNote(blockquote, "right-in", "заметка справа внутри");
showNote(blockquote, "bottom-in", "заметка снизу внутри");
