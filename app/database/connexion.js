const { Client } = require("pg");

const client = new Client(process.env.PG_OP);

client.connect();

module.exports = client;
