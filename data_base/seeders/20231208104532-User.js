module.exports = {
    up: async (queryInterface, Sequelize) => {
        return await queryInterface.bulkInsert('User', [
            {
                name: 'Вася Губкин',
                respondedVacancies: [1, 2],
                login: 'login',
                password: 'username',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return await queryInterface.bulkDelete('User', null, {});
    },
};
