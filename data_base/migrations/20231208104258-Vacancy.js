module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('Vacancy', {
      title: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      contacts: {
        type: DataTypes.STRING,
      },
      tags: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      grade: {
        type: DataTypes.STRING,
      },
      englishLvl: {
        type: DataTypes.STRING,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
      },
      responded: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
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
    await queryInterface.dropTable('Vacancy');
  },
};
