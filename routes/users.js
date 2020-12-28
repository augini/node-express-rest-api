import express from "express";
import { v4 as uuidv4 } from "uuid";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  users,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);

router.get("/:id", getUser);

router.post("/", createUser);

router.delete("/:id", deleteUser);

router.put("/:id", updateUser);

export default router;
