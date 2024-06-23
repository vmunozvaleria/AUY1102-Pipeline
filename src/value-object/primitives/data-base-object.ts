const username = "admin'; DROP TABLE Users; --";
const password = 'password123';

// Crear la consulta SQL de forma dinámica
const queryString = `SELECT * FROM Users WHERE username='??' AND password='??'`;
const query = db.prepare(queryString);

// Ejecutar la consulta con parámetros
query.run(username, password);