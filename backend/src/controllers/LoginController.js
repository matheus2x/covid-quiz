const jwt = require("jsonwebtoken");

const User = require("../models/User");
const authConfig = require("../config/auth");

module.exports = {
  async store(req, res) {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(401).json({ error: "User not Found" });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: "Password does not Match" });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        username,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expireIn,
      }),
    });
  },
};
