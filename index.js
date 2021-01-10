import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import usersRoutes from "./routes/users.js";
import postsRoutes from "./routes/posts.js";
import todosRoutes from "./routes/todos.js";
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use("/users", usersRoutes);
app.use("/posts", postsRoutes);
app.use("/todos", todosRoutes);

// app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Server for the React and React Native Class",
  });
});

app.listen(process.env.PORT || PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
