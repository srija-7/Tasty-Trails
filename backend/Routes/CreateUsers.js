const express = require("express");
const router = express.Router();
const User = require("../models/User");
// const Order = require("../models/Orders");
const { body, validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = "Srija";

router.post(
  "/creatuser",
  body("email", "Incorrect Email").isEmail(),
  body("name").isLength({ min: 5 }),
  body("password", "Incorrect Password").isLength({ min: 5 }),
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    const salt = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(req.body.password, salt);
    try {
      await User.create({
        name: req.body.name,
        password: securePassword,
        email: req.body.email,
        location: req.body.location,
        // JSON FORMAT
        // "name": "Abhijit",
        // "password": "1234",
        // "email": "xyz@gmail.com",
        // "location": "Baker Street 1234"
      }).then(res.json({ success: true }));
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);


// Login Check email:- hash@gmail.com  password:- Hash@1234
router.post(
  "/loginuser",
  body("email", "Incorrect Email").isEmail(),
  body("password", "Incorrect Password").isLength({ min: 5 }),
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    let email = req.body.email;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ errors: "Invalid Email or Password" });
      }

      const passwordCompare = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!passwordCompare) {
        return res.status(400).json({ errors: "Invalid Email or Password" });
      }

      const data = {
        user: {
          id: user.id,
        }
      }

      // While Checking Check with Hashed(bcrypt.js Value) saved value
      const authToken = jwt.sign(data, jwtSecret);
      return res.json({ success: true, authToken});
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
