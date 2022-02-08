const path = require("path");
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");

// This routes have /admin/add-product
router.get("/add-product", adminController.getAddProduct);

router.get("/edit-product/:productId", adminController.getEditProduct);

router.get("/products", adminController.getProducts);

router.post("/add-product", adminController.postAddProduct);

router.post("/edit-product", adminController.postEditProduct);

module.exports = router;
