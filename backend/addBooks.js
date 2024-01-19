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
  // {
  //   title: "The Great Gatsby",
  //   author: "F. Scott Fitzgerald",
  //   publishYear: 1925,
  //   summary:
  //     "A tale of love, wealth, and societal expectations set against the backdrop of the Roaring Twenties in America. The story unfolds through the eyes of Nick Carraway, exploring the extravagant and mysterious world of Jay Gatsby.",
  // },
  // {
  //   title: "To Kill a Mockingbird",
  //   author: "Harper Lee",
  //   publishYear: 1960,
  //   summary:
  //     "This Pulitzer Prize-winning novel addresses racial injustice in the American South during the 1930s. Scout Finch, a young girl, narrates the story of her father, Atticus Finch, a lawyer defending a black man falsely accused of raping a white woman.",
  // },
  // {
  //   title: "1984",
  //   author: "George Orwell",
  //   publishYear: 1949,
  //   summary:
  //     "A dystopian classic depicting a totalitarian society where the government, led by the enigmatic figure Big Brother, monitors and controls every aspect of citizens' lives.",
  // },
  // {
  //   title: "Pride and Prejudice",
  //   author: "Jane Austen",
  //   publishYear: 1813,
  //   summary:
  //     "A timeless romantic novel that explores the themes of love, class, and societal expectations in early 19th-century England. The spirited Elizabeth Bennet navigates the complexities of social norms and expectations.",
  // },
  // {
  //   title: "The Catcher in the Rye",
  //   author: "J.D. Salinger",
  //   publishYear: 1951,
  //   summary:
  //     "A coming-of-age novel narrated by the disillusioned teenager Holden Caulfield. The story follows Holden's experiences in New York City and explores themes of adolescence, alienation, and societal expectations.",
  // },
  // {
  //   title: "To the Lighthouse",
  //   author: "Virginia Woolf",
  //   publishYear: 1927,
  //   summary:
  //     "A modernist masterpiece that delves into the complexities of human consciousness and the passage of time. Set on the Isle of Skye, the novel explores the Ramsay family's relationships and aspirations.",
  // },
  // {
  //   title: "One Hundred Years of Solitude",
  //   author: "Gabriel Garcia Marquez",
  //   publishYear: 1967,
  //   summary:
  //     "A magical realist novel that chronicles the Buendía family over several generations in the fictional town of Macondo. The story blends history, myth, and reality, creating a rich tapestry of Latin American literature.",
  // },
  // {
  //   title: "Brave New World",
  //   author: "Aldous Huxley",
  //   publishYear: 1932,
  //   summary:
  //     "A dystopian vision of a future society where technological and genetic advancements have eliminated individuality and emotional depth. The novel explores the consequences of sacrificing personal freedom for societal stability.",
  // },
  // {
  //   title: "The Hobbit",
  //   author: "J.R.R. Tolkien",
  //   publishYear: 1937,
  //   summary:
  //     "A classic fantasy novel that follows the journey of Bilbo Baggins, a hobbit who reluctantly embarks on an epic quest to reclaim treasure guarded by the dragon Smaug. Along the way, Bilbo discovers courage and inner strength.",
  // },
  // {
  //   title: "The Lord of the Rings",
  //   author: "J.R.R. Tolkien",
  //   publishYear: 1954,
  //   summary:
  //     "An epic fantasy trilogy that follows the quest to destroy the One Ring and defeat the dark lord Sauron. The story encompasses themes of friendship, heroism, and the struggle between good and evil in the fictional world of Middle-earth.",
  // },
  {
    title: "The Odyssey",
    author: "Homer",
    publishYear: -800,
    summary:
      "An ancient Greek epic poem attributed to Homer. It follows the hero Odysseus as he faces numerous challenges and adventures on his journey home after the fall of Troy.",
  },
  {
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    publishYear: 1880,
    summary:
      "A philosophical novel that explores themes of morality, faith, and the existence of God. It follows the complex relationships among three brothers and their father in 19th-century Russia.",
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    publishYear: 1818,
    summary:
      "A classic Gothic novel that tells the story of Victor Frankenstein, a young scientist who creates a sapient creature in an unorthodox scientific experiment. The novel explores themes of ambition, responsibility, and the consequences of playing God.",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    publishYear: 1988,
    summary:
      "A philosophical novel that follows Santiago, a shepherd boy, on his journey to find a hidden treasure in Egypt. The novel explores themes of destiny, dreams, and the pursuit of one's personal legend.",
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    publishYear: 2006,
    summary:
      "A post-apocalyptic novel that follows a father and his young son as they journey across a desolate landscape. The novel explores themes of survival, love, and the human spirit in the face of extreme adversity.",
  },
  {
    title: "The Scarlet Letter",
    author: "Nathaniel Hawthorne",
    publishYear: 1850,
    summary:
      "Set in 17th-century Puritan Massachusetts, this novel follows Hester Prynne, who is condemned for committing adultery and must wear a scarlet letter 'A' as a symbol of her sin. The novel explores themes of sin, guilt, and redemption.",
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    publishYear: 1851,
    summary:
      "A novel that tells the story of Captain Ahab's obsessive quest for revenge against the white whale, Moby Dick, who had destroyed Ahab's previous ship. The novel explores themes of obsession, fate, and the power of nature.",
  },
  {
    title: "The Handmaid's Tale",
    author: "Margaret Atwood",
    publishYear: 1985,
    summary:
      "A dystopian novel set in a theocratic society where women are subjugated and used for reproductive purposes. The novel follows the life of Offred, a Handmaid, as she navigates a world of oppression and rebellion.",
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    publishYear: 2011,
    summary:
      "A non-fiction book that explores the history of the human species from the emergence of Homo sapiens in Africa to the present day. The book examines the impact of cultural, social, and technological developments on human history.",
  },
  {
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    publishYear: 1939,
    summary:
      "Set during the Great Depression, this novel follows the Joad family as they migrate westward in search of a better life. The novel explores themes of poverty, injustice, and the resilience of the human spirit.",
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    publishYear: 1866,
    summary:
      "A psychological novel that explores the consequences of a young man's decision to commit murder. The novel delves into themes of morality, guilt, and redemption.",
  },
  {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    publishYear: 1890,
    summary:
      "A philosophical novel that examines the moral decay of Dorian Gray, a young man who remains eternally youthful while a portrait of him ages and reflects his sins.",
  },
  {
    title: "The Count of Monte Cristo",
    author: "Alexandre Dumas",
    publishYear: 1844,
    summary:
      "An adventure novel that follows Edmond Dantès, who, after being falsely imprisoned, seeks revenge against those who betrayed him. The novel explores themes of justice, vengeance, and redemption.",
  },
  {
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    publishYear: 2003,
    summary:
      "A novel that follows the complex relationship between two friends, Amir and Hassan, against the backdrop of Afghanistan's tumultuous history. The story explores themes of friendship, betrayal, and redemption.",
  },
  {
    title: "The Shining",
    author: "Stephen King",
    publishYear: 1977,
    summary:
      "A horror novel that follows Jack Torrance and his family as they move into the haunted Overlook Hotel. The novel explores themes of isolation, madness, and supernatural terror.",
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    publishYear: 1979,
    summary:
      "A comedic science fiction series that follows Arthur Dent, an unwitting Earthling, as he travels through space with an eclectic group of characters. The series satirizes various aspects of society and science fiction tropes.",
  },
  {
    title: "The Road Less Traveled",
    author: "M. Scott Peck",
    publishYear: 1978,
    summary:
      "A self-help book that explores the importance of discipline, responsibility, and spiritual growth. The book provides insights into personal development and relationships.",
  },
  {
    title: "The Martian",
    author: "Andy Weir",
    publishYear: 2011,
    summary:
      "A science fiction novel that follows astronaut Mark Watney's struggle for survival on Mars after being left behind by his crew. The novel explores themes of resilience, problem-solving, and human ingenuity.",
  },
  {
    title: "Norwegian Wood",
    author: "Haruki Murakami",
    publishYear: 1987,
    summary:
      "A novel that follows Toru Watanabe as he reflects on his youth, relationships, and the impact of loss. The story is set against the backdrop of 1960s Tokyo and explores themes of love and the search for meaning.",
  },
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    publishYear: 2019,
    summary:
      "A psychological thriller that revolves around Alicia Berenson, a woman accused of murdering her husband and then ceasing to speak. The novel explores the mystery of her silence and the truth behind the crime.",
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
