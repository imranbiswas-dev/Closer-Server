const { ObjectId } = require("mongodb");
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

// === get single user ===
const getSingleUser = async (req, res) => {
  try {
    const email = req.params.email;
    const query = { email: email };
    const result = await usersCollection.findOne(query);
    res.send(result);
  } catch (error) {
    res.status(500).send({
      message: "Failed to get user",
      error: error.message,
    });
  }
};

// === update user ===
const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const updateDoc = {
      $set: req.body,
    };

    const options = { upsert: false };
    const result = await usersCollection.updateOne(query, updateDoc, options);
    res.send(result);
  } catch (error) {
    res.status(500).send({
      message: "Failed to update user",
      error: error.message,
    });
  }
};

module.exports = {
  createUser,
  getUser,
  getSingleUser,
  updateUser
};
