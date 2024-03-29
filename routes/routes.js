const controllers = require('../controllers/index');
const router = require('express').Router();
const { loginCheck } = require('./checks');

// ----------------------user-----------------------

router.post('/login', loginCheck, controllers.userControllers.login);
router.post('/signup', controllers.userControllers.signup);

// ----------------------vacancy-----------------------

router.get('/vacancies', controllers.vacancyControllers.getVacancies);
router.get('/vacancies/:id', controllers.vacancyControllers.getVacancy);
router.delete('/vacancies/:id', controllers.vacancyControllers.deleteVacancy);
router.post('/vacancies', controllers.vacancyControllers.postVacansy);
router.put('/vacancies/:id', controllers.vacancyControllers.putVacancy);
router.put('/my-vacancies', controllers.vacancyControllers.changeVacancy);

module.exports = router;
