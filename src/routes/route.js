const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createbooks  )

// router.get("/getUsersData", UserController.getbooks)
router.post("/book",UserController.createbooks)
 module.exports = router;
