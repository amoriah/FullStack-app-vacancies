const db = require('../data_base/models');

const User = db.users;
const Company = db.companies;
const Vacancy = db.vacancies;

const signup = async (req, res) => {
  console.log('\n[ REGISTER]\n');
  const { type, name, login, password } = req.body;

  const repeat =
    type === 'user'
      ? await User.findOne({ where: { login } })
      : await Company.findOne({ where: { login } });

  if (repeat) {
    return res.status(200).json({
      message: 'This user already exists.',
      success: 0,
    });
  }

  const entity =
    type === 'user'
      ? await User.create({ name, login, password })
      : await Company.create({ name, login, password });

  if (!entity) {
    return res.status(500).json({
      message: 'Failed to register user.',
      success: 0,
    });
  }
  return res.status(200).send({
    message: `User ${login} created.`,
    success: 1,
  });
};

const login = async (req, res) => {
  console.log('\n[ LOGIN ]\n');
  const { type, login, password } = req.body;

  const user =
    type === 'user'
      ? await User.findOne({ where: { login, password } })
      : await Company.findOne({ where: { login, password } });

  if (!user) {
    return res.status(404).json({
      message: 'Failed to login.',
      success: 0,
    });
  }

  req.app.locals.isAuth = true;
  req.app.locals.user = user;
  req.app.locals.type = type;

  return res.status(200).send({
    user: user,
    message: 'Login successfully completed.',
    success: 1,
  });
};

const changeVacancy = async (req, res) => {
  console.log('\n[ PUT VACANCY ]\n');
  const { userId, vacancyId, newResponded, newVacancies } = req.body;
  try {
    const user = await User.findOne({ where: { id: userId } });
    const vacancy = await Vacancy.findOne({ where: { id: vacancyId } });
    await user.update({ vacancies: newVacancies });
    await vacancy.update({ responded: newResponded });
    res.status(200).send({
      message: `The vacancies and responded arrays have been changed.`,
      success: 1,
      vacancy: vacancy,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to change vacancies and responded arrays',
      success: 0,
    });
    console.log(`\n[ PUT VACANCY ERROR ] -> ${error}\n`);
  }
};

module.exports = {
  signup,
  login,
  changeVacancy,
};
