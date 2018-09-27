const db = require('../connections.pool');
const { animal } = require('../initSQL');

module.exports = {
  async add(req, res) {
    try {
      await db.query(animal);

      const { name, description, photo } = req.payload;
      const [ row ] = (await db.query({
        text: `INSERT INTO animals(name, description, photo) VALUES($1, $2, $3) RETURNING *;`,
        values: [ name, description, photo.path ]
      })).rows;

      return res.status(200).json(row);
    }
    catch (err) {
      return res.status(500).json({
        error: err.message
      });
    }
  },
  async getList(req, res) {
    try {
      const { filter, page } = req.payload;

      const { rows } = await db.query({
        text: `SELECT * FROM animals WHERE name ILIKE $1 OR description ILIKE $1 LIMIT 9 OFFSET ($2 - 1) * 9`,
        values: [ `%${filter}%`, page ]
      });

      return res.status(200).json(rows);
    }
    catch (err) {
      return res.status(500).json({
        error: err.message
      });
    }
  }
};