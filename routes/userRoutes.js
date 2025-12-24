import express from "express";
import {
  getUsers,
  insertUser,
  showUser,
  updateUser,
  deleteUser
} from "../controllers/userController.js";

const router = express.Router();

// UNTUK GET ALL USERS
router.get("/", getUsers);
// UNTUK CREATE USER
router.post("/", insertUser);
// UNTUK GET USER BY ID
router.get("/:id", showUser);
// UNTUK UPDATE USER
router.put("/:id", updateUser);
// UNTUK DELETE USER
router.delete("/:id", deleteUser);

export default router;
