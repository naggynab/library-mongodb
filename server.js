const express = require("express");
const connectDB = require("./db");

const app= express();
connectDB();

app.use(express.json());
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

const Book = require("./book");

async function addBook() {
  try {
    const newBook = await Book.create({
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      isbn: "123456789",
      publishedYear: 1925,
    });

    console.log(newBook);
  } catch (error) {
    console.error(error.message);
  }
}

addBook();