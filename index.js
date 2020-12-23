import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";
import postsRoutes from "./routes/posts.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use("/users", usersRoutes);
app.use("/posts", postsRoutes);

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Server for the state management class",
  });
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
