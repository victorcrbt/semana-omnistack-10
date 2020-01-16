import Sequelize from 'sequelize';

import Dev from '../app/models/Dev';

import config from '../config/database';

const models = [Dev];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(config);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
