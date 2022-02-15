const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
const { mongoConnect } = require("./util/database");

const rootDir = require("./util/path");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");
const User = require("./models/user");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views"); //path

// db.execute("SELECT * FROM products")
//   .then((result) => {
//     console.log(result[0], result[1]);
//   })
//   .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use((req, res, next) => {
  User.findById("620b2d9348f815f29c7a89ef")
    .then((user) => {
      req.user = new User(user.name, user.email, user.cart, user._id); // storing the user in the req.user
      next();
    })
    .catch((err) => console.log(err));
});

app.use(shopRoutes);
app.use("/admin", adminRoutes);

app.use(errorController.get404);

mongoConnect(() => {
  app.listen(3000);
});
