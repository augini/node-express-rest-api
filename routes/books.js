import express from "express";
import { v4 as uuidv4 } from "uuid";
import { getBooks } from "../controllers/books.js";

const router = express.Router();

router.get("/", getBooks);

export default router;
