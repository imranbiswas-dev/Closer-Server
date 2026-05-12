const express = require("express");

const { createUser, getUser } = require("../controllers/usersController");

const router = express.Router();

//  === create user ===
router.post("/", createUser);

// === get user ===
router.get("/", getUser);

module.exports = router;