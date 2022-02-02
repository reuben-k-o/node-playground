const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const firstRoute = require("./routes/first");
const secondRoute = require("./routes/second");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(firstRoute);
app.use(secondRoute);

app.listen(3500);
