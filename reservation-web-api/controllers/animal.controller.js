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
      return res.status(200).json({
        message: req.payload
      });
    }
    catch (err) {
      return res.status(500).json({
        error: err.message
      });
    }
  }
};