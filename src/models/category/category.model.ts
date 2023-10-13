import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const categorySchema = new Schema({
  title: String,
  description: String,
  metaTitle: String,
  metaDescription: String,
  metaUrl: String,
  image: String
});

const Category = model('Category', categorySchema);
export default Category;