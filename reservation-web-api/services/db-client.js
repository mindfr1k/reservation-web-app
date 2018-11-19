const { MongoClient } = require('mongodb')

module.exports = {
  async setupConnection(uri, dbName) {
    try {
      const mongoClient = await MongoClient.connect(uri, {
        useNewUrlParser: true
      })
      return mongoClient.db(dbName)
    }
    catch (err) {
      console.log(err)
    }
  }
}