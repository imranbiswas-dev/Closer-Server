const { db } = require("../config/db");

const usersCollection = db.collection("users");

// === create user ===
const createUser = async (req, res) => {
  try {
    const result = await usersCollection.insertOne(req.body);
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send({
      message: "Failed to create post",
      error: error.message,
    });
  }
};

// === get user ===
const getUser = async (req, res) => {
  try {
    const result = await usersCollection.find().toArray();
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send({
      message: "Failed to create post",
      error: error.message,
    });
  }
};

module.exports = {
  createUser,
  getUser,
};
