const { validateToken } = require("../configs/tokens");

function validateAuth(req, res, next) {
  const token = req.cookies.token;
  console.log(token);
  if (!token) return res.sendStatus(401);
  const { user } = validateToken(token);
  if (!user) return res.sendStatus(401);
  console.log(user);
  req.user = user;

  next();
}

module.exports = { validateAuth };
