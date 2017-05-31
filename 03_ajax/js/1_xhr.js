'use strict';

/////////////////////////////////////////////////

// общий шаблон

/*
var xhr = new XMLHttpRequest();

xhr.open('GET', '/my/url', true);

xhr.send();

xhr.onreadystatechange = function() {
  if (this.readyState != 4) return;

  // по окончании запроса доступны:
  // status, statusText
  // responseText, responseXML (при content-type: text/xml)

  if (this.status != 200) {
    // обработать ошибку
    alert( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
    return;
  }

  // получить результат из this.responseText или this.responseXML
}
 */

//////////////////////

// пример

/*
// 1. Создаём новый объект XMLHttpRequest
var xhr = new XMLHttpRequest();

// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
xhr.open('GET', 'phones.json', true);

// 3. Отсылаем запрос
xhr.send();

// 4. Если код ответа сервера не 200, то это ошибка
xhr.onreadystatechange = function() {
  if (xhr.readyState != 4) return;

  button.innerHTML = 'Готово!';

  if (xhr.status != 200) {
    alert(xhr.status + ': ' + xhr.statusText);
  } else {
    alert(xhr.responseText);
  }

}

button.innerHTML = 'Загружаю...';
button.disabled = true
*/

/////////////////////////////////////////////////

// поддержка xhr для IE9-

/*
var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
var xhr = new XHR();
 */

/////////////////////////////////////////////////

/*
IE9- по умолчанию кеширует все ответы, не снабжённые антикеш-заголовком. Другие браузеры этого не делают. Чтобы этого избежать, сервер должен добавить в ответ соответствующие антикеш-заголовки, например Cache-Control: no-cache.
Впрочем, использовать заголовки типа Expires, Last-Modified и Cache-Control рекомендуется в любом случае, чтобы дать понять браузеру (не обязательно IE), что ему следует делать.
 */

// костыль - Анти-Кеш

// xhr.open('GET', 'service?r=' + Math.random(), false);

/////////////////////////////////////////////////

/*
Выведите телефоны

Создайте код, который загрузит файл phones.json из текущей директории и выведет все названия телефонов из него в виде списка.
Исходный код просто выводит содержимое файла (скачайте к себе):
 */

//////////////////////

/*
'use strict';

let button = document.querySelector('#button');

const createList = arr => {
  let ul = document.createElement('ul');

  arr.forEach(obj => {
    let li = document.createElement('li');
    li.textContent = obj.name;
    ul.append(li);
  });

  button.after(ul);
};

function loadPhones() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', './phones.json', true);

  xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) return;

    button.innerHTML = 'Готово!';

    if (xhr.status != 200) {
      console.log(xhr.status + ': ' + xhr.statusText);
    } else {
      try {
        let response = JSON.parse(xhr.responseText);
      } catch(err) {
        console.log(`JSON error: ${err.message}`);
      }
      createList(response);
    }
  };

  xhr.send();

  button.innerHTML = 'Загружаю...';
  button.disabled = true;
}
*/

/////////////////////////////////////////////////

// GET-запрос cкодировкой "кирилицы" в urlencoded
// по-умолчанию: enctype="application/x-www-form-urlencoded"

/*
// Передаём name и surname в параметрах запроса
let xhr = new XMLHttpRequest();
let params = `name=${encodeURIComponent(name)}&surname=${encodeURIComponent(surname)}`;

xhr.open("GET", '/submit?' + params, true);

// Сообщаем серверу про AJAX GET
xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

xhr.onreadystatechange = function() {
  // code...
};
xhr.send();
*/

/////////////////////////////////////////////////

// запрос POST с urlencoded
// по-умолчанию: enctype="application/x-www-form-urlencoded"

/*
let xhr = new XMLHttpRequest();
let body = `name=${encodeURIComponent(name)}&surname=${encodeURIComponent(surname)}`;

xhr.open("POST", '/submit', true);

// Сообщаем серверу про AJAX POST
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

xhr.onreadystatechange = function() {
  // code...
};
xhr.send(body);
*/

/////////////////////////////////////////////////

// запрос POST с кодировкой multipart/form-data
// enctype="multipart/form-data"

/*
var data = {
  name: 'Виктор',
  surname: 'Цой'
};

var boundary = String(Math.random()).slice(2);
var boundaryMiddle = '--' + boundary + '\r\n';
var boundaryLast = '--' + boundary + '--\r\n'

var body = ['\r\n'];
for (var key in data) {
  // добавление поля
  body.push('Content-Disposition: form-data; name="' + key + '"\r\n\r\n' + data[key] + '\r\n');
}

body = body.join(boundaryMiddle) + boundaryLast;

// Тело запроса готово, отправляем

var xhr = new XMLHttpRequest();
xhr.open('POST', '/submit', true);

xhr.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + boundary);

xhr.onreadystatechange = function() {
  if (this.readyState != 4) return;

  alert( this.responseText );
};

xhr.send(body);
 */

/////////////////////////////////////////////////

// FormData, поддержка IE10+ (для IE9- есть полифилл)
// Кодировка при этом будет: enctype="multipart/form-data"

/*
// создать объект для формы
var formData = new FormData(document.forms.person);

// добавить к пересылке ещё пару ключ - значение
formData.append("patronym", "Робертович");

// отослать
var xhr = new XMLHttpRequest();
xhr.open("POST", "/url");
xhr.send(formData);
*/

/////////////////////////////////////////////////

// Отправляем данные в формате JSON

/*
var xhr = new XMLHttpRequest();

var json = JSON.stringify({
  name: "Виктор",
  surname: "Цой"
});

xhr.open("POST", '/submit', true);

// Отсылаем объект в формате JSON и с Content-Type application/json
// Сервер должен уметь такой Content-Type принимать и раскодировать
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

xhr.onreadystatechange = function() {
  // code...
};

xhr.send(json);
*/
































