const db = require("../models/index");
const { Op } = require("@sequelize/core");

const Country = db.countries;

const createCountry = async (req, res) => {
  const country = {
    code: req.body.code,
    name: req.body.name,
    surfaceArea: req.body.surfaceArea ?? 0,
    population: req.body.population ?? 0,
  };

  const result = await Country.create(country);
  res.status(201).send(result);
};

const getAllCountries = async (req, res) => {
  const countries = await Country.findAll();
  res.status(200).send(countries);
};

const getCountry = async (req, res) => {
  const code = req.params.code;
  const country = await Country.findByPk(code);
  res.status(200).send(country);
};

const getLargeCountries = async (req, res) => {
  const { surfaceArea } = req.query;
  const countries = await Country.findAll({
    where: { surfaceArea: { [Op.gt]: surfaceArea } },
  });
  res.status(200).send(countries);
};

const updateCountry = async (req, res) => {
  const code = req.params.code;
  const [result] = await Country.update(req.body, { where: { code: code } });
  res.status(200).send(result);
};

const deleteCountry = async (req, res) => {
  const code = req.params.code;
  const result = await Country.destroy({ where: { code: code } });
  res.status(200).send(result);
};

module.exports = {
  createCountry,
  getAllCountries,
  getCountry,
  getLargeCountries,
  updateCountry,
  deleteCountry,
};
