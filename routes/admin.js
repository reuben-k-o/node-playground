const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");
const isAuth = require("../middleware/is-auth");
const { check } = require("express-validator");

// This routes have /admin/add-product
router.get("/add-product", isAuth, adminController.getAddProduct);

router.get("/edit-product/:productId", isAuth, adminController.getEditProduct);

router.get("/products", isAuth, adminController.getProducts);

router.post(
  "/add-product",
  isAuth,
  [
    check("title", "Title should be atleast 5 characters long")
      .isString()
      .isLength({ min: 5 }),
    check("price", "Price should be a float").isFloat(),
    check(
      "description",
      "Description should be atleast 5 characters long"
    ).isLength({ min: 5 }),
  ],
  adminController.postAddProduct
);

router.post(
  "/edit-product",
  isAuth,
  [
    check("title", "Title should be atleast 5 characters long").isLength({
      min: 5,
    }),
    check("price", "Price should be a float").isFloat(),
    check(
      "description",
      "Description should be atleast 5 characters long"
    ).isLength({ min: 5 }),
  ],
  adminController.postEditProduct
);

router.post("/delete-product", isAuth, adminController.postDeleteProduct);

module.exports = router;
