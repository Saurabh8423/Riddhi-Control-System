import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, slug, description, price, images, category } = req.body;

    const product = await Product.create({
      name,
      slug,
      description,
      price,
      images,
      category,
    });

    res.json({ message: "Product created", product });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
