const db = require('../data_base/models');

const Vacancy = db.vacancies;
const Company = db.companies;
const User = db.users;

const getVacancies = async (req, res) => {
  console.log('\n[ GET VACANCIES ]\n');
  try {
    const vacancies = await Vacancy.findAll();
    res.status(200).send({
      message: 'Vacancies successfully received.',
      success: 1,
      vacancies: vacancies,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to retrieve vacancies listings.',
      seccess: 0,
    });
    console.log(`\n[ GET VACANCIES ERROR ] -> ${error}\n`);
  }
};

const getVacancy = async (req, res) => {
  console.log('\n[ GET VACANCY ]\n');
  const id = req.params.id;
  try {
    const vacancy = await Vacancy.findOne({ where: { id } });
    res.status(200).send(vacancy);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to request vacancy.',
    });
    console.log(`\n[ GET VACANCY ERROR ] -> ${error}\n`);
  }
};

const postVacansy = async (req, res) => {
  console.log('\n[ POST VACANCY ]\n');

  const { title, description, englishLvl, grade, tags, contacts, companyId } =
    req.body;
  const responded = [];
  try {
    const vacancy = await Vacancy.create({
      title,
      description,
      tags,
      grade,
      englishLvl,
      contacts,
      responded,
    });
    const company = await Company.findOne({ where: { id: companyId } });
    if (!company.createdVacancies.length) {
      await company.update({ createdVacancies: [vacancy.id] });
    } else {
      await company.update({
        createdVacancies: [...company.createdVacancies, vacancy.id],
      });
    }
    res.status(200).json({
      message: 'Vacancy successfully created.',
      success: 1,
      vacancy: vacancy,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to create vacancy.',
      success: 0,
      error: error,
    });
    console.log(`\n[ POST VACANCY ERROR ] -> ${error}\n`);
  }
};

const putVacancy = async (req, res) => {
  console.log('\n[ PUT VACANCY ]\n');
  const id = req.params.id;
  try {
    const vacancy = await Vacancy.update(req.body, { where: { id } });
    const vacancies = await Vacancy.findAll({});
    res.status(200).send({
      message: `Vacancy ${id} has been changed.`,
      success: 1,
      vacancy: vacancy,
      vacancies: vacancies,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to edit vacancy.',
      success: 0,
    });
    console.log(`\n[ PUT VACANCY ERROR ] -> ${error}\n`);
  }
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
  getVacancy,
  getVacancies,
  postVacansy,
  putVacancy,
  changeVacancy,
};
