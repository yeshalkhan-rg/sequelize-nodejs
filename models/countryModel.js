module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define("country", {
    code: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surfaceArea: DataTypes.DECIMAL,
    population: DataTypes.INTEGER,
  });

  return Country;
};
