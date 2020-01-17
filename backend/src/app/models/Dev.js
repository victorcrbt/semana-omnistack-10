import bcrypt from 'bcryptjs';
import Sequelize, { Model } from 'sequelize';

class Dev extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        github_username: Sequelize.STRING,
        bio: Sequelize.TEXT,
        avatar_url: Sequelize.STRING,
        techs: Sequelize.ARRAY(Sequelize.STRING),
        location: Sequelize.GEOGRAPHY,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
      },
      { sequelize }
    );

    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 10);
      }
    });

    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default Dev;
