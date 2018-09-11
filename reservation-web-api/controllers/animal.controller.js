const db = require('../connections.pool');
const { animal } = require('../initSQL');

module.exports = {
  add(req, res) {
    return res.status(200).json({
      message: "File was successfully created"
    });
  }
};