module.exports = (req, res) => {
  res.json({
    body: new Date().toString(),
  });
};
