'use strict';

/////////////////////////////////////////////////

/*
// for IE8-
function crossBrowserAddEventListener(element, event, func) {
  if (element.addEventListener) {
    // for normal browsers
    element.addEventListener(event, func, false);
    return true;
  } else {
    // for IE8-
    element.attachEvent('on' + event, func);
    return true;
  }
}
*/

/*
// for IE8-
function crossBrowserRemoveEventListener(element, event, func) {
  if (element.addEventListener) {
    // for normal browsers
    element.removeEventListener(event, func, false);
    return true;
  } else {
    // for IE8-
    element.detachEvent('on' + event, func);
    return true;
  }
}
*/

/////////////////////////////////////////////////

/*
Спрятать при клике

Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
http://plnkr.co/edit/PvgR6Kt1SYYd0g7C03vk?p=preview
 */

////////////////

/*
function hideText() {
  text.style.visibility = 'hidden';
}

hider.addEventListener('click', hideText);
*/

/////////////////////////////////////////////////

/*
Спрятаться

Создайте кнопку, при клике на которую, она будет скрывать сама себя.
 */

////////////////

/*
function hideThis() {
  this.style.visibility = 'hidden';
}

hider.addEventListener('click', hideThis);
*/

/////////////////////////////////////////////////

/*
Раскрывающееся меню

Создайте меню, которое раскрывается/сворачивается при клике:
P.S. HTML/CSS исходного документа понадобится изменить.
http://plnkr.co/edit/bG6JVYwmsYeLoUMP25nc?p=preview
 */

////////////////

/*
function toggleHide() {
  closeMark.classList.toggle('hide');
  openMark.classList.toggle('hide');
  list.classList.toggle('hide');
}

clickMe.addEventListener('click', toggleHide);
*/

////////////////

// решение с учебника
// http://plnkr.co/edit/oDrpWsrVRAZBJyFTnc41?p=preview

/////////////////////////////////////////////////

/*
Спрятать сообщение

Есть список сообщений. Добавьте каждому сообщению по кнопке для его скрытия.
P.S. Как лучше отобразить кнопку справа-сверху: через position:absolute или float:right? Почему?
http://plnkr.co/edit/tMa8lvfLgm2f6Fz7gLRk?p=preview
 */

////////////////

/*
var buttons = document.querySelectorAll('.remove-button');

function hide() {
  this.parentElement.classList.add('hide');
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', hide);
}
*/

/////////////////////////////////////////////////

/*
Карусель

Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
В дальнейшем к ней можно легко добавить анимацию, динамическую подгрузку и другие возможности.
P.S. В этой задаче разработка HTML/CSS-структуры составляет 90% решения.
http://plnkr.co/edit/0aep0ftqKRvuYpZQtz1N?p=preview
 */

////////////////

/*
var line = document.querySelector('.line');
var left = document.querySelector('.arrowLeft');
var right = document.querySelector('.arrowRight');

var widthImg = 130;
var widthScreen = 390;
var amount = line.children.length;
var finish = amount * widthImg - widthScreen;

// по 1, по 2, по 3
var each = 3;

function runLeft() {
  var val = parseInt(getComputedStyle(line).left);
  val -= widthImg * each;

  if (Math.abs(val) >= finish) {
    line.style.left = -finish + 'px';
  } else {
    line.style.left = val + 'px';
  }
}

function runRight() {
  var val = parseInt(getComputedStyle(line).left);
  val += widthImg * each;

  if (val >= 0) {
    line.style.left = '0px';
  } else {
    line.style.left = val + 'px';
  }
}

left.addEventListener('click', runLeft);
right.addEventListener('click', runRight);
*/

////////////////

// решение с учебника
// http://plnkr.co/edit/mmB7VI860TmlheRj7jlm?p=preview

/////////////////////////////////////////////////

/*
// Получение объекта-событие - кроссбраузерное решение для IE8-

function(event) {
  // В IE8- объект-событие записывается глобально в window
  event = event || window.event;

  // Вместо event.target в IE8- используется event.srcElement
  var target = event.target || event.srcElement;
}

// для остановки всплытия в IE8-
event.stopPropagation ? event.stopPropagation() : (event.cancelBubble=true);
*/

/////////////////////////////////////////////////

/*
Передвигать мяч по полю

Сделайте так, что при клике по полю мяч перемещался на место клика.
 
Требования:
- Мяч после перелёта должен становиться центром ровно под курсор мыши, если это возможно без вылета за край поля.
- CSS-анимация не обязательна, но желательна.
- Мяч должен останавливаться у границ поля, ни в коем случае не вылетать за них.
- При прокрутке страницы с полем ничего не должно ломаться.

Замечания:
- Код не должен зависеть от конкретных размеров мяча и поля.
- Вам пригодятся свойства event.clientX/event.clientY

http://plnkr.co/edit/g3uEiMDLnIII9I9MCmlA?p=preview
 */

////////////////

/*
var ball = document.getElementById('ball');
var field = document.getElementById('field');

function moveToClick(e) {
  console.log(e.clientX, e.clientY);
  var x = e.clientX - field.offsetLeft + field.clientLeft - ball.clientWidth/2 + window.pageXOffset;
  var y = e.clientY - field.offsetTop + field.clientTop - ball.clientHeight/2 + window.pageYOffset;

  if (x < ball.clientWidth/2) x = ball.clientWidth/2;
  if (x > field.clientWidth - ball.clientWidth/2) x = field.clientWidth - ball.clientWidth/2;
  if (y < ball.clientHeight/2) y = ball.clientHeight/2;
  if (y > field.clientHeight - ball.clientHeight/2) y = field.clientHeight - ball.clientHeight/2;

  ball.style.left = x + 'px';
  ball.style.top = y + 'px';
}

field.addEventListener('click', moveToClick);
// http://plnkr.co/edit/SEsiXb2NaQ6nBfDibdxe?p=preview
*/

/////////////////////////////////////////////////

/*
Скрытие сообщения с помощью делегирования

Дан список сообщений. Добавьте каждому сообщению кнопку для его удаления.
Используйте делегирование событий. Один обработчик для всего.

http://plnkr.co/edit/ilqRl5vAYofKPNK0cbF8?p=preview
 */

////////////////

/*
'use strict';

let container = document.querySelector('.container');

const hide = e => {
  // if (e.target !== e.target.parentElement.children[0]) return;
  if (!e.target.classList.contains('remove-button')) return;
  
  //e.target.parentElement.style.display = 'none';
  e.target.parentElement.hidden = true;
};

container.addEventListener('click', hide);
*/

/////////////////////////////////////////////////

/*
Раскрывающееся дерево
важность: 5
Создайте дерево, которое по клику на заголовок скрывает-показывает детей.
Требования:
- Использовать делегирование.
- Клик вне текста заголовка (на пустом месте) ничего делать не должен.
- При наведении на заголовок – он становится жирным, реализовать через CSS.
P.S. При необходимости HTML/CSS дерева можно изменить.
http://plnkr.co/edit/KsgE3vEEHODQIdojYeku?p=preview
 */

////////////////

/*
'use strict';

let tree = document.querySelector('.tree');

// оборачиваем текст в span через JS

// let lis = tree.querySelectorAll('li');
// for (let i = 0; i < lis.length; i++) {
//   let li = lis[i];
//   let span = document.createElement('span');
//   li.insertBefore(span, li.firstChild);
//   span.appendChild(span.nextSibling);
// }

let lis = tree.querySelectorAll('li');
for (let li of lis) {
  let span = document.createElement('span');
  li.insertBefore(span, li.firstChild);
  span.appendChild(span.nextSibling);
}

const toggleHide = e => {
  if (e.target.tagName !== 'SPAN') return;
  if (!e.target.nextElementSibling) return;
  
  // e.target.nextElementSibling.classList.toggle('hide');
  // реализация toggle через атрибут hidden
  e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
};

tree.addEventListener('click', toggleHide);
*/

////////////////

// решение с учебника - http://plnkr.co/edit/62Z7toAcJGiLk95mBtUQ?p=preview

/////////////////////////////////////////////////

/*
Сортировка таблицы

Сделать сортировку таблицы при клике на заголовок.
Требования:
- Использовать делегирование.
- Код не должен меняться при увеличении количества столбцов или строк.
P.S. Обратите внимание, тип столбца задан атрибутом у заголовка. Это необходимо, ведь числа сортируются иначе чем строки. Соответственно, код это может использовать.
P.P.S. Вам помогут дополнительные навигационные ссылки по таблицам.
http://plnkr.co/edit/1lxq0nQBeZCPFNUdaivB?p=preview
 */

////////////////

/*
'use strict';

let grid = document.querySelector('#grid');

const sortBy = e => {
  let age = grid.querySelector('th[data-type="number"]');
  let name = grid.querySelector('th[data-type="string"]');
  let bodyNew = grid.tBodies[0].cloneNode(false);
  let trs = grid.querySelectorAll('tr');

  trs = [].slice.call(trs, 1);

  if (e.target === age) {
    trs.sort((a, b) => parseInt(a.cells[0].textContent) - parseInt(b.cells[0].textContent));
  } else if (e.target === name) {
    trs.sort((a, b) => a.cells[1].textContent > b.cells[1].textContent);
  } else { return; }

  for (let tr of trs) bodyNew.append(tr);
    
  grid.tBodies[0].remove();
  grid.append(bodyNew);
};

grid.addEventListener('click', sortBy);
*/

////////////////

// решение из учебника http://plnkr.co/edit/im9GDgRDAHMGORMXeSvU?p=preview

/////////////////////////////////////////////////

/*
Поведение "подсказка"

При наведении мыши на элемент, на нём возникает событие mouseover, при удалении мыши с элемента – событие mouseout.
Зная это, напишите JS-код, который будет делать так, что при наведении на элемент, если у него есть атрибут data-tooltip – над ним будет показываться подсказка с содержимым этого атрибута.

Например, две кнопки:
<button data-tooltip="подсказка длиннее, чем элемент">Короткая кнопка</button>
<button data-tooltip="HTML<br>подсказка">Ещё кнопка</button>

В этой задаче можно полагать, что в элементе с атрибутом data-tooltip – только текст, то есть нет подэлементов.
Детали оформления:
- Подсказка должна появляться при наведении на элемент, по центру и на небольшом расстоянии сверху. При уходе курсора с элемента – исчезать.
- Текст подсказки брать из значения атрибута data-tooltip. Это может быть произвольный HTML.
- Оформление подсказки должно задаваться CSS.
- Подсказка не должна вылезать за границы экрана, в том числе если страница частично прокручена. Если нельзя показать сверху – показывать снизу элемента.
Важно: нужно использовать приём разработки «поведение», то есть поставить обработчик (точнее два) на document, а не на каждый элемент.
Плюс этого подхода – динамически добавленные в DOM позже элементы автоматически получат этот функционал.

http://plnkr.co/edit/98f9qkMAc8TeR70rTh7G?p=preview
 */

////////////////

/*
const showTip = e => {
  if (!e.target.hasAttribute('data-tooltip')) return;

  let targetBox = e.target.getBoundingClientRect();
  let tip = document.createElement('div');

  tip.innerHTML = e.target.getAttribute('data-tooltip');
  tip.classList.add('tip');
  e.target.parentElement.append(tip);

  const margin = 5;
  let x = Math.round(targetBox.left - (tip.offsetWidth - e.target.offsetWidth)/2);
  let y = Math.round(targetBox.top - tip.offsetHeight - margin);

  if (y < 0) y = Math.round(targetBox.bottom + margin);

  tip.style.top = `${y}px`;
  tip.style.left = `${Math.max(0, x)}px`;
};

const hideTip = e => {
  if (!e.target.hasAttribute('data-tooltip')) return;
  let tip = e.target.parentElement.querySelector('.tip');
  if (tip) tip.remove();
};

document.addEventListener('mouseover', showTip);
document.addEventListener('mouseout', hideTip);
*/

////////////////

// решение с учебника http://plnkr.co/edit/CEYfQIQmvQO45sEveChc?p=preview

/////////////////////////////////////////////////

// Кроссбраузерный код для отмены действия по умолчанию в IE8-

/*
element.onclick = function(event) {
  event = event || window.event;
  if (event.preventDefault) { // если метод существует
    event.preventDefault(); // то вызвать его
  } else { // иначе вариант IE8-:
    event.returnValue = false;
  }
};
*/

// или в одну строку

/*
element.onclick = function(event) {
  event = event || window.event;
  event.preventDefault ? event.preventDefault() : (event.returnValue=false);
};
*/

/////////////////////////////////////////////////

