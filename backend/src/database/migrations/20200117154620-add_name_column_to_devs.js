'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn('devs', 'name', {
      type: Sequelize.STRING,
      allowNull: false,
    }),

  down: (queryInterface, Sequelize) =>
    queryInterface.removeColumn('devs', 'name'),
};
