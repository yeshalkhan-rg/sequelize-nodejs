const config = require("../config/config");
const { Sequelize, DataTypes } = require("sequelize");

const env = process.env.NODE_ENV || "development";
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    migrationStorageTableName: dbConfig.migrationStorageTableName,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  }
);

(async () => {
  try {
    await sequelize.authenticate();
  } catch (err) {
    console.log("Error connecting DB", err);
  }
})();

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.countries = require("./countryModel")(sequelize, DataTypes);
db.cities = require("./cityModel")(sequelize, DataTypes);

(async () => {
  try {
    await db.sequelize.sync({ force: false });
  } catch (err) {
    console.log("Error syncing DB", err);
  }
})();

// 1:M relationship

db.countries.hasMany(db.cities);
db.cities.belongsTo(db.countries, {
  foreignKey: "countryCode",
});

module.exports = db;