/*
Поймайте переход по ссылке

Сделайте так, чтобы при клике на ссылки внутри элемента #contents пользователю выводился вопрос о том, действительно ли он хочет покинуть страницу и если он не хочет, то прерывать переход по ссылке.
- Содержимое #contents может быть загружено динамически и присвоено при помощи innerHTML. Так что найти все ссылки и поставить на них обработчики нельзя. Используйте делегирование.
- Содержимое может содержать вложенные теги, в том числе внутри ссылок, например, <a href=".."><i>...</i></a>.
http://plnkr.co/edit/7gHnXb8z5i42bEogf49Q?p=preview
 */

////////////////

/*
let contents = document.querySelector('#contents');

const goLink = e => {
  if ( !(contents.contains(e.target) && e.target.closest('a')) ) return;

  let a = e.target.closest('a');
  let go = confirm(`Перейти по адресу: ${a.href} ?`);

  if (!go) e.preventDefault();
};

contents.addEventListener('click', goLink);
 */

////////////////

// решение с учебника

/*
contents.onclick = function(evt) {
  var target = evt.target;

  function handleLink(href) {
    var isLeaving = confirm('Уйти на ' + href + '?');
    if (!isLeaving) return false;
  }

  while (target != this) {
    if (target.nodeName == 'A') {
      return handleLink(target.getAttribute('href')); // (*)
    }
    target = target.parentNode;
  }
};
 */

/////////////////////////////////////////////////

/*
Галерея изображений

Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант.
Для обработки событий используйте делегирование, т.е. не более одного обработчика.
P.S. Обратите внимание – клик может быть как на маленьком изображении IMG, так и на A вне него. При этом event.target будет, соответственно, либо IMG, либо A.
- Если получится – сделайте предзагрузку больших изображений, чтобы при клике они появлялись сразу.
- Всё ли в порядке с семантической вёрсткой в HTML исходного документа? Если нет – поправьте, чтобы было, как нужно.
http://plnkr.co/edit/y2m7FvOQOej9cYvDH1kH?p=preview
 */

////////////////

/*
// Решение без предзагрузки
let gallery = document.querySelector('.gallery');
let bigPic = gallery.querySelector('#largeImg');
let thumbs = gallery.querySelector('#thumbs');

const showPic = e => {
  if ( !(thumbs.contains(e.target) && e.target.closest('a')) ) return;
  e.preventDefault();
  let a = e.target.closest('a');
  bigPic.src = a.href;
};

thumbs.addEventListener('click', showPic);
*/

////////////////

/*
// Решение с предзагрузкой
const gallery = document.querySelector('.gallery');
const thumbs = gallery.querySelector('#thumbs');
const wrapper = gallery.querySelector('.largeImgWrapper');

let bigPic = gallery.querySelector('#largeImg');
let arrImgs;

const makeArrImgs = (list, pic) => {
  let arr = [];

  for (let link of list) {
    let img = pic.cloneNode(false);
    img.src = link.href;
    arr.push(img);
  }

  return arr;
};

const showPic = e => {
  if ( !(thumbs.contains(e.target) && e.target.closest('a')) ) return;
  e.preventDefault();

  let a = e.target.closest('a');
  // чтоб не перерисовывалось при повторном клике на ту же превьюшку
  if (bigPic.src === a.href) return;

  let i = [].indexOf.call(thumbs.children, a);

  // если массив картинок не сгенерен, то мы его сделаем
  if (!arrImgs) arrImgs = makeArrImgs(thumbs.children, bigPic);

  wrapper.insertBefore(arrImgs[i], bigPic);
  wrapper.children[1].remove();
  bigPic = wrapper.children[0];
};

thumbs.addEventListener('click', showPic);
*/

////////////////

// решение с учебника http://plnkr.co/edit/5t7oDEbrx8G3UjUqtM2q?p=preview

/////////////////////////////////////////////////

// Полифилл CustomEvent для IE9+

/*
try {
  new CustomEvent("IE has CustomEvent, but doesn't support constructor");
} catch (e) {

  window.CustomEvent = function(event, params) {
    var evt;
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };
    evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  };

  CustomEvent.prototype = Object.create(window.Event.prototype);
}
*/

/////////////////////////////////////////////////

// Полифил свойства события мыши - which/button - для IE8-

/*
function fixWhich(e) {
  if (!e.which && e.button) { // если which нет, но есть button... (IE8-)
    if (e.button & 1) e.which = 1; // левая кнопка
    else if (e.button & 4) e.which = 2; // средняя кнопка
    else if (e.button & 2) e.which = 3; // правая кнопка
  }
}
 */

/////////////////////////////////////////////////

// Полифил свойства страницы - pageX/pageY - для IE8-

/*
function fixPageXY(e) {
  if (e.pageX == null && e.clientX != null) { // если нет pageX..
    var html = document.documentElement;
    var body = document.body;

    e.pageX = e.clientX + (html.scrollLeft || body && body.scrollLeft || 0);
    e.pageX -= html.clientLeft || 0;

    e.pageY = e.clientY + (html.scrollTop || body && body.scrollTop || 0);
    e.pageY -= html.clientTop || 0;
  }
}
 */

/////////////////////////////////////////////////

/*
Список с выделением

Эта задача состоит из трёх частей.
1) Сделайте список, элементы которого можно выделять кликом.
2) Добавьте мульти-выделение. Если клик с нажатым Ctrl (Cmd под Mac), то элемент добавляется-удаляется из выделенных.
3) Добавьте выделение промежутков. Если происходит клик с нажатым Shift, то к выделению добавляется промежуток элементов от предыдущего кликнутого до этого. При этом не важно, какое именно действие делал предыдущий клик. Это похоже на то, как работает файловый менеджер в ряде ОС, но чуть проще, так как конкретная реализация выделений различается у разных ОС, и её точное воспроизведение не входит в эту задачу.
P.S. В этой задаче можно считать, что в элементах списка может быть только текст, без вложенных тегов.
P.P.S. Обработка одновременного нажатия Ctrl(Cmd) и Shift может быть любой.
http://plnkr.co/edit/WAnHodiQjOyS4dz408g0?p=preview
 */

////////////////

/*
'use strict';

let ul = document.querySelector('ul');
let last;

const selectOne = elem => elem.classList.add('selected');

const selectToggle = elem => elem.classList.toggle('selected');

const selectMulti = elem => {
  if (typeof(last) !== 'number' || !ul.children[last].classList.contains('selected')) last = null;
  if (typeof(last) !== 'number') last = [].indexOf.call(ul.children, elem);

  let shift = [].indexOf.call(ul.children, elem);

  if (last === shift) {
    ul.children[last].classList.add('selected');
  } else {
    for (let i = Math.min(last, shift); i <= Math.max(last, shift); i++) {
      ul.children[i].classList.add('selected');
    }
  }
};

const selection = e => {
  e.preventDefault();
  if ( !(ul.contains(e.target) && e.target.closest('li')) ) return;
  
  let li = e.target.closest('li');
  
  if ( (e.ctrlKey || e.metaKey) && e.shiftKey ) {
    console.log('какая-то дичь');
    return;
  } else if (e.ctrlKey || e.metaKey) {
    selectToggle(li);
  } else if (e.shiftKey) {
    selectMulti(li);
  } else {
    selectOne(li);
  }

  last = [].indexOf.call(ul.children, li);
};

ul.addEventListener('mousedown', selection);
*/

////////////////

// решение с учебника http://plnkr.co/edit/NthETyzybeilD13jen4y?p=preview

/////////////////////////////////////////////////

/*
Дерево: проверка клика на заголовке

Есть кликабельное JavaScript-дерево UL/LI (см. задачу Раскрывающееся дерево).
Однако, проблема в том, что скрытие-раскрытие происходит даже при клике вне заголовка, на пустом пространстве справа от него.
Как скрывать/раскрывать детей только при клике на заголовок?
Решите задачу без обёртывания заголовков в SPAN, используя работу с координатами.
Исходный документ содержит кликабельное дерево.
P.S. Задача – скорее на сообразительность, однако подход может быть полезен в реальной жизни.
http://plnkr.co/edit/hrDEAHDZfn2TMq0B4MOT?p=preview
 */

////////////////

/*
var tree = document.getElementById('tree');

tree.onclick = function(evt) {
  // var evt = evt || event;
  // var target = evt.target || evt.srcElement;

  // раскрыть-закрыть детей
  var node = evt.target.getElementsByTagName('ul')[0];
  if (!node) return; // нет детей

  // console.log(evt.target.firstChild);

  var text = evt.target.firstChild;
  var span = document.createElement('span');

  span.appendChild(text);
  evt.target.insertBefore(span, evt.target.firstChild);
  
  var spanBox = span.getBoundingClientRect();

  // console.log(span.getBoundingClientRect());
  // console.log(evt.clientX, evt.clientY);

  if (evt.clientX > spanBox.left && evt.clientX < spanBox.right) {
    node.style.display = node.style.display ? '' : 'none';
  }
  
  evt.target.removeChild(evt.target.firstChild);
  evt.target.insertBefore(text, evt.target.firstChild);
};
*/

////////////////

// решение с учебника http://plnkr.co/edit/75NhGq2wyp8xT6UtVUNz?p=preview

/////////////////////////////////////////////////

// Полифил для свойства relatedTarget в IE8-

/*
function fixRelatedTarget(e) {
  if (e.relatedTarget === undefined) {
    if (e.type == 'mouseover') e.relatedTarget = e.fromElement;
    if (e.type == 'mouseout') e.relatedTarget = e.toElement;
  }
}
 */

/////////////////////////////////////////////////

/*
Поведение "вложенная подсказка"

Напишите JS-код, который будет показывать всплывающую подсказку над элементом, если у него есть атрибут data-tooltip.
Условие аналогично задаче Поведение "подсказка", но здесь необходима поддержка вложенных элементов. При наведении показывается самая вложенная подсказка.
http://plnkr.co/edit/mxo2WMTdar9jjQgYUFgD?p=preview
 */

////////////////

/*
'use strict';

let tip;
let house = document.querySelector('#house');

const showTip = e => {
  if (!e.target.hasAttribute('data-tooltip')) return;

  let targetBox = e.target.getBoundingClientRect();
  if (!tip) tip = document.createElement('div');

  tip.innerHTML = e.target.getAttribute('data-tooltip');
  tip.classList.add('tip');
  e.target.parentElement.append(tip);

  const margin = 5;
  let x = Math.round(targetBox.left - (tip.offsetWidth - e.target.offsetWidth)/2);
  let y = Math.round(targetBox.top - tip.offsetHeight - margin);

  if (y < 0) y = Math.round(targetBox.bottom + margin);

  tip.style.top = `${y}px`;
  tip.style.left = `${Math.max(0, x)}px`;
};

const hideTip = e => {
  // console.log('e.target', e.target);
  // console.log('e.relatedTarget', e.relatedTarget);

  if ( !e.target.hasAttribute('data-tooltip') ) return;

  if ( (house.contains(e.target) && e.relatedTarget.hasAttribute('data-tooltip')) ||
        !house.contains(e.relatedTarget) ) {
    if (tip) tip.remove();
  }
  
};

document.addEventListener('mouseover', showTip);
document.addEventListener('mouseout', hideTip);
*/

////////////////

// решение с учебника http://plnkr.co/edit/Jqk4rkb8kRjC0HT1uDIq?p=preview

/////////////////////////////////////////////////

/*
Подсказка при замедлении над элементом

Нужно написать функцию, которая показывает подсказку при наведении на элемент, но не при быстром проходе над ним.
То есть, если посетитель именно навёл курсор мыши на элемент и почти остановился – подсказку показать, а если быстро провёл над ним, то не надо, зачем излишнее мигание?
Технически – можно измерять скорость движения мыши над элементом, если она маленькая, то считаем, что это «наведение на элемент» (показать подсказку), если большая – «быстрый проход мимо элемента» (не показывать).
Реализуйте это через универсальный объект new HoverIntent(options), с параметрами options:

elem – элемент, наведение на который нужно отслеживать.
over – функция-обработчик наведения на элемент.
out – функция-обработчик ухода с элемента (если было наведение).

Пример использования такого объекта для подсказки:

// образец подсказки
var tooltip = document.createElement('div');
tooltip.className = "tooltip";
tooltip.innerHTML = "Подсказка";

// при "наведении на элемент" показать подсказку
new HoverIntent({
  elem: elem,
  over: function() {
    tooltip.style.left = this.getBoundingClientRect().left + 'px';
    tooltip.style.top = this.getBoundingClientRect().bottom + 5 + 'px';
    document.body.appendChild(tooltip);
  },
  out: function() {
    document.body.removeChild(tooltip);
  }
});

Если провести мышкой над «часиками» быстро, то ничего не будет, а если медленно или остановиться на них, то появится подсказка.
Обратите внимание – подсказка не «мигает» при проходе мыши внутри «часиков», по подэлементам.
 */

////////////////

