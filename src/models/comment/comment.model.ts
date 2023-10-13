import mongoose from "mongoose";
const { Schema, model} = mongoose;

const commentSchema = new Schema ({
    article: String,
    name: String,
    content: String,
    state: Boolean
})

const Comment = model("Comment", commentSchema)
export default Comment;