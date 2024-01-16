module.exports = {
    up: async (queryInterface, Sequelize) => {
        return await queryInterface.bulkInsert('Vacancy', [
            {
                title: 'вакансия',
                description: 'описание вакансии',
                contacts: 'контакты',
                tags: ['#tag'],
                grade: '1',
                englishLvl: 'A1',
                isActive: false,
                responded: [1, 2],
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return await queryInterface.bulkDelete('Vacancy', null, {});
    },
};
