import express from "express";
import _ from "lodash";
const app = express();

const random_name = _.sample([
  "CORE",
  "CODE",
  "SCHOOL",
  "CODE",
  "ENJOY",
  "REPEAT",
]);

app.get("/", (req, res) => {
  res.json({
    random_name,
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Ready on port ${PORT} -> ${random_name}`));