// решение с учебника http://plnkr.co/edit/JQyT0ev56Fa9CsLaHIuy?p=preview

/////////////////////////////////////////////////

/*
Слайдер

Создайте слайдер
Захватите мышкой синий бегунок и двигайте его, чтобы увидеть в работе.
Важно:
- Слайдер должен нормально работать при резком движении мыши влево или вправо, за пределы полосы. При этом бегунок должен останавливаться четко в нужном конце полосы.
- При нажатом бегунке мышь может выходить за пределы полосы слайдера, но слайдер пусть все равно работает (это удобно для пользователя).
 */

////////////////

/*
'use strict';

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    bottom: box.bottom + pageYOffset,
    left: box.left + pageXOffset,
    right: box.right + pageXOffset
  };
}

function slide(e) {
  // disable selection start (cursor change)
  e.preventDefault();

  let limit = thumb.parentElement.clientWidth - thumb.clientWidth;

  let thumbBox = getCoords(thumb);
  let parentBox = getCoords(thumb.parentElement);

  let shiftX = e.pageX - thumbBox.left;
  // let shiftY = e.pageY - thumbBox.top;

  // let left = e.pageX - shiftX;
  // let top = e.pageY - shiftY;

  // let leftLimit = left - parentBox.left;
  // let rightLimit = left - parentBox.right;
  // let topLimit = top - parentBox.top;
  // let bottomLimit = top - parentBox.bottom;

  // console.log('thumbBox', thumbBox);
  // console.log('parentBox', parentBox);

  // console.log('e.pageX', e.pageX);
  // console.log('e.pageY', e.pageY);
  
  // console.log('shiftX', shiftX);
  // console.log('shiftY', shiftY);
  
  // console.log(left);
  // console.log(top);
  
  // console.log(leftLimit);
  // console.log(rightLimit);
   
  function drag(e) {
    // console.log('e.pageX', e.pageX);
    // console.log('shiftX', shiftX);
    // console.log(e.pageX - shiftX - parentBox.left);

    thumb.style.left = e.pageX - shiftX - parentBox.left + 'px';

    let x = parseInt(thumb.style.left);
    
    if (x < 0) {
      thumb.style.left = 0 + 'px';
      drop(e);
    } else if (x > limit) {
      thumb.style.left = limit + 'px';
      drop(e);
    }
  }

  function drop(e) {
    document.removeEventListener('mousemove', drag);
    thumb.removeEventListener('mouseup', drop);
  }
  
  document.addEventListener('mousemove', drag);
  thumb.addEventListener('mouseup', drop);
}

let thumb = document.querySelector('.thumb');

thumb.addEventListener('mousedown', slide);
thumb.addEventListener('dragstart', e => false);
 */

////////////////

// решение с учебника http://plnkr.co/edit/qwrhqAarRXyJCEeqCJGl?p=preview

/////////////////////////////////////////////////

/*
Расставить супергероев по полю

В этой задаче вы можете проверить своё понимание сразу нескольких аспектов Drag’n’Drop.
Сделайте так, чтобы элементы с классом draggable можно было переносить мышкой. По окончании переноса элемент остаётся на том месте в документе, где его положили.
Требования к реализации:
- Должен быть 1 обработчик на document, использующий делегирование.
- Если элементы подносят к вертикальным краям окна – оно должно прокручиваться вниз/вверх.
- Горизонтальной прокрутки в этой задаче не существует.
- Элемент при переносе, даже при резких движениях мышкой, не должен попасть вне окна.
Футбольное поле в этой задаче слишком большое, чтобы показывать его здесь, поэтому откройте его, кликнув по ссылке ниже. Там же и подробное описание задачи (осторожно, винни-пух и супергерои!).
http://plnkr.co/edit/oNrJ8rcb529X3Bc5HdvW?p=preview
 */

////////////////

// решение с учебника http://plnkr.co/edit/Ug9iqb7sLEAqyD77bjPr?p=preview

/////////////////////////////////////////////////

// Drag-n-Drop - полный пример кода
// https://learn.javascript.ru/drag-and-drop-objects

/////////////////////////////////////////////////

// кроссбраузерное отлавливание события "колеса мыши" (wheel)

/*
if (elem.addEventListener) {
  if ('onwheel' in document) {
    // IE9+, FF17+, Ch31+
    elem.addEventListener("wheel", onWheel);
  } else if ('onmousewheel' in document) {
    // устаревший вариант события
    elem.addEventListener("mousewheel", onWheel);
  } else {
    // Firefox < 17
    elem.addEventListener("MozMousePixelScroll", onWheel);
  }
} else { // IE8-
  elem.attachEvent("onmousewheel", onWheel);
}

function onWheel(e) {
  e = e || window.event;

  // wheelDelta не дает возможность узнать количество пикселей
  var delta = e.deltaY || e.detail || e.wheelDelta;

  var info = document.getElementById('delta');

  info.innerHTML = +info.innerHTML + delta;

  e.preventDefault ? e.preventDefault() : (e.returnValue = false);
}
*/

/////////////////////////////////////////////////

/*
Масштабирование колёсиком мыши

Сделайте так, чтобы при прокрутке колёсиком мыши над элементом, он масштабировался.
Масштабирование обеспечивайте при помощи свойства CSS transform:
// увеличение в 1.5 раза
elem.style.transform = elem.style.WebkitTransform = elem.style.MsTransform = 'scale(1.5)';
 */

////////////////

/*
let scale = 1;

const scaleElem = e => {
  e.preventDefault();

  let elem = e.target || document.elementFromPoint(e.clientX, e.clientY);
  let delta = e.deltaY;

  if (delta > 0) scale += 0.1;
  else scale -= 0.1;

  elem.style.transform = `scale( ${scale} )`;
};

document.addEventListener("wheel", scaleElem);
*/

////////////////

// решение с учебника (кроссбраузерно) http://plnkr.co/edit/WDIVp63DCVt755SC5zC0?p=preview

/*
function addOnWheel(elem, handler) {
  if (elem.addEventListener) {
    if ('onwheel' in document) {
      // IE9+, FF17+
      elem.addEventListener("wheel", handler);
    } else if ('onmousewheel' in document) {
      // устаревший вариант события
      elem.addEventListener("mousewheel", handler);
    } else {
      // 3.5 <= Firefox < 17, более старое событие DOMMouseScroll пропустим
      elem.addEventListener("MozMousePixelScroll", handler);
    }
  } else { // IE8-
    text.attachEvent("onmousewheel", handler);
  }
}

var scale = 1;

addOnWheel(text, function(e) {

  var delta = e.deltaY || e.detail || e.wheelDelta;

  // отмасштабируем при помощи CSS
  if (delta > 0) scale += 0.05;
  else scale -= 0.05;

  text.style.transform = text.style.WebkitTransform = text.style.MsTransform = 'scale(' + scale + ')';

  // отменим прокрутку
  e.preventDefault();
});
*/

/////////////////////////////////////////////////

/*
Прокрутка без влияния на страницу

В большинстве браузеров если в процессе прокрутки textarea колёсиком мышки (или жестами) мы достигаем границы элемента, то прокрутка продолжается уже на уровне страницы (в Firefox при этом будет небольшая задержка перед продолжением прокрутки).
Иными словами, если в примере ниже вы попробуете прокрутить textarea вниз, то когда прокрутка дойдёт до конца – начнёт прокручиваться документ:
То же самое происходит при прокрутке вверх.
В интерфейсах редактирования, когда большая textarea является основным элементом страницы, такое поведение может быть неудобно.
Для редактирования более оптимально, чтобы при прокрутке до конца textarea страница не «улетала» вверх и вниз.
Вот тот же документ, но с желаемым поведением textarea:
Задача:
- Создать скрипт, который при подключении к документу исправлял бы поведение всех textarea, чтобы при прокрутке они не трогали документ.
- Направление прокрутки – только вверх или вниз.
- Редактор прокручивает только мышкой или жестами (на мобильных устройствах), прокрутку клавиатурой здесь рассматривать не нужно (хотя это и возможно).
http://plnkr.co/edit/O4mgfI4rmmLmTopbryoy?p=preview
 */

////////////////

/*
const stopScroll = e => {
  if (e.target.tagName !== 'TEXTAREA') return;

  let bottom = e.target.scrollHeight - e.target.clientHeight;

  if (e.target.scrollTop === 0 && e.deltaY < 0) e.preventDefault();

  if (e.deltaY > 0 && e.deltaY + e.target.scrollTop > bottom) {
    e.target.scrollTop = bottom;
    e.preventDefault();
  }
};

document.addEventListener('wheel', stopScroll);
*/

////////////////

// решение с учебника

/*
document.onwheel = function(e) {
  if (e.target.tagName != 'TEXTAREA') return;
  var area = e.target;

  var delta = e.deltaY || e.detail || e.wheelDelta;

  if (delta < 0 && area.scrollTop == 0) {
    e.preventDefault();
  }

  if (delta > 0 && area.scrollHeight - area.clientHeight - area.scrollTop <= 1) {
    e.preventDefault();
  }
};
*/

/////////////////////////////////////////////////

// исправления событий мыши для IE8-
// https://learn.javascript.ru/fixevent

/*
function fixEvent(e) {

  e.currentTarget = this;
  e.target = e.srcElement;

  if (e.type == 'mouseover' || e.type == 'mouseenter') e.relatedTarget = e.fromElement;
  if (e.type == 'mouseout' || e.type == 'mouseleave') e.relatedTarget = e.toElement;

  if (e.pageX == null && e.clientX != null) {
    var html = document.documentElement;
    var body = document.body;

    e.pageX = e.clientX + (html.scrollLeft || body && body.scrollLeft || 0);
    e.pageX -= html.clientLeft || 0;

    e.pageY = e.clientY + (html.scrollTop || body && body.scrollTop || 0);
    e.pageY -= html.clientTop || 0;
  }

  if (!e.which && e.button) {
    e.which = e.button & 1 ? 1 : (e.button & 2 ? 3 : (e.button & 4 ? 2 : 0));
  }

  return e;
}

elem.onclick = function(event) {
  // если IE8-, то получить объект события window.event и исправить его
  event = event || fixEvent.call(this, window.event);
  // ...
};
*/

/////////////////////////////////////////////////

/*
Аватар наверху при прокрутке

Сделайте так, чтобы при прокрутке ниже элемента #avatar (картинка с Винни-Пухом) – он продолжал показываться в левом-верхнем углу.
При прокрутке вверх – должен возвращаться на обычное место.
Прокрутите вниз, чтобы увидеть:
http://plnkr.co/edit/DcNKqqRN9A291K2j323K?p=preview
 */

////////////////

/*
let avatar = document.querySelector('#avatar');
let clone = avatar.cloneNode(true);
clone.classList.add('fixAvatar');

const showAvatar = e => {
  if (avatar.getBoundingClientRect().bottom < 0) avatar.parentElement.append(clone);
  else clone.remove();
};

window.addEventListener('scroll', showAvatar);
 */

////////////////

// решение с учебника http://plnkr.co/edit/E6NWXzlKk0TEGK5VFKfy?p=preview

/*
var avatarElem = document.getElementById('avatar');

var avatarSourceBottom = avatarElem.getBoundingClientRect().bottom + window.pageYOffset;

window.onscroll = function() {
  if (avatarElem.classList.contains('fixed') && window.pageYOffset < avatarSourceBottom) {
    avatarElem.classList.remove('fixed');
  } else if (window.pageYOffset > avatarSourceBottom) {
    avatarElem.classList.add('fixed');
  }
};
*/

/////////////////////////////////////////////////

/*
Кнопка вверх-вниз

Создайте кнопку навигации, которая помогает при прокрутке страницы.
Работать должна следующим образом:
- Пока страница промотана меньше чем на высоту экрана вниз – кнопка не видна.
- При промотке страницы вниз больше, чем на высоту экрана, появляется кнопка «стрелка вверх».
- При нажатии на нее страница прыгает вверх, но не только. Дополнительно, кнопка меняется на «стрелка вниз» и при клике возвратит на старое место. Если же в этом состоянии посетитель сам прокрутит вниз больше, чем один экран, то она вновь изменится на «стрелка вверх».
Должен получиться удобный навигационный помощник.
Посмотрите, как оно должно работать, в ифрейме ниже. Прокрутите ифрейм, навигационная стрелка появится слева-сверху.
http://plnkr.co/edit/E0nS9o9JL9HwK5Bbv8L9?p=preview
 */

////////////////

