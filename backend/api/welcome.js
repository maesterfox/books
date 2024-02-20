// /api/welcome.js
import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.status(200).send("Welcome To my MERN Bookstore App");
});

export default app;
