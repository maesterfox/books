import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";

// Connect to MongoDB (replace the connection string with your MongoDB URI)
mongoose.connect(
  "mongodb+srv://talentedmrfox:808fcfjIgqqoVw3B@mernbookstore.ntwza2s.mongodb.net/books-collection?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// 808fcfjIgqqoVw3B
// mongodb+srv://talentedmrfox:<password>@mernbookstore.ntwza2s.mongodb.net/books-collection?retryWrites=true&w=majority

// Sample books data
const sampleBooks = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishYear: 1925,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishYear: 1960,
  },
  {
    title: "1984",
    author: "George Orwell",
    publishYear: 1949,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publishYear: 1813,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publishYear: 1951,
  },
  {
    title: "To the Lighthouse",
    author: "Virginia Woolf",
    publishYear: 1927,
  },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    publishYear: 1967,
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    publishYear: 1932,
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    publishYear: 1937,
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    publishYear: 1954,
  },
];

// Insert sample books into MongoDB
async function insertSampleBooks() {
  try {
    const options = { insertMany: { ordered: false, wtimeout: 30000 } };
    const insertedBooks = await Book.insertMany(sampleBooks, options);

    console.log("Sample books inserted successfully:", insertedBooks);
  } catch (error) {
    console.error("Error inserting sample books:", error);
  } finally {
    // Disconnect from MongoDB after insertion
    mongoose.disconnect();
  }
}

// Call the function to insert sample books
insertSampleBooks();
