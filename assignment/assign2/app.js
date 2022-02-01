const express = require("express");
const app = express();

// app.use((req, res, next) => {
//   console.log("First middleware!");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Second middleware!");
//   res.send("<h2> Hello from second middleware!</h2>");
// });

app.use("/users", (req, res, next) => {
  console.log("First middleware!");
  res.send("<h2> Hello user, welcome to our express page test!</h2>");
});

app.use("/", (req, res, next) => {
  console.log("Second middleware!");
  res.send("<h2> Welcome to our home page 🎇🎇🎇 </h2>");
});

app.listen(1234);
