const express = require("express");
const dotenv = require("dotenv");
const app = express();
// const port = 3000;
dotenv.config();
const PORT=process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("API Test enviroment a");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
}); 
