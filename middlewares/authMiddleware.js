const User = require('../models/User');

module.exports = (req, res, next) => {
  const user = User.findById(req.session.userID);
  if (!user) return res.redirect("/login");
  next();
};