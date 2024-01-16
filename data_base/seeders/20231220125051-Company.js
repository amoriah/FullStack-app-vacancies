module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Company', [
      {
        name: 'Company',
        createdVacancies: [1, 2],
        login: 'companyLogin',
        password: 'CompanyName',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Company', null, {});
  },
};
