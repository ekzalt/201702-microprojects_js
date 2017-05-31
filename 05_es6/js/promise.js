'use strict';

/////////////////////////////////////////////////

/*
Промисифицировать setTimeout

Напишите функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд.
Пример использования:

delay(1000)
  .then(() => alert("Hello!"))
Такая функция полезна для использования в других промис-цепочках.

Вот такой вызов:

return new Promise((resolve, reject) => {
  setTimeout(() => {
    doSomeThing();
    resolve();
  }, ms)
});

Станет возможным переписать так:

return delay(ms).then(doSomething);
 */

//////////////////////

/*
const delay = ms => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
};
*/

/////////////////////////////////////////////////

/*
Загрузить массив последовательно

Есть массив URL:

let urls = [
  'user.json',
  'guest.json'
];

Напишите код, который все URL из этого массива загружает – один за другим (последовательно), и сохраняет в результаты в массиве results, а потом выводит.
Вариант с параллельной загрузкой выглядел бы так:

Promise.all( urls.map(httpGet) )
  .then(alert);

В этой задаче загрузку нужно реализовать последовательно.
http://plnkr.co/edit/u1fYDw9KyRW5tl5qMzbc?p=preview
 */

//////////////////////

/*
let urls = [
  'user.json',
  'guest.json'
];

let results = [];

const loadData = url => {
  httpGet(url)
    .then(JSON.parse)
    .then(user => results.push(user))
    .catch(err => console.log(err));
};

urls.forEach(loadData);

console.log(results);
*/

//////////////////////

// решение с учебника - http://plnkr.co/edit/pzWpd9418pnVJxlvK4SV?p=preview

/*
// начало цепочки
let chain = Promise.resolve();

let results = [];

// в цикле добавляем задачи в цепочку
urls.forEach(function(url) {
  chain = chain
    .then(() => httpGet(url))
    .then((result) => {
      results.push(result);
    });
});

// в конце — выводим результаты
chain.then(() => {
  alert(results);
});
 */
