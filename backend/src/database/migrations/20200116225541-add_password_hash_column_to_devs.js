'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn('devs', 'password_hash', {
      type: Sequelize.STRING,
      allowNull: false,
    }),

  down: (queryInterface, Sequelize) =>
    queryInterface.removeColumn('devs', 'password_hash'),
};
