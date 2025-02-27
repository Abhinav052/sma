import express, { json } from "express";
import dotenv from "dotenv";

import { default as mongoose } from "mongoose";
import cors from "cors";
const app = express();
const port = 5000; // Define your desired port
import userRoutes from "./routes/userRoute.js";
import postRoutes from "./routes/postRoute.js";
import commentRoutes from "./routes/commentRoute.js";
// Middleware to parse JSON requests
dotenv.config();
app.use(json(), cors());
const uri = process.env.MONGODB_URL; // Replace with your MongoDB URI and database name
app.use("/user", userRoutes, cors());
app.use("/post", postRoutes, cors());
app.use("/comment", commentRoutes, cors());
//connecting MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once("open", () => console.log("Connected"));

// Example route
app.get("/", (req, res) => {
  res.send("Hello, this is your Express app!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
