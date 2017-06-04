
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

/////////////////////////////////////////////////

/*
Animated circle with callback

In the task Animated circle an animated growing circle is shown.
Now let’s say we need not just a circle, but to show a message inside it. The message should appear after the animation is complete (the circle is fully grown), otherwise it would look ugly.
In the solution of the task, the function showCircle(cx, cy, radius) draws the circle, but gives no way to track when it’s ready.
Add a callback argument: showCircle(cx, cy, radius, callback) to be called when the animation is complete. The callback should receive the circle <div> as an argument.
Here’s the example:

showCircle(150, 150, 100, div => {
  div.classList.add('message-ball');
  div.append("Hello, world!");
});

http://plnkr.co/edit/XWpfeLw3u2sHWznifeGm?p=preview
*/

//////////////////////

/*
function showCircle(cx, cy, radius, callback) {
  let div = document.createElement('div');

  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + 'px';
  div.style.top = cy + 'px';
  div.className = 'circle';
  document.body.append(div);

  setTimeout(() => {
    div.style.width = radius * 2 + 'px';
    div.style.height = radius * 2 + 'px';

    setTimeout(callback, 2000, div);
  }, 0);
}

showCircle(150, 150, 100, div => {
  div.classList.add('message-ball');
  div.append("Hello, world!");
});
*/

//////////////////////

// решение с учебника http://plnkr.co/edit/AClTwb4Jh6fVXotPgNjb?p=preview

/*
function go() {
  showCircle(150, 150, 100, div => {
    div.classList.add('message-ball');
    div.append("Hello, world!");
  });
}

function showCircle(cx, cy, radius, callback) {
  let div = document.createElement('div');
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + 'px';
  div.style.top = cy + 'px';
  div.className = 'circle';
  document.body.append(div);

  setTimeout(() => {
    div.style.width = radius * 2 + 'px';
    div.style.height = radius * 2 + 'px';

    div.addEventListener('transitionend', function handler() {
      div.removeEventListener('transitionend', handler);
      callback(div);
    });
  }, 0);
}
*/

/////////////////////////////////////////////////

/*
Delay with a promise

The built-in function setTimeout uses callbacks. Create a promise-based alternative.
The function delay(ms) should return a promise. That promise should resolve after ms milliseconds, so that we can add .then to it, like this:

function delay(ms) {
  // your code
}

delay(3000).then(() => alert('runs after 3 seconds'));
*/

//////////////////////

/*
const delay = ms => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('done'), ms);
  });
};

delay(3000).then(() => alert('runs after 3 seconds'));
*/

//////////////////////

// решение с учебника

/*
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => alert('runs after 3 seconds'));
*/

/////////////////////////////////////////////////

/*
Animated circle with promise

Rewrite the showCircle function in the solution of the task Animated circle with callback so that it returns a promise instead of accepting a callback.
The new usage:

showCircle(150, 150, 100).then(div => {
  div.classList.add('message-ball');
  div.append("Hello, world!");
});

Take the solution of the task Animated circle with callback as the base.
http://plnkr.co/edit/AClTwb4Jh6fVXotPgNjb?p=preview
*/

//////////////////////

/*
function showCircle(cx, cy, radius) {
  let div = document.createElement('div');

  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + 'px';
  div.style.top = cy + 'px';
  div.className = 'circle';

  document.body.append(div);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';

      div.addEventListener('transitionend', handler = () => {
        div.removeEventListener('transitionend', handler);
        resolve(div);
      });
    }, 0);
  });
}

function go() {
  showCircle(150, 150, 100)
    .then(div => {
      div.classList.add('message-ball');
      div.append("Hello, world!");
    })
    .catch(err => console.log(err.message));
}
*/

//////////////////////

// решение с учебника http://plnkr.co/edit/cVyV23alKuniDUlqAGO5?p=preview

/////////////////////////////////////////////////

