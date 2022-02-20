const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const authController = require("../controllers/auth");

router.get("/login", authController.getLogin);
router.get("/signup", authController.getSignup);
router.get("/reset", authController.getReset);
router.get("/reset/:token", authController.getNewPassword);

router.post(
  "/signup",
  [
    check("email")
      .isEmail()
      .withMessage("Please enter a valid email")
      .custom((value, { req }) => {
        if (value === "test@test.com") {
          throw new Error("This email is forbidden");
        }
        return true;
      }),
    check(
      "password",
      "Please enter a password with only numbers and text and atleast 5 characters."
    )
      .isLength({ min: 5 })
      .isAlphanumeric(),
    check("confirmPassword").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords have to match!");
      }
      return true;
    }),
  ],
  authController.postSignup
);

router.post("/login", authController.postLogin);
router.post("/reset", authController.postReset);
router.post("/logout", authController.postLogout);
router.post("/new-password", authController.postNewPassword);

module.exports = router;
