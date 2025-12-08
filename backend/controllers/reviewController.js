import Product from '../models/Product.js';
import Review from '../models/Review.js';

export const addReview = async (req, res) => {
  const { productId, rating, comment } = req.body;
  const userId = req.userId; // from auth middleware
  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    const review = new Review({
      product: productId,
      user: userId,
      name: req.userName || 'Anonymous',
      rating,
      comment
    });
    await review.save();

    // update product ratings and numReviews
    const reviews = await Review.find({ product: productId });
    const numReviews = reviews.length;
    const avg = reviews.reduce((acc, r) => acc + r.rating, 0) / numReviews;

    product.numReviews = numReviews;
    product.ratings = avg;
    await product.save();

    res.json({ message: 'Review added', product });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
