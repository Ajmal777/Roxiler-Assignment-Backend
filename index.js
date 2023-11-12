require("dotenv").config();
const express = require("express");
const cors = require('cors')
const { initialize, fetchBySearch } = require("./APIs/fetchApi");
const mongoose = require("mongoose");
const {
  statistics,
  getBarChart,
  getPieChart,
} = require("./APIs/statisticsApi");
const app = express();
const port = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URI)
  .then((res) => console.log("db connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors({
  origin: '*',
}))

// Routes
app.get("/initialize", initialize);
app.get("/fetchBySearch", fetchBySearch);
app.get("/statistics/:month", statistics);
app.get("/getBarChart/:month", getBarChart);
app.get("/getPieChart/:month", getPieChart);

app.listen(port, () => {
  console.log("server running on http://localhost:3000");
});
