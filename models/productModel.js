const fs = require("fs");
const rootDir = require("../util/path");
const path = require("path");

const p = path.join(rootDir, "data", "products.json");

const getProductFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    }
    cb(JSON.parse(fileContent));
  });
};
module.exports = class Products {
  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  save() {
    getProductFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
    // fs.readFile(p, (err, fileContent) => {
    //   //   console.log(fileContent);
    //   //   let products = [];
    //   //   if (!err) {
    //   //     //   means product is not empty, gets the content
    //   //     products = JSON.parse(fileContent);
    //   //   }
    // });
  }

  static fetchAll(cb) {
    getProductFromFile(cb);
  }
};
