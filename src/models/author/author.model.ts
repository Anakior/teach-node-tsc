import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const authorSchema = new Schema({
  firstName: String,
  lastName: String,
  title: String,
  description: String,
  avatar: String,
  socialNetwork: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: {type: Date , default: Date.now}
});

const Author = model('Author', authorSchema);
export default Author;