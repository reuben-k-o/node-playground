// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const { MongoClient } = require("mongodb");

// let _db;

// const mongoConnect = (callback) => {
//   MongoClient.connect(
//     "mongodb+srv://Reubenk:Reuben11*@cluster0.vnlvk.mongodb.net/shop?retryWrites=true&w=majority"
//   )
//     .then((client) => {
//       console.log("Connected");
//       _db = client.db();
//       callback();
//     })
//     .catch((err) => {
//       console.log(err);
//       throw err;
//     });
// };

// const getDb = () => {
//   if (_db) {
//     return _db;
//   }
//   throw "No database found!";
// };

// exports.mongoConnect = mongoConnect;
// exports.getDb = getDb;
////////////////////////////////////////////////////////////////////////////////////

// const Sequelize = require("sequelize");

// const sequelize = new Sequelize("node-complete", "root", "Reuben11*", {
//   dialect: "mysql",
//   host: "localhost",
// });

// module.exports = sequelize;

////////////////////////////////////////////////////////////////////////////////////

// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "node-complete",
//   password: "Reuben11*",
// });

// module.exports = pool.promise();
