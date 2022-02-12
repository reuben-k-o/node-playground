const { getDb } = require("../util/database");
class Product {
  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  save() {
    const db = getDb();
    return db
      .collection("products")
      .insertOne(this)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }
}
module.exports = Product;

////////////////////////////////////////////////////////////////////
//USING SEQUELIZE

// const Sequelize = require("sequelize");

// const sequelize = require("../util/database");

// const Product = sequelize.define("product", {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true,
//   },
//   title: Sequelize.STRING,
//   price: {
//     type: Sequelize.INTEGER,
//     allowNull: false,
//   },
//   imageUrl: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   description: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
// });

// module.exports = Product;
////////////////////////////////////////////////////////////////
//USING SQL
// const db = require("../util/database");

// const Cart = require("./cart");

// module.exports = class Products {
//   constructor(id, title, imageUrl, price, description) {
//     this.id = id;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.price = price;
//     this.description = description;
//   }

//   save() {
//     return db.execute(
//       "INSERT INTO products (title, price, imageUrl,description) VALUES (?,?,?,?)",
//       [this.title, this.price, this.imageUrl, this.description]
//     );
//   }

//   static fetchAll(cb) {
//     return db.execute("SELECT * FROM products");
//   }

//   static findByPk(id) {
//     return db.execute("SELECT * FROM products WHERE products.id = ?", [id]);
//   }

//   static deleteById(id) {}
// };
