
/////////////////////////////////////////////////

/*
Rewrite using async/await

Rewrite the one of examples from the chapter Promises chaining using async/await instead of .then/catch:

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
}

loadJson('no-such-user.json') // (3)
  .catch(alert); // Error: 404
*/

//////////////////////

// вариант 1

/*
async function loadJson(url) {
  try {
    let response = await fetch(url);
    let user = await response.json();
    return user;

  } catch(err) {
    console.log(err);
  }
}

loadJson('no-such-user.json').catch(console.log);
*/

//////////////////////

// вариант 2

/*
async function loadJson(url) {
  let user;
  let response = await fetch(url);

  if (response.status === 200) {
    try {
      user = await response.json();
      return user;

    } catch(err) { console.log(err); }
    
  } else { throw new Error(response.status); }
}

loadJson('no-such-user.json').catch(console.log);
*/

//////////////////////

// решение с учебника

/*
async function loadJson(url) {
  let response = await fetch(url);

  if (response.status == 200) {
    let json = await response.json();
    return json;
  }

  throw new Error(response.status);
}

loadJson('no-such-user.json')
  .catch(alert); // Error: 404
*/

/////////////////////////////////////////////////

/*
Rewrite "rethrow" async/await

Below you can find the “rethrow” example from the chapter Promises chaining. Rewrite it using async/await instead of .then/catch.
And get rid of the recursion in favour of a loop in demoGithubUser: with async/await that becomes easy to do.

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new HttpError(response);
      }
    })
}

// Ask for a user name until github returns a valid user
function demoGithubUser() {
  let name = prompt("Enter a name?", "iliakan");

  return loadJson(`https://api.github.com/users/${name}`)
    .then(user => {
      alert(`Full name: ${user.name}.`);
      return user;
    })
    .catch(err => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("No such user, please reenter.");
        return demoGithubUser();
      } else {
        throw err;
      }
    });
}

demoGithubUser();
*/

//////////////////////

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);

  if (response.status === 200) {
    try {
      let user = await response.json();
      return user;

    } catch (err) { throw err; }

  } else { throw new HttpError(response); }
}

async function demoGithubUser() {
  let name = await prompt('Enter a name?', 'iliakan');

  if (!name) return;

  try {
    let user = await loadJson(`https://api.github.com/users/${name}`);
    alert(`Full name: ${user.name}.`);
    return user;

  } catch (err) {
    if (err instanceof HttpError && err.response.status === 404) {
      alert('No such user, please reenter');
      return demoGithubUser();

    } else { throw err; }
  }
}

demoGithubUser().catch(console.log);

//////////////////////

// решение с учебника

/*
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

// Ask for a user name until github returns a valid user
async function demoGithubUser() {

  let user;
  while(true) {
    let name = prompt("Enter a name?", "iliakan");

    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break; // no error, exit loop
    } catch(err) {
      if (err instanceof HttpError && err.response.status == 404) {
        // loop continues after the alert
        alert("No such user, please reenter.");
      } else {
        // unknown error, rethrow
        throw err;
      }
    }
  }

  alert(`Full name: ${user.name}.`);
  return user;
}

demoGithubUser();
*/
