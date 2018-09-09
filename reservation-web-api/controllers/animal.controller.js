module.exports = {
  add(req, res) {
    return res.status(200).json({
      message: "Test was successfull"
    });
  }
};