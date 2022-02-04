const path = require("path");
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");

// This routes have /admin/add-product
router.get("/add-product", adminController.getProduct);

router.get("/products", adminController.getProducts);

router.post("/add-product", adminController.postProduct);

module.exports = router;
