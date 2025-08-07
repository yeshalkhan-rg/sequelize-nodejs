const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: "mysql",
    migrationStorageTableName: "migrations",
    pool: {
      max: parseInt(process.env.DB_POOL_MAX || 10),
      min: parseInt(process.env.DB_POOL_MIN || 1),
      acquire: 30000,
      idle: 10000,
    },
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE + "_test",
    host: process.env.DB_HOST,
    dialect: "mysql",
    migrationStorageTableName: "migrations",
    pool: {
      max: parseInt(process.env.DB_POOL_MAX || 10),
      min: parseInt(process.env.DB_POOL_MIN || 1),
      acquire: 30000,
      idle: 10000,
    },
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: "mysql",
    migrationStorageTableName: "migrations",
    pool: {
      max: parseInt(process.env.DB_POOL_MAX || 10),
      min: parseInt(process.env.DB_POOL_MIN || 1),
      acquire: 30000,
      idle: 10000,
    },
  },
};
