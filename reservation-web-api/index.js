require('dotenv').config();
const http = require('http');

const { PORT } = process.env;

http
  .createServer(require('./app'))
  .listen(PORT, err => {
    if (!err) {
      console.log(`SERVER RUNS ON PORT ${PORT}`);
    }
  });