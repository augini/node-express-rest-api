import { v4 as uuidv4 } from "uuid";
import posts from "../initialdata/posts.js";

export const getPosts = (req, res) => {
  console.log(posts);
  res.send(posts);
};

export const getPost = (req, res) => {
  const { id } = req.params;
  const post = posts.find((post) => post.id.toString() === id);
  if (post == undefined) {
    res.send(`Post with the id ${id} not found`);
  } else {
    res.send(post);
  }
};

export const createPost = (req, res) => {
  const id = uuidv4();
  if (req.body.hasOwnProperty("title") && req.body.hasOwnProperty("body")) {
    const { title, body } = req.body;
    if (title.trim() !== "" && body.trim() !== "") {
      const post = { id, title: title, body: body };
      posts.push(post);
      res.send(`Post with the title ${title} has been added`);
    } else {
      res.status(500).send({
        status: "Post not added",
        message:
          "Post should have title and body and neither of them can be empty",
      });
    }
  } else {
    res.status(500).send({
      status: "Post not added",
      message:
        "Post should have title and body and neither of them can be empty",
    });
  }
};

export const deletePost = (req, res) => {
  const id = req.params.id;
  posts = posts.filter((post) => post.id.toString() !== id);
  const { title } = posts.find((post) => post.id.toString() === id);
  res.send(`Post with the id ${id} and title ${title} has been deleted`);
};

export const updatePost = (req, res) => {
  const id = req.params.id;
  const post = posts.find((post) => post.id.toString() === id);
  const prevTitle = post.Title;
  const { title, body } = req.body;
  if (title) post.title = title;
  if (body) post.body = body;

  res.send(
    `Post with the id ${id} has been updated from ${prevTitle} to ${title}`
  );
};
