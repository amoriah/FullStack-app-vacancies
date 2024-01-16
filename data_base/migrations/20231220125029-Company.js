module.exports = {
  up: async (queryInterface, DataTypes) => {
      await queryInterface.createTable('Company', {
          name: {
              type: DataTypes.STRING,
          },
          createdVacancies: {
              type: DataTypes.ARRAY(DataTypes.INTEGER),
          },
          login: {
              type: DataTypes.STRING,
          },
          password: {
              type: DataTypes.STRING,
          },
          createdAt: {
              type: DataTypes.DATE,
          },
          updatedAt: {
              type: DataTypes.DATE,
          },
      });
  },
  down: async (queryInterface, DataTypes) => {
      await queryInterface.dropTable('Company');
  },
};

