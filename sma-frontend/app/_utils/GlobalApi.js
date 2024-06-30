const { default: axios } = require("axios");

//created axio client to create endpoint
const axioClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});
console.log(`key ${process.env.NEXT_PUBLIC_API_BASE_URL}`);
const createUser = (data) => axioClient.post("user", data);
const getUserByEmail = (email) => axioClient.get("user/" + email);
const createPost = (data) => axioClient.post("post", data);
const getAllPost = () => axioClient.get("post");
const onPostLike = (postId, data) =>
  axioClient.put("/post/like/" + postId, data);
const addComment = (data) => axioClient.post("comment", data);
const deleteComment = (commentId) => axioClient.delete("comment/" + commentId);
export default {
  createUser,
  getUserByEmail,
  createPost,
  getAllPost,
  onPostLike,
  addComment,
  deleteComment,
};
