const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const countryRouter = require("./routes/countryRouter");
const cityRouter = require("./routes/cityRouter");
const countryCityRouter = require("./routes/countryCityRouter");

dotenv.config();

const app = express();

const corsOptions = {
  origin: "http://localhost:8000",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("WELCOME TO COUNTRIES API");
});

app.use("/countries", countryRouter);
app.use("/countries/:countryCode/cities", countryCityRouter);
app.use("/cities", cityRouter);

const PORT = process.env.DB_PORT;

app.listen(PORT, () => {
  console.log("Server is listening on PORT", PORT);
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Something went wrong");
});

app.use((req, res) => {
  res.status(404).send("Path not found");
});
