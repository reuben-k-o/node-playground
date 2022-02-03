const Product = require("../models/productModel");

exports.getProduct = (req, res) => {
  res.render("add-product", {
    pageTitle: "Add Products",
    path: "/admin/add-product",
  });
};

exports.postProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  //   products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll();
  res.render("shop", { prods: products, pageTitle: "Shop", path: "/" });
};
