import Sequelize from 'sequelize';

import dbConfig from '../../config/database';

class TestController {
  server(req, res) {
    try {
      return res.status(200).json({ 'Server Status': 'On-line' });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  async database(req, res) {
    try {
      const connDb = new Sequelize(dbConfig);
      await connDb.authenticate();
      return res
        .status(200)
        .json({ 'Database Status': 'Conection Successful' });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }
}

export default new TestController();
