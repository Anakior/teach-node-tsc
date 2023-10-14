import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const categorySchema = new Schema({
  title: String,
  description: String,
  metaTitle: String,
  metaDescription: String,
  metaUrl: String,
  image: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: {type: Date , default: Date.now}
});

const Category = model('Category', categorySchema);
export default Category;