/*
'use strict';

let markUp = '▲';
let markDown = '▼';
let scrollPoint = 0;
let arrow = document.querySelector('.arrow');

const move = e => {
  if (!scrollPoint && document.body.scrollTop > 0) {
    scrollPoint = document.body.scrollTop;
    document.body.scrollTop = 0;
    arrow.textContent = markDown;
  } else {
    document.body.scrollTop = scrollPoint;
    scrollPoint = 0;
    arrow.textContent = markUp;
  }
};
  
const showArrow = e => {
  if (pageYOffset < document.documentElement.clientHeight) return;
  
  scrollPoint = 0;
  arrow.style.opacity = '0.2';
  arrow.style.left = '30px';
  arrow.textContent = markUp;
};

arrow.addEventListener('click', move);
document.addEventListener('scroll', showArrow);
 */

////////////////

// решение с учебника http://plnkr.co/edit/KzbZ7lEX8bQRHcioI3qc?p=preview

/////////////////////////////////////////////////

/*
Загрузка видимых изображений

Задача, которая описана ниже, демонстрирует результативный метод оптимизации страницы.
С целью экономии трафика и более быстрой загрузки страницы изображения на ней заменяются на «макеты».

Вместо такого изображения:
<img src="yozhik.jpg" width="128" height="128">
Стоит вот такое:
<img src="1.gif" width="128" height="128" realsrc="yozhik.jpg">

То есть настоящий URL находится в атрибуте realsrc (название атрибута можно выбрать любое). А в src поставлен серый GIF размера 1x1, и так как width/height правильные, то он растягивается, так что вместо изображения виден серый прямоугольник.
При этом, чтобы браузер загрузил изображение, нужно заменить значение src на то, которое находится в realsrc.
Если страница большая, то замена больших изображений на такие макеты существенно убыстряет полную загрузку страницы. Это особенно заметно в случае, когда на странице много анонсов новостей с картинками или изображений товаров, из которых многие находятся за пределами прокрутки.
Кроме того, для мобильных устройств JavaScript может подставлять URL уменьшенного варианта картинки.
Напишите код, который при прокрутке окна загружает ставшие видимыми изображения.
То есть, как только изображение попало в видимую часть документа – в src нужно прописать правильный URL из realsrc.
Пример работы вы можете увидеть в iframe ниже, если прокрутите его:

Особенности реализации:
- При начальной загрузке некоторые изображения должны быть видны сразу, до прокрутки. Код должен это учитывать.
- Некоторые изображения могут быть обычными, без realsrc. Их код не должен трогать вообще.
- Также код не должен перегружать уже показанное изображение.
- Желательно предусмотреть загрузку изображений не только видимых сейчас, но и на страницу вперед и назад от текущего места.

P.S. Горизонтальной прокрутки нет.
http://plnkr.co/edit/uaWUE7GRsl7iqLyE67Ms?p=preview
 */

////////////////

/*
'use strict';

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    bottom: box.bottom + pageYOffset,
    left: box.left + pageXOffset,
    right: box.right + pageXOffset
  };
}

// сейчас координаты под края window

let viewHeight = innerHeight || document.documentElement.clientHeight;
// уменьшая viewTop - увеличиваем диапазон предзагузки сверху
// например viewTop = pageYOffset - viewHeight; это + 1 окно сверху
let viewTop = pageYOffset;
// увеличивая viewBottom - увеличиваем диапазон предзагузки снизу
// например viewBottom = viewTop + viewHeight * 2; это + 1 окно снизу
let viewBottom = pageYOffset + viewHeight;

let imgs = document.querySelectorAll('img');

const firstLoad = imgs => {
  for (let img of imgs) {
    if (img.src === img.getAttribute('realsrc')) continue;

    let imgBox = getCoords(img);

    if (imgBox.top < viewBottom && imgBox.bottom > viewTop) {
      console.log('show!', 'imgBox.top:', imgBox.top, 'imgBox.bottom:', imgBox.bottom);

      img.src = img.getAttribute('realsrc');
    }
  }
};

firstLoad(imgs);

const loadImg = e => {
  viewHeight = innerHeight || document.documentElement.clientHeight;
  viewTop = pageYOffset;
  viewBottom = viewTop + viewHeight;

  // console.log('viewHeight', viewHeight);
  // console.log('viewTop', viewTop);
  // console.log('viewBottom', viewBottom);

  for (let img of imgs) {
    if (img.src === img.getAttribute('realsrc')) continue;

    let imgBox = getCoords(img);

    if (imgBox.top < viewBottom && imgBox.bottom > viewTop) {
      console.log('show!', 'imgBox.top:', imgBox.top, 'imgBox.bottom:', imgBox.bottom);

      img.src = img.getAttribute('realsrc');
    }
  }
};

document.addEventListener('scroll', loadImg);
 */

////////////////

// решение с учебника http://plnkr.co/edit/FaKoF0M4QQB1OSdtpClb?p=preview

/*
function isVisible(elem) {

  var coords = elem.getBoundingClientRect();

  var windowHeight = document.documentElement.clientHeight;

  // верхняя граница elem в пределах видимости ИЛИ нижняя граница видима
  var topVisible = coords.top > 0 && coords.top < windowHeight;
  var bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

  return topVisible || bottomVisible;
}
*/

/////////////////////////////////////////////////

// Кросс-браузерная функция для получения символа из события keypress

/*
// event.type должен быть keypress
function getChar(event) {
  if (event.which == null) { // IE
    if (event.keyCode < 32) return null; // спец. символ
    return String.fromCharCode(event.keyCode)
  }

  if (event.which != 0 && event.charCode != 0) { // все кроме IE
    if (event.which < 32) return null; // спец. символ
    return String.fromCharCode(event.which); // остальные
  }

  return null; // спец. символ
}
*/

/////////////////////////////////////////////////

/*
Поле только для цифр

При помощи событий клавиатуры сделайте так, чтобы в поле можно было вводить только цифры. Пример ниже.
В поле должны нормально работать специальные клавиши Delete/Backspace и сочетания с Ctrl/Alt/Cmd.
P.S. Конечно, при помощи альтернативных способов ввода (например, вставки мышью), посетитель всё же может ввести что угодно.
http://plnkr.co/edit/7ZYsWeBmakWjfD6fYRTu?p=preview
 */

////////////////

/*
'use strict';

const getChar = e => {
  if (e.which === null) {
    if (e.keyCode < 32) return null;
    return String.fromCharCode(e.keyCode);
  }
  if (e.which !== 0 && e.charCode !== 0) {
    if (e.which < 32) return null;
    return String.fromCharCode(e.which);
  }
  return null;
};

const checkNum = e => {
  if (e.ctrlKey || e.altKey || e.metaKey) return;

  let char = +getChar(e);
  
  if (isNaN(char)) e.preventDefault();
  // console.log(getChar(e), char);
};

let input = document.querySelector('input[type="number"]');

input.addEventListener('keypress', checkNum);
 */

////////////////

// решение с учебника http://plnkr.co/edit/HRIO4o05cotLavJJ1N2y?p=preview

/////////////////////////////////////////////////

/*
Отследить одновременное нажатие

Создайте функцию runOnKeys(func, code1, code2, ... code_n), которая запускает func при одновременном нажатии клавиш со скан-кодами code1, code2, …, code_n.
Например, код ниже выведет alert при одновременном нажатии клавиш "Q" и "W" (в любом регистре, в любой раскладке)

runOnKeys(
  function() { alert("Привет!") },
  "Q".charCodeAt(0),
  "W".charCodeAt(0)
);
 */

////////////////

/*
'use strict';

const runOnKeys = (func, ...rest) => {
  let set = new Set();

  const doFunc = e => {
    if (e.ctrlKey || e.altKey || e.metaKey) return;

    for (let code of rest) {
      if (code === e.keyCode) set.add(code);
    }

    if (set.size === rest.length) {
      set.clear();
      func();
    }
  };

  const reSet = e => set.clear();

  document.addEventListener('keydown', doFunc);
  document.addEventListener('keyup', reSet);
};

runOnKeys(
  function() { alert('Привет!'); },
  "Q".charCodeAt(0),
  "W".charCodeAt(0)
);
*/

////////////////

// решение с учебника http://plnkr.co/edit/6w6hqP42nY8aLgtOtGu9?p=preview

/////////////////////////////////////////////////

// кросс-браузерная обработка загрузки скрипта
// оставим обработчик на все три события: onload, onerror, onreadystatechange

/*
var script = document.createElement('script');
script.src = "https://code.jquery.com/jquery.js";
document.documentElement.appendChild(script);

function afterLoad() {
  alert( "Загрузка завершена: " + typeof(jQuery) );
}

script.onload = script.onerror = function() {
  if (!this.executed) { // выполнится только один раз
    this.executed = true;
    afterLoad();
  }
};

script.onreadystatechange = function() {
  var self = this;
  if (this.readyState == "complete" || this.readyState == "loaded") {
    setTimeout(function() {
      self.onload()
    }, 0); // сохранить "this" для onload
  }
};
 */

/////////////////////////////////////////////////

/*
Красивый "ALT"

Обычно, до того как изображение загрузится (или при отключенных картинках), посетитель видит пустое место с текстом из «ALT». Но этот атрибут не допускает HTML-форматирования.
При мобильном доступе скорость небольшая, и хочется, чтобы посетитель сразу видел красивый текст.
Реализуйте «красивый» (HTML) аналог alt при помощи CSS/JavaScript, который затем будет заменён картинкой сразу же как только она загрузится. А если загрузка не состоится – то не заменён.
Картинки для bing специально нет, так что текст остается «как есть».
Исходный документ содержит разметку текста и ссылки на изображения.
http://plnkr.co/edit/muZnsUgX2Z2WVXeNFvud?p=preview
 */

////////////////

/*
'use strict';

const replaceImg = () => {
  let imgs = document.querySelectorAll('img');
  let divs = document.querySelectorAll('.img-replace');

  for (let i = 0; i < imgs.length; i++) {
    const loadImg = e => {
      divs[i].style = '';
      divs[i].innerHTML = '';
      divs[i].append(imgs[i]);
    };

    const errorImg = e => imgs[i].style.display = 'none';

    imgs[i].addEventListener('load', loadImg);
    imgs[i].addEventListener('error', errorImg);
  }
};

replaceImg();
*/

////////////////

// решение с учебника http://plnkr.co/edit/McGF4BXO9olk9RuGjgIC?p=preview

/*
function replaceImg() {
  var divs = document.querySelectorAll('div.img-replace');

  for (var i = 0; i < divs.length; i++)(function(i) {
    var img = document.createElement('img');

    img.src = divs[i].getAttribute('data-src');
    img.className = 'img-replace';

    img.onload = function() {
      divs[i].parentNode.replaceChild(img, divs[i]);
    };

  }(i));
}
*/

/////////////////////////////////////////////////

/*
Загрузить изображения с коллбэком

Создайте функцию preloadImages(sources, callback), которая предзагружает изображения из массива sources, и после загрузки вызывает функцию callback.
Пример использования:

preloadImages(["1.jpg", "2.jpg", "3.jpg"], callback);

Если вдруг возникает ошибка при загрузке – считаем такое изображение загруженным, чтобы не ломать поток выполнения.
Такая функция может полезна, например, для фоновой загрузки картинок в онлайн-галерею.
В исходном документе содержатся ссылки на картинки, а также код для проверки, действительно ли изображения загрузились. Он должен выводить «0», затем «300».
http://plnkr.co/edit/lx8jKNW7yBhI8jPf0hB3?p=preview
 */

////////////////

/*
'use strict';

const preloadImages = (sources, callback) => {
  let count = 0;

  function loadImg(e) {
    count++;
    if (count === sources.length) callback();
  }

  function errorImg(e) {
    count++;
    console.log('error load', this.src);
  }
  
  for (let link of sources) {
    let img = document.createElement('img');
    img.src = link;

    img.addEventListener('load', loadImg);
    img.addEventListener('error', errorImg);
  }
};
 */

////////////////

// решение с учебника http://plnkr.co/edit/DXeCzFVaV1xHm8YYpBrn?p=preview

/*
function preloadImages(sources, callback) {
  var counter = 0;

  function onLoad() {
    counter++;
    if (counter == sources.length) callback();
  }

  for (var i = 0; i < sources.length; i++) {
    var img = document.createElement('img');
    // сначала onload/onerror, затем src - важно для IE8-
    img.onload = img.onerror = onLoad;
    img.src = sources[i];
  }
}
*/

/////////////////////////////////////////////////

/*
Скрипт с коллбэком

Создайте функцию addScript(src, callback), которая загружает скрипт с данным src, и после его загрузки и выполнения вызывает функцию callback.
Скрипт может быть любым, работа функции не должна зависеть от его содержимого.
Пример использования:

// go.js содержит функцию go()
addScript("go.js", function() {
  go();
});

Ошибки загрузки обрабатывать не нужно.
http://plnkr.co/edit/PxBF5g5jwVieIGXtRI9M?p=preview
 */

////////////////

