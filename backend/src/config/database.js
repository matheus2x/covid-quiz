require("./environment");

const MYSQL_DB = process.env.MYSQL_DB;
const MYSQL_USER = process.env.MYSQL_USER;
const MYSQL_HOST = process.env.MYSQL_HOST;
const MYSQL_PASS = process.env.MYSQL_PASS;

module.exports = {
  dialect: "mysql",
  host: MYSQL_HOST,
  username: MYSQL_USER,
  password: MYSQL_PASS,
  database: MYSQL_DB,
  define: {
    timestamps: true,
    underscored: true,
  },
};
