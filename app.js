const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");

const rootDir = require("./util/path");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views"); //path

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use(shopRoutes);
app.use("/admin", adminRoutes);

app.use(errorController.get404);

app.listen(3000);
