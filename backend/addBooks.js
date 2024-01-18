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
    summary:
      "A tale of love, wealth, and societal expectations set against the backdrop of the Roaring Twenties in America. The story unfolds through the eyes of Nick Carraway, exploring the extravagant and mysterious world of Jay Gatsby.",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishYear: 1960,
    summary:
      "This Pulitzer Prize-winning novel addresses racial injustice in the American South during the 1930s. Scout Finch, a young girl, narrates the story of her father, Atticus Finch, a lawyer defending a black man falsely accused of raping a white woman.",
  },
  {
    title: "1984",
    author: "George Orwell",
    publishYear: 1949,
    summary:
      "A dystopian classic depicting a totalitarian society where the government, led by the enigmatic figure Big Brother, monitors and controls every aspect of citizens' lives.",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publishYear: 1813,
    summary:
      "A timeless romantic novel that explores the themes of love, class, and societal expectations in early 19th-century England. The spirited Elizabeth Bennet navigates the complexities of social norms and expectations.",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publishYear: 1951,
    summary:
      "A coming-of-age novel narrated by the disillusioned teenager Holden Caulfield. The story follows Holden's experiences in New York City and explores themes of adolescence, alienation, and societal expectations.",
  },
  {
    title: "To the Lighthouse",
    author: "Virginia Woolf",
    publishYear: 1927,
    summary:
      "A modernist masterpiece that delves into the complexities of human consciousness and the passage of time. Set on the Isle of Skye, the novel explores the Ramsay family's relationships and aspirations.",
  },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    publishYear: 1967,
    summary:
      "A magical realist novel that chronicles the Buendía family over several generations in the fictional town of Macondo. The story blends history, myth, and reality, creating a rich tapestry of Latin American literature.",
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    publishYear: 1932,
    summary:
      "A dystopian vision of a future society where technological and genetic advancements have eliminated individuality and emotional depth. The novel explores the consequences of sacrificing personal freedom for societal stability.",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    publishYear: 1937,
    summary:
      "A classic fantasy novel that follows the journey of Bilbo Baggins, a hobbit who reluctantly embarks on an epic quest to reclaim treasure guarded by the dragon Smaug. Along the way, Bilbo discovers courage and inner strength.",
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    publishYear: 1954,
    summary:
      "An epic fantasy trilogy that follows the quest to destroy the One Ring and defeat the dark lord Sauron. The story encompasses themes of friendship, heroism, and the struggle between good and evil in the fictional world of Middle-earth.",
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
