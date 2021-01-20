import books from "../initialdata/books.js";

export const getBooks = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send(books);
};
