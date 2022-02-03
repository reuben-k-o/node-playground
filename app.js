const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");

const rootDir = require("./util/path");
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();
app.set("view engine", "pug");
app.set("views", "views"); //path

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use(shopRoutes);
app.use("/admin", adminData.routes);

app.use((req, res) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
