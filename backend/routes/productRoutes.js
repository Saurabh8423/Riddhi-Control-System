import express from "express";
import { getProducts, getProduct, createProduct } from "../controllers/productController.js";
import { authMiddleware } from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:slug", getProduct);
router.post("/", authMiddleware, createProduct);

export default router;
