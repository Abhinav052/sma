import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  commentText: {
    type: String,
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  createdAt: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Comment = mongoose.model("Comment", CommentSchema);

export default Comment;
