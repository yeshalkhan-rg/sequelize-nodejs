const express = require("express");
const {
  createCity,
  getCitiesByCountry,
} = require("../controllers/cityController");

const router = express.Router({ mergeParams: true }); // allows to get route.params from parent route

router.get("/", getCitiesByCountry);
router.post("/", createCity);

module.exports = router;
