module.exports = {
  HOST: process.env.MY_SQL_HOST || "127.0.0.1",
  PORT: process.env.MY_SQL_PORT || "3306",
  USERNAME: process.env.MY_SQL_USERNAME || "root",
  PASSWORD: process.env.MY_SQL_PASSWORD || "aya62300",
  DATABASE: process.env.MY_SQL_DATABASE || "tastylog",
  CONNECTION_LIMIT: process.env.MY_SQL_CONNECTION_LIMIT ?
    parseInt(process.env.MY_SQL_CONNECTION_LIMIT) : 10,
  QUEUE_LIMIT: process.env.MY_SQL_QUEUE_LIMIT ?
    parseInt(process.env.MY_SQL_CONNECTION_LIMIT) : 0
};