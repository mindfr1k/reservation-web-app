module.exports = `
  CREATE TABLE IF NOT EXISTS animals(
    id SERIAL PRIMARY KEY,
    title VARCHAR (50) UNIQUE NOT NULL,
    description VARCHAR (300) NOT NULL,
    photo VARCHAR (300) []
  )  
`