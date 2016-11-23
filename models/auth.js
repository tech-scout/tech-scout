const jwt = require('jsonwebtoken');

const token = obj => jwt.sign(obj, PROCESS.ENV.SECRET);

const decoded = obj => jwt.verify(obj, PROCESS.ENV.SECRET);

const createToken = (req, res, next) => {
  const user = res.user;
  res.token = token({
    id: user.id,
    name: user.username
  })
  next();
}

const authorize = (req, res, next) => {
  const bearerToken = req.body.bearerToken;
  res.user = decoded(bearerToken);
  next();
}

module.exports = {
  createToken,
  authorize
}
