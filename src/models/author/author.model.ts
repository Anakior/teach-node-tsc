import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const authorSchema = new Schema({
  firstName: String,
  lastName: String,
  avatar: String
});

const Author = model('Author', authorSchema);
export default Author;