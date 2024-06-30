import express from "express";
const router = express.Router();
import User from "../model/User.js";
router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//GET USER BY EMAIL
router.get("/:email", async (req, res) => {
  try {
    const userEmail = req.params.email;
    const user = await User.findOne({ email: userEmail });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      email: req.body.email,
      image: req.body.image,
    };

    const userRef = await User.findOneAndUpdate(data, data, {
      new: true,
      upsert: true,
      runValidators: true,
    });

    console.log(userRef);

    const userRes = await userRef.save();

    res.status(201).json(userRes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