/*
const addScript = (src, callback) => {
  let scripts = document.body.querySelectorAll('script');
  let script = document.createElement('script');

  script.src = src;
  document.body.insertBefore(script, scripts[0]);
  
  const loadScript = e => callback();

  script.addEventListener('load', loadScript);
};
*/

////////////////

// решение с учебника http://plnkr.co/edit/7akrK6r4TP3npXJDOGrs?p=preview

/*
function addScript(src, callback) {
  var script = document.createElement('script');
  script.src = src;
  var s = document.getElementsByTagName('script')[0]
  s.parentNode.insertBefore(script, s);

  var loaded = false;

  function onload() {
    if (loaded) return; // повторный вызов
    loaded = true;
    callback();
  }

  script.onload = onload; // все браузеры, IE с версии 9

  script.onreadystatechange = function() { // IE8-
    if (this.readyState == 'loaded' || this.readyState == 'complete') {
      setTimeout(onload, 0);
    }
  };
}
*/

/////////////////////////////////////////////////

/*
Скрипты с коллбэком

Создайте функцию addScripts(scripts, callback), которая загружает скрипты из массива scripts, и после загрузки и выполнения их всех вызывает функцию callback.
Скрипт может быть любым, работа функции не должна зависеть от его содержимого.
Пример использования:

addScripts(["a.js", "b.js", "c.js"], function() { a() });
// функция a() описана в a.js и использует b.js,c.js

Ошибки загрузки обрабатывать не нужно.
Один скрипт не ждёт другого. Они все загружаются, а по окончании вызывается обработчик callback.
Исходный код содержит скрипты a.js, b.js, c.js:
http://plnkr.co/edit/NkMpLbcFHu6b6EpzVkG9?p=preview
 */

////////////////

/*
const addScripts = (arr, callback) => {
  let count = 0;
  // живая коллекция
  let first = document.body.getElementsByTagName('script')[0];

  const loadAll = e => {
    count++;
    if (count === arr.length) callback();
  };

  for (let link of arr) {
    let script = document.createElement('script');
    script.src = link;
    script.addEventListener('load', loadAll);
    document.body.insertBefore(script, first);
  }
};
*/

////////////////

// решение с учебника http://plnkr.co/edit/yARCZLOESmAwDVOe3Hwx?p=preview

/*
function addScript(src) {
  var script = document.createElement('script');
  script.src = src;
  var s = document.getElementsByTagName('script')[0]
  s.parentNode.insertBefore(script, s);
  return script;
}

function addScripts(scripts, callback) {
  var loaded = {}; // Для загруженных файлов loaded[i] = true
  var counter = 0;

  function onload(i) {
    if (loaded[i]) return; // лишний вызов onload/onreadystatechange
    loaded[i] = true;
    counter++;
    if (counter == scripts.length) callback();
  }

  for (var i = 0; i < scripts.length; i++)(function(i) {
    var script = addScript(scripts[i]);

    script.onload = function() {
      onload(i);
    };

    script.onreadystatechange = function() { // IE8-
      if (this.readyState == 'loaded' || this.readyState == 'complete') {
        setTimeout(this.onload, 0); // возможны повторные вызовы onload
      }
    };

  }(i));
}
*/

/////////////////////////////////////////////////

/*
Добавьте опцию к селекту

Есть селект:

<select>
  <option value="Rock">Рок</option>
  <option value="Blues" selected>Блюз</option>
</select>

При помощи JavaScript:
- Выведите значение и текст текущей выбранной опции.
- Добавьте опцию: <option value="Classic">Классика</option>.
- Сделайте её выбранной.
 */

////////////////

/*
let select = document.querySelector('select');

for (let o of select.options) {
  if (o.selected) {
    console.log(o);
    o.selected = false;
  }
}

let newOption = new Option('Классика', 'Classic', false, true);

select.append(newOption);
*/

////////////////

// решение из учебника

/*
var select = document.body.children[0];

// 1)
var selectedOption = select.options[select.selectedIndex];
alert(selectedOption.value);

// 2)
var newOption = new Option("Classic", "Классика");
select.appendChild(newOption);

// 3)
newOption.selected = true;
*/

/////////////////////////////////////////////////

// задачка с собеседования - убрать из массива повторения

/*
let arr = [1, 1, 2, 2, 3, 3];

const filterArr = arr => {
  let newArr = [];
  for (let val of arr) if (newArr.indexOf(val) === -1) newArr.push(val);
  return newArr;
};

arr = (filterArr(arr)); // [1, 2, 3]
*/

/////////////////////////////////////////////////

/*
// Автофокусировка

<input type="text" name="search" autofocus>

// Автофокусировка скриптом в IE9-

<input type="text" name="search">
<script>document.getElementsByName('search')[0].focus();</script>
 */

////////////////

/*
// кроссбраузерная подсветка формы для FF и IE8-

function onFormFocus() {
  this.className = 'focused';
}

function onFormBlur() {
  this.className = '';
}

var form = document.forms.form;

if (form.addEventListener) {
  // focus/blur на стадии перехвата срабатывают во всех браузерах
  // поэтому используем их
  form.addEventListener('focus', onFormFocus, true);
  form.addEventListener('blur', onFormBlur, true);
} else {
  // ветка для IE8-, где нет стадии перехвата, но есть focusin/focusout
  form.onfocusin = onFormFocus;
  form.onfocusout = onFormBlur;
}
*/

/////////////////////////////////////////////////

/*
Улучшенный плейсхолдер

Реализуйте более удобный плейсхолдер-подсказку на JavaScript через атрибут data-placeholder.
Правила работы плейсхолдера:
- Элемент изначально содержит плейсхолдер. Специальный класс placeholder придает ему синий цвет.
- При фокусировке плейсхолдер показывается уже над полем, становясь «подсказкой».
- При снятии фокуса, подсказка убирается, если поле пустое – плейсхолдер возвращается в него.
В этой задаче плейсхолдер должен работать на одном конкретном input. Подумайте, если input много, как здесь применить делегирование?
http://plnkr.co/edit/tvSkh0I87qweXeyefgGc?p=preview
 */

////////////////

/*
let tip = null;
let mail = '';

const showTip = e => {
  if (e.target.tagName !== 'INPUT' &&
     !e.target.hasAttribute('data-placeholder')) return;

  if (!mail) e.target.value = '';

  let box = e.target.getBoundingClientRect();

  tip = document.createElement('span');
  tip.classList.add('placeholder-tooltip');
  tip.textContent = e.target.dataset.placeholder;

  e.target.parentElement.append(tip);

  tip.style.left = box.left + 'px';
  tip.style.top = box.top - tip.offsetHeight + 'px';
};

const hideTip = e => {
  mail = e.target.value;

  if (tip) {
    tip.remove();
    tip = null;
  }

  if (!e.target.value) e.target.value = e.target.dataset.placeholder;
};

input.addEventListener('focus', showTip);
input.addEventListener('blur', hideTip);
*/

////////////////

// решение с учебника http://plnkr.co/edit/YJKURoqtXX5SGWv0rYB3?p=preview

/////////////////////////////////////////////////

/*
Мышонок на "клавиатурном" приводе

Кликните по мышонку. Затем нажимайте клавиши со стрелками, и он будет двигаться.
Демо в новом окне
В этой задаче запрещается ставить обработчики куда-либо, кроме элемента #mouse.
Можно изменять атрибуты и классы в HTML.
http://plnkr.co/edit/vuoj7pkc6hqfUy1Vh1q8?p=preview
 */

////////////////

/*
'use strict';

let mouse = document.querySelector('#mouse');
const STEP = 10;

const getCoords = elem => {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    bottom: box.bottom + pageYOffset,
    left: box.left + pageXOffset,
    right: box.right + pageXOffset
  };
};

const move = e => {
  let box = getCoords(e.target);

  switch (e.keyCode) {
  case 39:
    console.log('right');
    e.target.style.left = box.left + STEP + 'px';
    break;
  case 37:
    console.log('left');
    e.target.style.left = box.left - STEP + 'px';
    break;
  case 38:
    console.log('top');
    e.target.style.top = box.top - STEP + 'px';
    break;
  case 40:
    console.log('bottom');
    e.target.style.top = box.top + STEP + 'px';
    break;
  }
};

const start = e => {
  console.log('in');
  e.target.addEventListener('keydown', move);
};

const stop = e => {
  console.log('out');
  e.target.removeEventListener('keydown', move);
};

mouse.addEventListener('focus', start);
mouse.addEventListener('blur', stop);
 */

////////////////

// решение с учебника http://plnkr.co/edit/3cTK6an0SoHwdWi6ZtAw?p=preview

/*
document.getElementById('mouse').onclick = function() {
  this.style.left = this.getBoundingClientRect().left + 'px';
  this.style.top = this.getBoundingClientRect().top + 'px';

  this.style.position = 'fixed';
};


document.getElementById('mouse').onkeydown = function(e) {
  switch (e.keyCode) {
    case 37: // влево
      this.style.left = parseInt(this.style.left) - this.offsetWidth + 'px';
      return false;
    case 38: // вверх
      this.style.top = parseInt(this.style.top) - this.offsetHeight + 'px';
      return false;
    case 39: // вправо
      this.style.left = parseInt(this.style.left) + this.offsetWidth + 'px';
      return false;
    case 40: // вниз
      this.style.top = parseInt(this.style.top) + this.offsetHeight + 'px';
      return false;
  }
};
*/

/////////////////////////////////////////////////

/*
Горячие клавиши

Создайте <div>, который при нажатии Ctrl+E превращается в <textarea>.
Изменения, внесенные в поле, можно сохранить обратно в <div> сочетанием клавиш Ctrl+S, при этом <div> получит в виде HTML содержимое <textarea>.
Если же нажать Esc, то <textarea> снова превращается в <div>, изменения не сохраняются.
http://plnkr.co/edit/ecKFxlIwITCnts0XOi8m?p=preview
 */

////////////////

/*
'use strict';

let area = document.querySelector('#area');
let view = document.querySelector('#view');

const out = (text, div) => {
  div.style.display = '';
  text.style.display = '';
};

const edit = (text, div) => {
  div.style.display = 'none';
  text.style.display = 'block';

  if (div.textContent) text.value = div.textContent;
  text.focus();
};

const save = (text, div) => {
  div.style.display = '';
  text.style.display = '';

  div.textContent = text.value;
};

const action = e => {
  if (e.keyCode === 27) {
    e.preventDefault();
    console.log('out');
    out(area, view);

  } else if ( (e.ctrlKey || e.metaKey) && e.keyCode === 69 ) {
    e.preventDefault();
    console.log('edit');
    edit(area, view);

  } else if ( (e.ctrlKey || e.metaKey) && e.keyCode === 83 ) {
    e.preventDefault();
    console.log('save');
    save(area, view);

  } else {
    console.log('???');
    return;
  }
};

document.addEventListener('keydown', action);
 */

////////////////

// решение с учебника http://plnkr.co/edit/VkTGOO7NSXi47RwpGREM?p=preview

/////////////////////////////////////////////////

/*
Редактирование TD по клику

Сделать ячейки таблицы td редактируемыми по клику.
При клике – ячейка <td> превращается в редактируемую, можно менять HTML. Размеры ячеек при этом не должны меняться.
В один момент может редактироваться одна ячейка.
При редактировании под ячейкой появляются кнопки для приема и отмена редактирования, только клик на них заканчивает редактирование.
http://plnkr.co/edit/LttOLvpbN6SUxu4PSwUb?p=preview
 */

////////////////

/*
'use strict';

let table = document.querySelector('#bagua-table');
let editing = false;

const getCoords = elem => {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    bottom: box.bottom + pageYOffset,
    left: box.left + pageXOffset,
    right: box.right + pageXOffset
  };
};

const edit = e => {
  if ( !(table.contains(e.target) && e.target.closest('td')) ) return;
  if (editing) return;

  let td = e.target.closest('td');
  console.log(td);
  
  const showEditor = () => {
    editing = true;

    let editor = document.querySelector('.editor');
    editor.style.display = 'block';
    editor.style.width = td.offsetWidth + 'px';
    editor.style.left = getCoords(td).left + 'px';
    editor.style.top = getCoords(td).top + 'px';

    let area = editor.children.editTD;
    area.style.width = td.offsetWidth - 6 + 'px';
    area.style.height = td.offsetHeight - 6 + 'px';
    area.value = td.innerHTML;
    area.focus();

    let btnOk = editor.children.ok;
    let btnCancel = editor.children.cancel;

    const save = e => {
      console.log('ok');
      td.innerHTML = area.value;
      editor.style.display = '';
      editing = false;
      btnOk.removeEventListener('click', save);
      btnCancel.removeEventListener('click', cancel);
    };

    const cancel = e => {
      console.log('cancel');
      editor.style.display = '';
      editing = false;
      btnOk.removeEventListener('click', save);
      btnCancel.removeEventListener('click', cancel);
    };

    btnOk.addEventListener('click', save);
    btnCancel.addEventListener('click', cancel);
  };

  showEditor();
};

table.addEventListener('click', edit);
 */

