let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");

let app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/images", express.static("images"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, function () {
  console.log("app listening on port 3000!");
});
