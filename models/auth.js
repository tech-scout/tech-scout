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

const checkPassword = (req, res, next) => {
  if(req.body.user.password === res.rows.password) {
    next();
  }
  else {
    console.log('WRONG INFO');
  }
}

const authorize = (req, res, next) => {
  const bearerToken = req.body.bearerToken;
  res.user = decoded(bearerToken);
  next();
}

module.exports = {
  checkPassword,
  createToken,
  authorize,
}
