import pool from "../db.js";

export const getTodos = async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (error) {
    console.log({ error });
  }
};

export const getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json(todo.rows);
  } catch (error) {
    console.log({ error });
  }
};

export const postTodos = async (req, res) => {
  try {
    const { description } = req.body;
    const newToDo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
      [description]
    );
    res.json(newToDo);
  } catch (error) {
    console.log({ error });
  }
};

export const putTodo = async (req, res) => {
  try {
    const { description } = req.body;
    const { id } = req.params;
    const updatedDo = await pool.query(
      "UPDATE todo SET description = ($1) WHERE todo_id = ($2)",
      [description, id]
    );
    res.json(updatedDo);
  } catch (error) {
    console.log({ error });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteToDo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json({
      message: "To do was successfully deleted",
      todo: deleteToDo,
    });
  } catch (error) {
    console.log({ error });
  }
};
