const PORT = process.env.PORT || 3001;
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const router = require('./routes/routes.js');
const db = require('./data_base/models');
const Users = db.users;
const Vacancies = db.vacancies;
const sequelize = db.sequelize;
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express()
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use('/api', router)
  .use(
    session({
      secret: 'secret-key',
      store: new SequelizeStore({
        db: sequelize,
      }),
      resave: false,
      saveUninitialized: true,
      cookie: {
        secure: false,
      },
    })
  );
app.get('/', (req, res) => {
  req.session.isAuth = req.app.locals.isAuth;
  req.session.user = req.app.locals.user;
  req.session.type = req.app.locals.type;

  res.status(200).send({
    message: 'server is running',
    session: req.session,
    user: req.session.user,
    success: 1,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
