const username = "' OR '1'='1'; --";
const password = "' OR '1'='1'; --";

const queryString = `SELECT * FROM Users WHERE username='${username}' AND password='${password}'`;

console.log(queryString);