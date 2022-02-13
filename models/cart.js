// const Sequelize = require("sequelize");
// const sequelize = require("../util/database");

// const Cart = sequelize.define("cart", {
//   id: {
//     type: Sequelize.INTEGER,
//     primaryKey: true,
//     allowNull: false,
//     autoIncrement: true,
//   },
// });

// module.exports = Cart;

////////////////////////////////////////////////
// const fs = require("fs");
// const path = require("path");
// const rootDir = require("../util/path");

// const p = path.join(rootDir, "data", "cart.json");

// module.exports = class Cart {
//   static addProduct(id, productPrice) {
//     //fetching the cart
//     fs.readFile(p, (err, fileContent) => {
//       let cart = { products: [], totalPrice: 0 };
//       if (!err) cart = JSON.parse(fileContent);

//       //analyze the cart for existing cart
//       const existingProductIndex = cart.products.findIndex(
//         (prod) => prod.id === id
//       );
//       const existingProduct = cart.products[existingProductIndex];
//       let updatedProduct;
//       //add new product/increase the quantity
//       if (existingProduct) {
//         updatedProduct = { ...existingProduct };
//         updatedProduct.qty = updatedProduct.qty + 1;
//         cart.products = [...cart.products];
//         cart.products[existingProductIndex] = updatedProduct;
//       } else {
//         updatedProduct = { id: id, qty: 1 };
//         cart.products = [...cart.products, updatedProduct];
//       }

//       cart.totalPrice = cart.totalPrice + +productPrice;
//       fs.writeFile(p, JSON.stringify(cart), (err) => {
//         console.log(err);
//       });
//     });
//   }

//   static deleteProduct(id, productPrice) {
//     fs.readFile(p, (err, fileContent) => {
//       if (err) {
//         return;
//       }

//       const updatedCart = { ...JSON.parse(fileContent) };
//       const product = updatedCart.products.find((prod) => prod.id === id);
//       if (!product) {
//         return;
//       }
//       const productQty = product.qty;
//       updatedCart.products = updatedCart.products.filter(
//         (prod) => prod.id !== id
//       );
//       updatedCart.totalPrice -= productPrice * productQty;
//       fs.writeFile(p, JSON.stringify(updatedCart), (err) => {
//         console.log(err);
//       });
//     });
//   }

//   static getCart(cb) {
//     fs.readFile(p, (err, fileContent) => {
//       const cart = JSON.parse(fileContent);
//       if (err) {
//         cb(null);
//       } else {
//         cb(cart);
//       }
//     });
//   }
// };
