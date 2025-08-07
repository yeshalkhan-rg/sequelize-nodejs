const db = require("../models/index");

const City = db.cities;

const createCity = async (req, res) => {
  const countryCode = req.params.countryCode;
  const city = {
    name: req.body.name,
    countryCode: countryCode,
    population: req.body.population ?? 0,
    isCapital: req.body.isCapital,
  };
  const result = await City.create(city);
  res.status(201).send(result);
};

const getCitiesByCountry = async (req, res) => {
  const countryCode = req.params.countryCode;
  const cities = await City.findAll({ where: { countryCode: countryCode } });
  res.status(200).send(cities);
};

const getCity = async (req, res) => {
  const id = req.params.id;
  const city = await City.findByPk(id);
  res.status(200).send(city);
};

module.exports = { createCity, getCitiesByCountry, getCity };
