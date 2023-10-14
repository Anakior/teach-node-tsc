import mongoose from "mongoose";
const { Schema, model } = mongoose;

const commentSchema = new Schema({
  article: String,
  name: String,
  content: String,
  state: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Comment = model("Comment", commentSchema);
export default Comment;