////////////////

// решение из учебника http://plnkr.co/edit/9dHKw8j1PAB1J8d84tHp?p=preview

/////////////////////////////////////////////////

/*
Красивый плейсхолдер для INPUT

Создайте для <input type="password"> красивый, стилизованный плейсхолдер, например (кликните на тексте):
При клике плейсхолдер просто исчезает и дальше не показывается.
http://plnkr.co/edit/1ra3f8LKWX9zlDm6kBKV?p=preview
 */

////////////////

/*
placeholder.onclick = function(e) {
  this.style.display = 'none';
  input.focus();
};
*/

// решение с учебника

/*
placeholder.onclick = function() {
  input.focus();
};

// onfocus сработает и вызове input.focus() и при клике на input
input.onfocus = function() {
  if (placeholder.parentNode) {
    placeholder.parentNode.removeChild(placeholder);
  }
};
*/

/////////////////////////////////////////////////

/*
Поле, предупреждающее о включенном CapsLock

Создайте поле, которое будет предупреждать пользователя, если включен CapsLock. Выключение CapsLock уберёт предупреждение.
Такое поле может помочь избежать ошибок при вводе пароля.
http://plnkr.co/edit/yS73r1zkI9g69LocCuey?p=preview
 */

////////////////

/*
'use strict';

let input = document.querySelector('input');
let warn = document.querySelector('#capsIndicator');
let caps = false;

const checkCaps = e => {
  let char = String.fromCharCode(e.keyCode || e.charCode);

  if (!isNaN(char)) return; // проверка на цифру

  if (char === char.toUpperCase() && !e.shiftKey) {
    console.log('Caps!');
    caps = true;
    warn.style.display= 'block';

  } else if (char === char.toLowerCase() && e.shiftKey) {
    console.log('Caps!');
    caps = true;
    warn.style.display= 'block';

  } else if (char === char.toUpperCase() && e.shiftKey) {
    console.log('Caps off');
    caps = false;
    warn.style.display= 'none';

  } else if (char === char.toLowerCase() && !e.shiftKey) {
    console.log('Caps off');
    caps = false;
    warn.style.display= 'none';
  }
};

const toggleCaps = e => {
  if (e.keyCode !== 20) return;

  if (!caps && e.keyCode === 20) {
    console.log('Caps!');
    caps = true;
    warn.style.display= 'block';

  } else if (caps && e.keyCode === 20) {
    console.log('Caps off');
    caps = false;
    warn.style.display= 'none';
  }
};

input.addEventListener('keypress', checkCaps);
document.addEventListener('keydown', toggleCaps);
 */

////////////////

// +++
// решение с учебника http://plnkr.co/edit/6V1honnJn6WeOtX5TUcF?p=preview

/*
// проверка на спец.клавишу
function getChar(event) {
  if (event.which === null) {
    if (event.keyCode < 32) return null;
    return String.fromCharCode(event.keyCode); // IE
  }

  if (event.which !== 0 && event.charCode !== 0) {
    if (event.which < 32) return null;
    return String.fromCharCode(event.which); // остальные
  }

  return null; // специальная клавиша
}
*/

/////////////////////////////////////////////////

// кроссбраузерный вариант .onchange

/*
var checkbox = document.body.children[0];

if ("onpropertychange" in checkbox) {
  // старый IE
  checkbox.onpropertychange = function() {
    // проверим имя изменённого свойства
    if (event.propertyName == "checked") {
      alert(checkbox.checked);
    }
  };
} else {
  // остальные браузеры
  checkbox.onchange = function() {
    alert(checkbox.checked);
  };
}
 */

/////////////////////////////////////////////////

// костыль для .oninput для IE9-

/*
var timerId;

sms.onfocus = function() {

  var lastValue = sms.value;
  timerId = setInterval(function() {
    if (sms.value != lastValue) {
      showCount();
      lastValue = sms.value;
    }
  }, 20);
};

sms.onblur = function() {
  clearInterval(timerId);
};

function showCount() {
  result.innerHTML = sms.value.length;
}
*/

/////////////////////////////////////////////////

/*
Автовычисление процентов по вкладу

Создайте интерфейс для автоматического вычисления процентов по вкладу.
Ставка фиксирована: 12% годовых. При включённом поле «капитализация» – проценты приплюсовываются к сумме вклада каждый месяц (сложный процент).
http://damoney.ru/finance/slozniy-procent.php
Технические требования:
- В поле с суммой должно быть нельзя ввести не-цифру. При этом пусть в нём работают специальные клавиши и сочетания Ctrl-X/Ctrl-V.
- Изменения в форме отражаются в результатах сразу.
http://plnkr.co/edit/KcLQ5c5EAlbAtGIH6UKt?p=preview
 */

////////////////

/*
'use strict';

let form = document.querySelector('form[name="calculator"]');

const calc = form => {
  let percent = parseFloat(form.percent.value) || 0;
  let sum1 = parseInt(form.money.value) || 0;
  let sum2 = 0;
  let checkbox = form.capitalization.checked;
  let term = parseInt(form.months.value);

  if (sum1 > 0) {
    if (!checkbox) { // простой процент
      sum2 = sum1 + sum1 / 100 * percent / 12 * term;
    } else { // сложный процент
      sum2 = sum1 * Math.pow( (1 + percent / 100 / 12), term );
    }
    sum2 = Math.round(sum2);
  }

  let diffMoney = sum2 - sum1;
  let diffPercent = sum2 !== 0 ? (sum2 / sum1 * 100 - 100).toFixed(2) : sum2.toFixed(2);

  return { sum1, sum2, diffMoney, diffPercent };
};

const print = props => {
  let view = document.querySelector('#diagram');
  let moneyBefore = view.querySelector('#money-before');
  let moneyAfter = view.querySelector('#money-after');
  let heightAfter = view.querySelector('#height-after');
  let moneyPercent = view.querySelector('#money-percent');
  let moneyProfit = view.querySelector('#money-profit');

  moneyBefore.textContent = props.sum1;
  moneyAfter.textContent = props.sum2;
  heightAfter.style.height = 100 + parseInt(props.diffPercent) + 'px';
  moneyPercent.textContent = props.diffPercent + '%';
  moneyProfit.textContent = props.diffMoney;
};

print(calc(form));

const check = e => {
  if ( (e.keyCode < 48 || e.keyCode > 57) &&
        e.keyCode !== 46 ) e.preventDefault();
  // допускаются '0-9' и '.' для дробных процентов
};

const output = e => {
  if (e.target.type !== 'checkbox' && isNaN(e.target.value)) return;
  if (e.target.value < 0) e.target.value = 0;
  print(calc(form));
};

form.addEventListener('keypress', check);
form.addEventListener('change', output);
// input срабатывает и для select (o_O)
form.addEventListener('input', output);
*/

////////////////

// решение с учебника http://plnkr.co/edit/bPIDQRkX6vWFYbDhBQpJ?p=preview

/////////////////////////////////////////////////

/*
Модальное диалоговое окно

Создайте функцию showPrompt(text, callback), которая выводит форму для ввода с сообщением text и кнопками ОК/Отмена.
- При отправке формы (OK/ввод в текстовом поле) – должна вызываться функция callback со значением поля.
- При нажатии на Отмена или на клавишу Esc – должна вызываться функция callback(null). Клавиша Esc должна закрывать форму всегда, даже если поле для ввода сообщения не в фокусе.
Особенности реализации:
- Форма должна показываться в центре окна (и оставаться в центре при изменении его размеров, а также при прокрутке окна!).
- Текст может состоять из нескольких строк, возможен любой HTML
- При показе формы остальные элементы страницы использовать нельзя, не работают другие кнопки и т.п, это окно – модальное.
- При показе формы – сразу фокус на INPUT для ввода.
- Нажатия Tab/Shift+Tab переключают в цикле только по полям формы, они не позволяют переключиться на другие элементы страницы.
Пример использования:

showPrompt("Введите что-нибудь<br>... умное :)", function(value) {
  alert( value );
});

Исходный HTML/CSS для формы с готовым fixed-позиционированием – в песочнице.
http://plnkr.co/edit/UtsqEwM0p7rc6VXOsPpD?p=preview
*/

////////////////

/*
'use strict';

let push = document.querySelector('button[name="modal"]');

const showOverlay = e => {
  let overlay = document.querySelector('#prompt-form-container');
  let answer = overlay.querySelector('input[name="text"]');
  overlay.hidden = false;
  answer.focus();
};

push.addEventListener('click', showOverlay);

const showPrompt = (text, callback) => {
  let form = document.querySelector('#prompt-form');
  let question = form.querySelector('#prompt-message');
  question.innerHTML = text;
  let answer = form.text;
  let btnSubmit = form.ok;
  let btnCancel = form.cancel;
  let count = 0;

  const doSubmit = e => {
    //console.log('submit');
    e.preventDefault();
    if (form.parentElement.hidden) return;

    form.parentElement.hidden = true;
    //let str = answer.value || 'нет ответа :(';
    callback(answer.value || 'нет ответа :(');
  };

  const doCancel = e => {
    if (!form.parentElement.hidden &&
       (e.keyCode === 27 || e.target === btnCancel) ) {
      form.parentElement.hidden = true;
      callback(null);

    } else if (!form.parentElement.hidden && e.keyCode === 9) {
      e.preventDefault();
      let focusArr = [answer, btnSubmit, btnCancel];
      // console.log(count);
      focusArr[count].focus();
      // console.log(focusArr[count]);
      count++;
      if (count > 1) count = 0;

    } else return;
  };

  btnSubmit.addEventListener('click', doSubmit);
  btnCancel.addEventListener('click', doCancel);
  form.addEventListener('submit', e => { e.preventDefault(); });
  document.addEventListener('keydown', doCancel);
};

showPrompt("Введите что-нибудь<br>... умное :)", function(value) {
  alert( value );
});
 */

////////////////

// решение с учебника http://plnkr.co/edit/gIVdgTQ5MXKy8a19XKvz?p=preview

/////////////////////////////////////////////////

/*
Валидация формы

Напишите функцию validate(form), которая проверяет содержимое формы по клику на кнопку «Проверить».
Ошибки:
- Одно из полей не заполнено.
- Пароли не совпадают.
Ошибка должна сопровождаться сообщением у поля.
http://plnkr.co/edit/zcrCz8Da9hVk78dLLECA?p=preview
 */

////////////////

/*
'use strict';

const createWarn = () => {
  let td = document.createElement('td');
  td.classList.add('errorText');
  return td;
};

let form = document.querySelector('form');

const validate = form => {
  console.log('validation...');

  if (!form.from.value) {
    if (form.from.classList.contains('errorBorder')) return;
    let parent = form.from.closest('tr');
    let warn = createWarn();
    form.from.classList.add('errorBorder');
    warn.textContent = 'введите имя';
    parent.append(warn);
  }

  if (!form.password.value) {
    if (form.password.classList.contains('errorBorder')) return;
    let parent = form.password.closest('tr');
    let warn = createWarn();
    form.password.classList.add('errorBorder');
    warn.textContent = 'введите пароль';
    parent.append(warn);
  }

  if (!form.password2.value) {
    if (form.password2.classList.contains('errorBorder')) return;
    let parent = form.password2.closest('tr');
    let warn = createWarn();
    form.password2.classList.add('errorBorder');
    warn.textContent = 'подтвердите пароль';
    parent.append(warn);
  }

  if (form.password.value !== form.password2.value) {
    if (form.password.classList.contains('errorBorder')) return;
    let parent = form.password.closest('tr');
    let warn = createWarn();
    form.password.classList.add('errorBorder');
    form.password2.classList.add('errorBorder');
    warn.textContent = 'пароли не совпадают';
    parent.append(warn);
  }

  if (!form.to.value) {
    if (form.to.classList.contains('errorBorder')) return;
    let parent = form.to.closest('tr');
    let warn = createWarn();
    form.to.classList.add('errorBorder');
    warn.textContent = 'выберите куда';
    parent.append(warn);
  }

  if (!form.message.value) {
    if (form.message.classList.contains('errorBorder')) return;
    let parent = form.message.closest('label');
    let warn = document.createElement('span');
    warn.classList.add('errorText');
    form.message.classList.add('errorBorder');
    warn.textContent = 'уточните информацию';
    parent.insertBefore(warn, parent.children[0]);
  }
};

const check = e => {
  if ( !(form.contains(e.target) && e.target.tagName === 'BUTTON') ) return;
  validate(form);
};

form.addEventListener('click', check);
 */

