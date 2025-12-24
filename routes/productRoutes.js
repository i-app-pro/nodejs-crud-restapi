import express from "express";
import {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct
} from "../controllers/productController.js";

const router = express.Router();

// UNTUK GET ALL PRODUCTS
router.get("/", getProducts);
// UNTUK CREATE PRODUCT
router.post("/", createProduct);
// UNTUK GET PRODUCT BY ID
router.get("/:id", getProductById);
// UNTUK UPDATE PRODUCT
router.put("/:id", updateProduct);
// UNTUK DELETE PRODUCT
router.delete("/:id", deleteProduct);

export default router;
