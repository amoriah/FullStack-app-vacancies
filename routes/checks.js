const db = require('../data_base/models');
const User = db.users;
const Company = db.companies;

const loginCheck = async (req, res, next) => {
  const { type, login, password } = req.body;

  const entity =
    type === 'user'
      ? await User.findOne({
          where: { login: login, password: password },
        })
      : await Company.findOne({
          where: { login: login, password: password },
        });

  if (entity) {
    next();
  } else {
    return res
      .status(404)
      .send({ message: 'Пользователь не найден', success: 0 });
  }
};

module.exports = { loginCheck };
