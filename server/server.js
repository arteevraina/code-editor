const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const publicPath = path.join(__dirname, "..", "client", "build");
const port = process.env.PORT || 8000;
// IMPORTING ALL THE FILES
const code = require("./api/code");
app.use("/api/code", code);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(publicPath));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
