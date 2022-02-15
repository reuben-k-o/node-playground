const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");

const rootDir = require("./util/path");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");
// const User = require("./models/user");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views"); //path

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

// app.use((req, res, next) => {
//   User.findById("620b2d9348f815f29c7a89ef")
//     .then((user) => {
//       req.user = new User(user.name, user.email, user.cart, user._id); // storing the user in the req.user
//       next();
//     })
//     .catch((err) => console.log(err));
// });

app.use(shopRoutes);
app.use("/admin", adminRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    "mongodb+srv://Reubenk:Reuben11*@cluster0.vnlvk.mongodb.net/shop?retryWrites=true&w=majority"
  )
  .then((result) => {
    // console.log(result);
    app.listen(3000);
  })
  .catch((err) => console.log(err));
