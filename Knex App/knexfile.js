// Update with your config settings.

module.exports = {
  client: "mysql",
  connection: {
    host:"localhost",
    port: 3306,
    user: "node_user",
    password:"",
    database: "todolist",
    debug: ['ComQueryPacket', 'RowDataPacket']
  }
};
