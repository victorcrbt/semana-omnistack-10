'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('devs', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      github_username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      bio: Sequelize.TEXT,
      avatar_url: Sequelize.STRING,
      techs: Sequelize.ARRAY(Sequelize.STRING),
      location: {
        type: Sequelize.GEOGRAPHY,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('devs'),
};
