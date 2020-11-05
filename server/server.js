const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

const code = require("./api/code");
app.use("/api", code);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
