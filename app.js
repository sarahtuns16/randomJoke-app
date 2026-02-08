import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.render("jokesUI");
});

export default app;
