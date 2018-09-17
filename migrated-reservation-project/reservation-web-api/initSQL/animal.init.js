module.exports = `
  CREATE TABLE IF NOT EXISTS animals(
    id SERIAL PRIMARY KEY,
    name VARCHAR (50) UNIQUE NOT NULL,
    description VARCHAR (300) NOT NULL,
    photo VARCHAR (50) NOT NULL
  )  
`