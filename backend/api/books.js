import express from "express";
import mongoose from "mongoose";
import { mongoDBURL } from "../config.js"; // Adjust the path as necessary
import { Book } from "../models/bookModel.js";
import cors from "cors";

const app = express();

// MongoDB Connection
mongoose.connect(mongoDBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors()); // Configure CORS as needed
app.use(express.json()); // Middleware for parsing JSON bodies

// POST: Save a new book
app.post("/api/books", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear ||
      !request.body.summary
    ) {
      return response.status(400).send({
        message:
          "Send all required fields: title, author, publishYear, summary",
      });
    }

    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
      summary: request.body.summary,
    };

    const book = await Book.create(newBook);

    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// GET: Retrieve all books
app.get("/api/books", async (request, response) => {
  try {
    const books = await Book.find({});
    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// GET: Retrieve a book by ID
app.get("/api/books/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const book = await Book.findById(id);

    if (!book) {
      return response.status(404).send({ message: "Book not found" });
    }

    return response.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// PUT: Update a book
app.put("/api/books/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const updateData = request.body;

    if (
      !updateData.title ||
      !updateData.author ||
      !updateData.publishYear ||
      !updateData.summary
    ) {
      return response.status(400).send({
        message:
          "Send all required fields: title, author, publishYear, summary",
      });
    }

    const result = await Book.findByIdAndUpdate(id, updateData, { new: true });

    if (!result) {
      return response.status(404).json({ message: "Book not found" });
    }

    return response.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// DELETE: Remove a book
app.delete("/api/books/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Book not found" });
    }

    return response.status(200).send({ message: "Book deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default app;
