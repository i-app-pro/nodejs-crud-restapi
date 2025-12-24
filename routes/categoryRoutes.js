import express from "express";
import {
  getCategories,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory
} from "../controllers/categoryController.js";

const router = express.Router();

// UNTUK GET ALL CATEGORIES
router.get("/", getCategories);
// UNTUK CREATE CATEGORY
router.post("/", createCategory);
// UNTUK GET CATEGORY BY ID
router.get("/:id", getCategoryById);
// UNTUK UPDATE CATEGORY
router.put("/:id", updateCategory);
// UNTUK DELETE CATEGORY
router.delete("/:id", deleteCategory);

export default router;
