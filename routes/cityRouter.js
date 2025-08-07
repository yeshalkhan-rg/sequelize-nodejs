const express = require("express");
const { getCity } = require("../controllers/cityController");

const router = express.Router();

router.get("/:id", getCity);

module.exports = router;
