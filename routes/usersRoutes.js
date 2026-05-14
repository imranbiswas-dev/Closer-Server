const express = require("express");

const {
  createUser,
  getUser,
  getSingleUser,
   updateUser,
} = require("../controllers/usersController");

const router = express.Router();

//  === create user ===
router.post("/", createUser);

// === get user ===
router.get("/", getUser);

// === get single user ===
router.get("/:email", getSingleUser);

// === update user ===
router.put("/:id", updateUser);

module.exports = router;
