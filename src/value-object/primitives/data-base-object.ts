const username = "admin'; DROP TABLE Users; --";
const password = "password123";

const queryString = `SELECT * FROM Users WHERE username='${username}' AND password='${password}'`;

console.log(queryString);