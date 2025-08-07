const express = require("express");

const {
  createCountry,
  getAllCountries,
  getCountry,
  getLargeCountries,
  updateCountry,
  deleteCountry,
} = require("../controllers/countryController");
const router = express.Router();

router.post("/", createCountry);
router.get("/", getAllCountries);
router.get("/query", getLargeCountries);
router.get("/:code", getCountry);
router.put("/:code", updateCountry);
router.delete("/:code", deleteCountry);

module.exports = router;
