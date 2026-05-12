const express = require("express");

const { createPost, getAllPost } = require("../controllers/postsController");

const router = express.Router();

// === create post ===
router.post("/", createPost);

// === get all post ===
router.get("/", getAllPost);

module.exports = router;
