import express from "express";
const router = express.Router();
import Comment from "../model/Comment";
import Post from "../model/Post";

router.post("/", async (req, res) => {
  try {
    const post = await Post.findById(req.body.postId);
    const commentRes = await Comment.create(req.body);
    post.comments.push(commentRes._id);
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/:commentId", async (req, res) => {
  try {
    const commentId = req.params.commentId;
    const commentDeleteResp = await Comment.findByIdAndDelete({
      _id: commentId,
    });
    res.status(201).json(commentDeleteResp);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// //GET USER BY EMAIL
// router.get("/:email", async (req, res) => {
//   try {
//     const userEmail = req.params.email;
//     const user = await User.findOne({ email: userEmail });
//     res.json(user);
//   } catch (err) {
//     res.status(500).json({ message: error.message });
//   }
// });

// router.post("/", async (req, res) => {
//   try {
//     const data = {
//       name: req.body.name,
//       email: req.body.email,
//       image: req.body.image,
//     };

//     const userRef = await User.findOneAndUpdate(data, data, {
//       new: true,
//       upsert: true,
//       runValidators: true,
//     });

//     console.log(userRef);

//     const userRes = await userRef.save();

//     res.status(201).json(userRes);
//   } catch (err) {
//     res.status(500).json({ message: error.message });
//   }
// });

export default router;
