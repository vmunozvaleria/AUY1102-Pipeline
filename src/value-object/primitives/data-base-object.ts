const users = await connection.query(
  `SELECT * 
   FROM users 
   WHERE clientId = ${clientId} 
    AND name LIKE %${name}%;`
);
await connection.end();
