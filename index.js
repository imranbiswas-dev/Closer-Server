require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const { connectDB } = require("./config/db");

// === Global middleware === \\
app.use(cors());
app.use(express.json());

// === Database Connection === \\
connectDB();

// === default route === \\
app.get("/", (req, res) => {
  res.send("CLOSER server is running...");
});

// === server running === \\
app.listen(port, () => {
  console.log(`CLOSER server running on port ${port}`);
});
