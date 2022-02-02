const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const rootDir = require("./util/path");
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use(shopRoutes);
app.use("/admin", adminData.routes);

app.use((req, res) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000);