////////////////

// +++
// решение с учебника http://plnkr.co/edit/2u0U9S5nZlcurphOZEAG?p=preview

/////////////////////////////////////////////////

// генератор случайного пароля

/*
const randPass = (num, flag) => {
  let chars = ['0','1','2','3','4','5','6','7','8','9',
               'A','B','C','D','E','F','G','H','I','J','K','L','M','N',
               '0','1','2','3','4','5','6','7','8','9',
               'O','P','Q','R','S','T','U','V','W','X','Y','Z',
               '0','1','2','3','4','5','6','7','8','9',
               'a','b','c','d','e','f','g','h','i','j','k','l','m','n',
               '0','1','2','3','4','5','6','7','8','9',
               'o','p','q','r','s','t','u','v','w','x','y','z',
               '0','1','2','3','4','5','6','7','8','9'];
  let pass = [];
  flag = flag || 'l';
  
  for (let i = 0; i < num; i++) {
    let char = chars[ Math.floor(Math.random() * chars.length) ];
    pass.push(char);
  }
  
  switch (flag) {
    case 'l':
      return pass.join('').toLowerCase();
    case 'u':
      return pass.join('').toUpperCase();
    case 'r':
      return pass.join('');
    default:
      return pass.join('').toLowerCase();
  }
};

randPass(10);
*/

/////////////////////////////////////////////////

/*
Часики

Создайте компонент «Часы» (Clock).

var clock = new Clock({
  elem: элемент
});
clock.start(); // старт
clock.stop(); // стоп

Остальные методы, если нужны, должны быть приватными.
При нажатии на alert часы должны приостанавливаться, а затем продолжать идти с правильным временем.
http://plnkr.co/edit/ptePT6EYAIi6DAUbzNkp?p=preview
 */

////////////////

/*
'use strict';

class Clock {
  constructor(props) {
    // this.prop = props.prop;
    const render = () => {
      let div = document.createElement('div');

      div.id = 'clock';
      div.classList.add('clock');
      div.innerHTML = '<span class="hour">00</span>:<span class="min">00</span>:<span class="sec">00</span>';
      
      document.querySelector('h1').after(div);
      
      return div;
    };

    if (!props || !props.elem) this.elem = render();
    else this.elem = props.elem;
  }

  _update(elem) {
    let clock = elem;
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    clock.children[0].innerHTML = hours;

    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    clock.children[1].innerHTML = minutes;

    let seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;
    clock.children[2].innerHTML = seconds;
  }

  start() {
    this._timerId = setInterval(this._update, 1000, this.elem);
    this._update(this.elem);
  }

  stop() {
    clearInterval(this._timerId);
  }
}

let pageClock = new Clock({
  elem: document.getElementById('clock')
});
 */

////////////////

// решение с учебника http://plnkr.co/edit/QR4RGzitn1xHvcpeppUf?p=preview

// функциональное ООП

/*
function Clock(options) {
  var elem = options.elem;

  var timer;

  function render() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    elem.querySelector('.hour').innerHTML = hours;

    var min = date.getMinutes();
    if (min < 10) min = '0' + min;
    elem.querySelector('.min').innerHTML = min;

    var sec = date.getSeconds();
    if (sec < 10) sec = '0' + sec;
    elem.querySelector('.sec').innerHTML = sec;
  }

  this.stop = function() {
    clearInterval(timer);
  };

  this.start = function() {
    render();
    timer = setInterval(render, 1000);
  };
}
 */

/////////////////////////////////////////////////

/*
Слайдер-компонент

Перепишите слайдер в виде компонента
Исходный документ возьмите из решения задачи Слайдер.
http://plnkr.co/edit/qwrhqAarRXyJCEeqCJGl?p=preview
 */

////////////////

/*
'use strict';

function Slider(opts) {
  var elem = opts.elem;
  var thumb = elem.children[0];
  var thumbBox, sliderBox, shiftX;

  function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }

  function startSlide(e) {
    if (!e.target.closest('.thumb')) return;

    e.preventDefault();
    sliderBox = getCoords(elem);
    thumbBox = getCoords(thumb);
    shiftX = e.pageX - thumbBox.left;

    document.addEventListener('mousemove', moveSlide);
    document.addEventListener('mouseup', stopSlide);
  }

  function moveSlide(e) {
    var newLeft = e.pageX - shiftX - sliderBox.left;
    var rightEdge = elem.offsetWidth - thumb.offsetWidth;

    if (newLeft < 0) newLeft = 0;
    if (newLeft > rightEdge) newLeft = rightEdge;

    thumb.style.left = newLeft + 'px';
  }

  function stopSlide(e) {
    document.removeEventListener('mousemove', moveSlide);
    document.removeEventListener('mouseup', stopSlide);
  }

  elem.addEventListener('mousedown', startSlide);
  elem.addEventListener('dragstart', startSlide);

  this.elem = elem;
}

var pageSlider = new Slider({
  elem: document.getElementById('slider')
});
 */

////////////////

// решение с учебника http://plnkr.co/edit/PzYIXszc5fxXZ3KLWHzJ?p=preview

/////////////////////////////////////////////////

/*
Компонент: список с выделением

Перепишите решение задачи Список с выделением в виде компонента.
http://plnkr.co/edit/NthETyzybeilD13jen4y?p=preview
У компонента должен быть единственный публичный метод getSelected(), который возвращает выбранные значения в виде массива.

var listSelect = new ListSelect({
  elem: document.querySelector('ul')
});
// listSelect.getSelected()
 */

////////////////

/*
'use strict';

function ListSelect(opts) {
  var ul = opts.elem;
  var lastClickedLi = null;
  var arr = [];

  function addToArr(elem) {
    if ( !~arr.indexOf(elem.textContent) ) arr.push(elem.textContent);
  }

  function removeFromArr(elem) {
    var i = arr.indexOf(elem.textContent);
    arr.splice(i, 1);
  }

  function toggleSelect(elem) {
    if ( !elem.classList.contains('selected') ) {
      elem.classList.add('selected');
      addToArr(elem);
    } else {
      elem.classList.remove('selected');
      removeFromArr(elem);
    }
  }

  function selectFromLast(li) {
    var startElem = lastClickedLi || ul.children[0];
    var isLastClickedBefore = startElem.compareDocumentPosition(li) & 4;

    if (isLastClickedBefore) {
      for (var elem = startElem; elem !== li; elem = elem.nextElementSibling) {
        elem.classList.add('selected');
        addToArr(elem);
      }
    } else {
      for (var elem = startElem; elem !== li; elem = elem.previousElementSibling) {
        elem.classList.add('selected');
        addToArr(elem);
      }
    }
    elem.classList.add('selected');
    addToArr(elem);
  }

  function deselectAll() {
    for (var i = 0; i < ul.children.length; i++) ul.children[i].classList.remove('selected');
    arr.length = 0;
  }

  function selectSingle(elem) {
    deselectAll();
    elem.classList.add('selected');
    addToArr(elem);
  }

  function doSelect(e) {
    if (e.target.tagName != "LI") return;

    if (e.metaKey || e.ctrlKey) {
      toggleSelect(e.target);
    } else if (e.shiftKey) {
      selectFromLast(e.target);
    } else {
      selectSingle(e.target);
    }
    lastClickedLi = e.target;
  }

  ul.addEventListener('mousedown', function(e) { e.preventDefault(); });
  ul.addEventListener('click', doSelect);

  this.elem = ul;

  this.getSelected = function() {
    return arr;
  };
}

var listSelect = new ListSelect({
  elem: document.querySelector('ul')
});
// listSelect.getSelected();
 */

////////////////

// решение с учебника http://plnkr.co/edit/aZh8zsnFXLSqqD8K1ihA?p=preview

/*
this.getSelected = function() {
  return [].map.call(elem.querySelectorAll('.selected'), function(li) {
    return li.innerHTML;
  });
};
 */

/////////////////////////////////////////////////

/*
Голосовалка

Напишите функцию-конструктор new Voter(options) для голосовалки. Она должна получать элемент в options.elem, в следующей разметке:

<div id="voter" class="voter">
  <span class="down">—</span>
  <span class="vote">0</span>
  <span class="up">+</span>
</div>

По клику на + и — число должно увеличиваться или уменьшаться.
Публичный метод voter.setVote(vote) должен устанавливать текущее число – значение голоса.
Все остальные методы и свойства пусть будут приватными.
http://plnkr.co/edit/MxPN96AW8lblZ0vBmoAk?p=preview
 */

////////////////

/*
'use strict';

function Voter(opts) {
  let elem = opts.elem;
  let vote = elem.querySelector('.vote');

  function up() {
    vote.textContent++;
  }

  function down() {
    vote.textContent--;
  }

  function change(e) {
    if (e.target.closest('.up')) up();
    else if (e.target.closest('.down')) down();
    else return;
  }

  elem.addEventListener('mousedown', function(e) { e.preventDefault(); });
  elem.addEventListener('click', change);

  this.elem = elem;

  this.setVote = function(n) {
    vote.textContent = n;
  };

  this.up = function() {
    up();
  };

  this.down = function() {
    down();
  };
}

let voter = new Voter({
  elem: document.getElementById('voter')
});

voter.setVote(1);
 */

////////////////

// решение с учебника http://plnkr.co/edit/SUbFeHu3fLPfIRcrlYoA?p=preview

/////////////////////////////////////////////////

/*
Голосовалка в прототипном стиле ООП

Поменяйте стиль ООП в голосовалке, созданной в задаче Голосовалка на прототипный.
Внешний код, использующий класс Voter, не должен измениться.
В качестве исходного кода возьмите решение задачи Голосовалка
http://plnkr.co/edit/SUbFeHu3fLPfIRcrlYoA?p=preview
 */

////////////////

/*
'use strict';

class Voter {
  constructor(opts) {
    let vote = opts.elem.querySelector('.vote');

    const up = () => vote.textContent++;
    const down = () => vote.textContent--;

    const change = e => {
      if (e.target.closest('.up')) up();
      else if (e.target.closest('.down')) down();
      else return;
    };

    opts.elem.addEventListener('mousedown', e => e.preventDefault());
    opts.elem.addEventListener('click', change);

    this.elem = opts.elem;
  }

  get vote() {
    return this.elem.querySelector('.vote').textContent;
  }

  set vote(n) {
    this.elem.querySelector('.vote').textContent = n;
  }
}

let voter = new Voter({
  elem: document.getElementById('voter')
});

voter.vote = 1;
 */

////////////////

// решение с учебника http://plnkr.co/edit/XH6nO64OHzw60aYTGYmE?p=preview

/////////////////////////////////////////////////

/*
Добавить двойной голос в голосовалку

Создайте функцию-конструктор StepVoter, которая наследует от голосовалки, созданной в задаче Голосовалка в прототипном стиле ООП и добавляет голосовалке опцию options.step, которая задаёт «шаг» голоса.

var voter = new StepVoter({
  elem: document.getElementById('voter'),
  step: 2 // увеличивать/уменьшать сразу на 2 пункта
});

В реальном проекте влияние клика на голосовалку может зависеть от полномочий или репутации посетителя.
В качестве исходного кода используйте решение задачи Голосовалка в прототипном стиле ООП.
http://plnkr.co/edit/XH6nO64OHzw60aYTGYmE?p=preview
P.S. Код voter.js изменять нельзя, нужно не переписать Voter, а отнаследовать от него.
 */

////////////////

/*
'use strict';

class Voter {
  constructor(opts) {
    this.elem = opts.elem;
    this.step = opts.step || 1;

    let vote = this.elem.querySelector('.vote');

    const up = () => vote.textContent = parseInt(vote.textContent) + this.step;
    const down = () => vote.textContent = parseInt(vote.textContent) - this.step;

    const change = e => {
      if (e.target.closest('.up')) up();
      else if (e.target.closest('.down')) down();
      else return;
    };

    opts.elem.addEventListener('mousedown', e => e.preventDefault());
    opts.elem.addEventListener('click', change);
  }

  get vote() { return this.elem.querySelector('.vote').textContent; }
  set vote(n) { this.elem.querySelector('.vote').textContent = n; }
}

let voter = new Voter({
  elem: document.getElementById('voter'),
  step: 2
});

voter.vote = 1;
 */

////////////////

// решение с учебника http://plnkr.co/edit/8E0Hd7byFsJGu5wKduOW?p=preview

/////////////////////////////////////////////////

/*
Шаблон для таблицы с пользователями

Есть данные:

var users = [
  {name: "Вася", age: 10},
  {name: "Петя", age: 15},
  {name: "Женя", age: 20},
  {name: "Маша", age: 25},
  {name: "Даша", age: 30},
];

Выведите их в виде таблицы TABLE/TR/TD при помощи шаблона.
http://plnkr.co/edit/gmENWxAdu88yO8e83NWc?p=preview
 */

