module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define("city", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    population: DataTypes.INTEGER,
    isCapital: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  return City;
};
