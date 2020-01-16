'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.changeColumn('devs', 'location', {
      type: Sequelize.GEOGRAPHY,
      allowNull: false,
    }),

  down: (queryInterface, Sequelize) =>
    queryInterface.changeColumn('devs', 'location', {
      type: Sequelize.GEOGRAPHY,
      allowNull: true,
    }),
};
