import Sequelize, { Model } from 'sequelize';

class Dev extends Model {
  static init(sequelize) {
    super.init(
      {
        github_username: Sequelize.STRING,
        bio: Sequelize.TEXT,
        avatar_url: Sequelize.STRING,
        techs: Sequelize.ARRAY(Sequelize.STRING),
        location: Sequelize.GEOGRAPHY,
      },
      { sequelize }
    );

    return this;
  }
}

export default Dev;
