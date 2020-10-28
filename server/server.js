const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const code = require("./api/code");
const app = express();

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use("/api/code", code);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
