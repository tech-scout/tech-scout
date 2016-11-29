const jwt = require('jsonwebtoken');
require('dotenv').config();

const token = obj => jwt.sign(obj, process.env.SECRET);

const decoded = obj => jwt.verify(obj, process.env.SECRET);

const createToken = (req, res, next) => {
  const user = res.user;
  console.log(jwt.sign(res.user[0], `${process.env.SECRET}`));
  res.token = token({
    id: user.id,
    name: user.username,
    img_url: user.img_url,
    title: user.title,
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
