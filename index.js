require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

const { connectDB } = require("./config/db");

const postsRoutes = require("./routes/postsRoutes");
const usersRouter = require("./routes/usersRoutes");

// === Global middleware === \\
app.use(cors());
app.use(express.json());

// === Database Connection === \\
connectDB();

// === API Routes ===
app.use("/post", postsRoutes);
app.use("/user", usersRouter);

// === default route === \\
app.get("/", (req, res) => {
  res.send("CLOSER server is running...");
});

// === server running === \\
app.listen(port, () => {
  console.log(`CLOSER server running on port ${port}`);
});
