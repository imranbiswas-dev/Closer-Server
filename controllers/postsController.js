const { db } = require("../config/db");

const postCollection = db.collection("posts");

// === create post ===
const createPost = async (req, res) => {
  try {
    const result = await postCollection.insertOne(req.body);
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send({
      message: "Failed to create post",
      error: error.message,
    });
  }
};

// === Get all post ===
const getAllPost = async (req, res) => {
  try {
    const result = await postCollection.find().sort({ _id: -1 }).toArray();
    res.send(result);
  } catch (error) {
    res.status(500).send({
      message: "Failed to fetch posts",
      error: error.message,
    });
  }
};

module.exports = {
  createPost,
  getAllPost,
};