/*
Fault-tolerant Promise.all

We’d like to fetch multiple URLs in parallel.
Here’s the code to do that:

 let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

Promise.all(urls.map(url => fetch(url)))
  // for each response show its status
  .then(responses => { // (*)
    for(let response of responses) {
      alert(`${response.url}: ${response.status}`);
    }
  ));

The problem is that if any of requests fails, then Promise.all rejects with the error, and we loose results of all the other requests.
That’s not good.
Modify the code so that the array responses in the line (*) would include the response objects for successful fetches and error objects for failed ones.
For instance, if one of URLs is bad, then it should be like:

let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'http://no-such-url'
];

Promise.all(...) // your code to fetch URLs...
  // ...and pass fetch errors as members of the resulting array...
  .then(responses => {
    // 3 urls => 3 array members
    alert(responses[0].status); // 200
    alert(responses[1].status); // 200
    alert(responses[2]); // TypeError: failed to fetch (text may vary)
  });

P.S. In this task you don’t have to load the full response using response.text() or response.json(). Just handle fetch errors the right way.
Open the sandbox for the task.
http://plnkr.co/edit/laAmxL0woc6K5AShUtHJ?p=preview
*/

//////////////////////

/*
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'http://no-such-url',
  'https://api.github.com/users/jeresig'
];

Promise.all(
  urls.map( url => fetch(url).catch(err => {
    console.log(`error ${url}`);
    return err;
  }))).then(responses => {
    for(let response of responses) {
      if (response.status) {
        console.log(`${response.url} ${response.status}`);
        // return response.text()
        // or
        // return response.json();
      } else {
        console.log(response);
      }
    }
  }).catch(err => console.log(err.message));
*/

//////////////////////

// решение с учебника http://plnkr.co/edit/LXZe80niZ2uq9SriexSC?p=preview

/*
Promise.all(
  urls.map(url => fetch(url).catch(err => err))
)
  .then(responses => {
    alert(responses[0].status); // 200
    alert(responses[1].status); // 200
    alert(responses[2]); // TypeError: failed to fetch (text may vary)
  });
*/

/////////////////////////////////////////////////

/*
Fault-tolerant fetch with JSON

Improve the solution of the previous task Fault-tolerant Promise.all. Now we need not just to call fetch, but to load the JSON objects from given URLs.
Here’s the example code to do that:

 let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

// make fetch requests
Promise.all(urls.map(url => fetch(url)))
  // map each response to response.json()
  .then(responses => Promise.all(
    responses.map(r => r.json())
  ))
  // show name of each user
  .then(users => {  // (*)
    for(let user of users) {
      alert(user.name);
    }
  });

The problem is that if any of requests fails, then Promise.all rejects with the error, and we loose results of all the other requests. So the code above is not fault-tolerant, just like the one in the previous task.
Modify the code so that the array in the line (*) would include parsed JSON for successful requests and error for errored ones.
Please note that the error may occur both in fetch (if the network request fails) and in response.json() (if the response is invalid JSON). In both cases the error should become a member of the results object.
The sandbox has both of these cases.
Open the sandbox for the task.
http://plnkr.co/edit/kFD92Ahqa6vyhGfkxfgT?p=preview
*/

//////////////////////

// вариант 1 - все сразу

/*
let urls = [
  'https://api.github.com/users/iliakan',
  // this URL is HTML page, it's invalid JSON, so response.json() fails
  '/',
  // this URL is invalid, so fetch fails
  'http://no-such-url'
];

Promise.all(
  urls.map( url => fetch(url).catch(err => err) )

  ).then(responses => Promise.all(
    // if it's an error then pass on
    // otherwise response.json() and catch errors as results
    responses.map( r => r instanceof TypeError ? r : r.json().catch(err => err) )

  )).then(results => {
    console.log(results[0].name); // Ilya Kantor
    console.log(results[1]); // SyntaxError: Unexpected token < in JSON at position 0
    console.log(results[2]); // TypeError: failed to fetch (text may vary)

  }).catch(err => console.log(err.message));
*/

// вариант 2 - по очереди

let urls = [
  'https://api.github.com/users/iliakan',
  '/',
  'https://api.github.com/users/remy',
  'http://no-such-url',
  'https://api.github.com/users/jeresig'
];

let results = [];

const loadData = url => {
  fetch(url)
    .then(response => response.json(), err => console.log(`error url: ${url}`, err))

    .then(user => {
      if (user) return results.push(user);
    }, err => console.log(`error json: ${url}`, err))

    .catch(err => console.log('unknown error', err));
};

urls.forEach(loadData);

console.log(results);

//////////////////////

// решение с учебника http://plnkr.co/edit/keHJ1rigDtUgpNDDlUJe?p=preview

/////////////////////////////////////////////////
