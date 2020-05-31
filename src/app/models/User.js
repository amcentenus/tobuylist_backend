import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(conn) {
    super.init(
      {
        login: Sequelize.STRING,
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        hash: Sequelize.STRING,
      },
      {
        sequelize: conn,
      }
    );

    return this;
  }
}

export default User;
