import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, index: true },
  description: String,
  price: Number,
  images: [String],
  category: String,
  ratings: { type: Number, default: 0 },
  numReviews: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model('Product', productSchema);