////////////////

/*
<!-- html template here -->

<script type="text/template" id="grid-template">
<table>
  <thead>
    <tr>
      <th>Имя</th>
      <th>Возраст</th>
    </tr>
  </thead>
  <tbody>
    <% users.forEach(function(user) { %>
    <tr>
      <td><%-user.name%></td>
      <td><%-user.age%></td>
    </tr>
    <% }); %>
  </tbody>
</table>
</script>
 */

/*
// javascript code here

'use strict';

let users = [{
  name: "Вася",
  age: 10
}, {
  name: "Петя",
  age: 15
}, {
  name: "Женя",
  age: 20
}, {
  name: "Маша",
  age: 25
}, {
  name: "Даша",
  age: 30
}, ];

let templateTable = _.template( document.getElementById('grid-template').innerHTML.trim() );
document.getElementById('grid-holder').innerHTML = templateTable(users);
 */

////////////////

// решение с учебника http://plnkr.co/edit/ImHXjxbFQj9mK8Idr7XZ?p=preview

/////////////////////////////////////////////////

/*
Сделайте меню ссылками

Возьмите в качестве исходного кода меню на шаблонах и модифицируйте его, чтобы оно выводило не просто список, а список ссылок.
Вместо массива items меню должно принимать объект items, вот так:

var menu = new Menu({
  title: "Сладости",
  template: _.template(document.getElementById('menu-template').innerHTML),
  listTemplate: _.template(document.getElementById('menu-list-template').innerHTML),
  items: {
    "donut": "Пончик",
    "cake": "Пирожное",
    "chocolate": "Шоколадка"
  }
});

Вывод в шаблоне пусть будет не просто <li>Пончик</li>, а через ссылку: <a href="#donut">Пончик</a>. При клике на ссылку должно выводиться название из её href.
http://plnkr.co/edit/RF5fSs2EHOTsGexzGU77?p=preview
 */

////////////////

/*
<!-- html template here -->

<script type="text/template" id="menu-template">
  <div class="menu">
    <span class="title"><%-title%></span>
  </div>
</script>

<script type="text/template" id="menu-list-template">
  <ul>
    <% for (var item in items) { %>
    <li><a href="<%=encodeURIComponent(item)%>"><%-items[item]%></a></li>
    <% } %>
  </ul>
</script>
 */

////////////////

// решение с учебника http://plnkr.co/edit/4kjiIa1wnoDr8kLPFcmf?p=preview

/////////////////////////////////////////////////

/*
Голосовалка "на событиях"

Добавьте событие в голосовалку, созданную в задаче Голосовалка, используя механизм генерации событий на объекте.
Пусть каждое изменение голоса сопровождается событием change со свойством detail, содержащим обновлённое значение:

var voter = new Voter({
  elem: document.getElementById('voter')
});
voter.setVote(5);
document.getElementById('voter').addEventListener('change', function(e) {
  alert( e.detail ); // новое значение голоса
});

Все изменения голоса должны производиться централизованно, через метод setVote, который и генерирует событие.
Результат использования кода выше (планируемый):
Исходный документ возьмите из решения задачи Голосовалка.
http://plnkr.co/edit/SUbFeHu3fLPfIRcrlYoA?p=preview
 */

////////////////

/*
'use strict';

function Voter(options) {
  var elem = options.elem;

  var voteElem = elem.querySelector('.vote');

  elem.onclick = function(event) {
    if (event.target.closest('.down')) {
      voteDecrease();
    } else if (event.target.closest('.up')) {
      voteIncrease();
    }
  };

  elem.onmousedown = function() {
    return false;
  };

  function voteDecrease() {
    setVote(+voteElem.innerHTML - 1);
  }

  function voteIncrease() {
    setVote(+voteElem.innerHTML + 1);
  }

  function setVote(vote) {
    voteElem.innerHTML = +vote;
    var widgetEvent = new CustomEvent('change', {
      bubbles: true,
      detail: +vote
    });
    elem.dispatchEvent(widgetEvent);
  }

  this.setVote = setVote;
}
*/

////////////////

// решение с учебника http://plnkr.co/edit/IvMMi8tQFsvtv4GYqszJ?p=preview

/////////////////////////////////////////////////

/*
Список с выделением и событием

Добавьте в решение задачи Компонент: список с выделением событие select.
Оно должно срабатывать при каждом изменении выбора и в свойстве detail содержать список выбранных строк.
Во внешнем коде добавьте обработчик к списку, который при изменениях выводит список значений.
В качестве исходного кода возьмите решение задачи Компонент: список с выделением.
http://plnkr.co/edit/aZh8zsnFXLSqqD8K1ihA?p=preview
 */

////////////////

/*
'use strict';

function ListSelect(options) {
  var elem = options.elem;

  var lastClickedLi = null;

  elem.onmousedown = function() {
    return false;
  };

  elem.onclick = function(e) {
    var li = e.target.closest('li');
    if (!li) return;

    if (e.metaKey || e.ctrlKey) { // для Mac проверяем Cmd, т.к. Ctrl + click там контекстное меню
      toggleSelect(li);
    } else if (e.shiftKey) {
      selectFromLast(li);
    } else {
      selectSingle(li);
    }
    lastClickedLi = li;
    selectEvent( getSelected() );
  };

  function selectEvent(content) {
    var widgetEvent = new CustomEvent('select', {
      bubbles: true,
      detail: content
    });
    elem.dispatchEvent(widgetEvent);
  }

  function deselectAll() {
    [].forEach.call(elem.children, function(child) {
      child.classList.remove('selected');
    });
  }

  function toggleSelect(li) {
    li.classList.toggle('selected');
  }

  function selectSingle(li) {
    deselectAll();
    li.classList.add('selected');
  }

  function selectFromLast(target) {
    var startElem = lastClickedLi || elem.children[0];

    target.classList.add('selected');
    if (startElem === target) {
      // клик на том же элементе, что и раньше
      // это особый случай
      return;
    }

    var isLastClickedBefore = startElem.compareDocumentPosition(target) & 4;

    if (isLastClickedBefore) {
      for (var elem = startElem; elem !== target; elem = elem.nextElementSibling) {
        elem.classList.add('selected');
      }
    } else {
      for (var elem = startElem; elem !== target; elem = elem.previousElementSibling) {
        elem.classList.add('selected');
      }
    }
  }

  function getSelected() {
    return [].map.call(elem.querySelectorAll('.selected'), function(li) {
      return li.innerHTML;
    });
  }

  this.getSelected = getSelected;
}

var listSelect = new ListSelect({
  elem: document.querySelector('ul')
});

document.querySelector('ul').addEventListener('select', function(e) {
  alert(e.detail);
});
 */

////////////////

// решение с учебника http://plnkr.co/edit/TPVvKSjWg2stmx1S3loW?p=preview

/////////////////////////////////////////////////

/*
Свой селект

Напишите свой, самостоятельно оформленный, селект.
Требования:
- Открытие и закрытие по клику на заголовок.
- Закрытие селекта происходит при выборе или клике на любое другое место документа, в том числе на другой аналогичный селект.
- Событие "select" при выборе опции возникает на элементе селекта и всплывает.
- Значение опции хранится в атрибуте data-value (HTML-структура есть в исходном документе).
http://plnkr.co/edit/6BxjjMtb08GbgzvB3YaW?p=preview
 */

////////////////

/*
'use strict';

class CustomSelect {
  constructor(props) {
    let elem = props.elem;
    let title = elem.querySelector('.title');
    
    const selectEvent = content => {
      let e = new CustomEvent('select', {
        bubbles: true,
        detail: content
      });
      elem.dispatchEvent(e);
    };

    const toggleDrop = e => {
      if (elem.contains(e.target) && e.target.closest('.title')) {
        elem.classList.toggle('open');

      } else if (elem.contains(e.target) && e.target.closest('li')) {
        title.textContent = e.target.textContent;
        selectEvent(e.target.dataset.value);
        elem.classList.remove('open');
        
      } else { elem.classList.remove('open'); }
    };

    document.addEventListener('click', toggleDrop);

    this.elem = elem;
  }

  showSelected() {
    return this.elem.querySelector('.title').textContent;
  }
}

let animalSelect = new CustomSelect({
  elem: document.getElementById('animal-select')
});

let foodSelect = new CustomSelect({
  elem: document.getElementById('food-select')
});

document.addEventListener('select', e => document.getElementById('result').textContent = e.detail);
*/

////////////////

// решение с учебника http://plnkr.co/edit/7BfHwWbImtDDymtFeyfH?p=preview

/////////////////////////////////////////////////

/*
Слайдер с событиями

На основе слайдера из задачи Слайдер-компонент создайте графический компонент, который умеет возвращать/получать значение.
Синтаксис:

var slider = new Slider({
  elem: document.getElementById('slider'),
  max: 100 // слайдер на самой правой позиции соответствует 100
});

Метод setValue устанавливает значение:

slider.setValue(50);

У слайдера должно быть два события: slide при каждом передвижении и change при отпускании мыши (установке значения).
Пример использования:

var sliderElem = document.getElementById('slider');
sliderElem.addEventListener('slide', function(event) {
  document.getElementById('slide').innerHTML = event.detail;
});
sliderElem.addEventListener('change', function(event) {
  document.getElementById('change').innerHTML = event.detail;
});

- Ширина/высота слайдера может быть любой, JS-код это должен учитывать.
- Центр бегунка должен располагаться в точности над выбранным значением. Например, он должен быть в центре для 50 при max=100.
Исходный документ – возьмите решение задачи Слайдер-компонент.
http://plnkr.co/edit/PzYIXszc5fxXZ3KLWHzJ?p=preview
 */

////////////////

/*
'use strict';

function Slider(options) {
  var elem = options.elem;
  var thumb = elem.querySelector('.thumb');
  var sliderBox, thumbBox, shiftX, shiftY;

  var max = options.max || 100;
  var pixelsPerValue = (elem.clientWidth - thumb.clientWidth) / max;

  function positionToValue(left) {
    return Math.round(left / pixelsPerValue);
  }

  function valueToPosition(value) {
    return pixelsPerValue * value;
  }

  function slideEvent(content) {
    var e = new CustomEvent('slide', {
      bubbles: true,
      detail: content
    });
    elem.dispatchEvent(e);
  }

  function changeEvent(content) {
    var e = new CustomEvent('change', {
      bubbles: true,
      detail: content
    });
    elem.dispatchEvent(e);
  }

  elem.ondragstart = function() {
    return false;
  };

  elem.onmousedown = function(e) {
    if (e.target.closest('.thumb')) {
      startDrag(e.clientX, e.clientY);
      return false; // disable selection start (cursor change)
    }
  };

  function startDrag(startClientX, startClientY) {
    thumbBox = thumb.getBoundingClientRect();
    shiftX = startClientX - thumbBox.left;
    shiftY = startClientY - thumbBox.top;

    sliderBox = elem.getBoundingClientRect();

    document.addEventListener('mousemove', onDocumentMouseMove);
    document.addEventListener('mouseup', onDocumentMouseUp);
  }

  function moveTo(clientX) {
    // вычесть координату родителя, т.к. position: relative
    var newLeft = clientX - shiftX - sliderBox.left;
    var rightEdge = elem.offsetWidth - thumb.offsetWidth;
    // курсор ушёл вне слайдера
    if (newLeft < 0) { newLeft = 0; }    
    if (newLeft > rightEdge) { newLeft = rightEdge; }

    thumb.style.left = newLeft + 'px';

    return newLeft;
  }

  function onDocumentMouseMove(e) {
    slideEvent( positionToValue( moveTo(e.clientX) ) );
  }

  function onDocumentMouseUp(e) {
    changeEvent( positionToValue( moveTo(e.clientX) ) );
    endDrag();
  }

  function endDrag() {
    document.removeEventListener('mousemove', onDocumentMouseMove);
    document.removeEventListener('mouseup', onDocumentMouseUp);
  }

  function setValue(val) {
    thumb.style.left = valueToPosition(val) + 'px';
    slideEvent(val);
    changeEvent(val);
  }

  this.elem = elem;
  this.setValue = setValue;
}

var slider = new Slider({
  elem: document.getElementById('slider'),
  max: 100 // слайдер на самой правой позиции соответствует 100
});

var sliderElem = document.getElementById('slider');

sliderElem.addEventListener('slide', function(e) {
  document.getElementById('slide').textContent = e.detail;
});

sliderElem.addEventListener('change', function(e) {
  document.getElementById('change').textContent = e.detail;
});

slider.setValue(50);
 */

////////////////

// решение с учебника http://plnkr.co/edit/pAI60McgiArQJNQEJr8i?p=preview

/////////////////////////////////////////////////



































