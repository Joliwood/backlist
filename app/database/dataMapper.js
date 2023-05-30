const client = require("./connexion");

const dataMapper = {
  async getAllData() {
    const query = `SELECT * FROM items`;
    const result = await client.query(query);
    return result.rows;
  },
};

module.exports = dataMapper;
