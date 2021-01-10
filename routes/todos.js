import express from "express";
import {
  getTodo,
  getTodos,
  postTodos,
  putTodo,
  deleteTodo,
} from "../controllers/todos.js";

const router = express.Router();

router.get("/", getTodos);

router.get("/:id", getTodo);

router.post("/", postTodos);

router.put("/:id", putTodo);

router.delete("/:id", deleteTodo);

export default router;
