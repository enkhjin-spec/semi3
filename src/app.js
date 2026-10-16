import express from "express";
import dotenv from "dotenv";

import booksRouter from "./routes/books.router.js";
import { logger } from "./middlewares/logger.js";
import { notFound } from "./middlewares/notFound.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(logger);

// Routers
app.use("/books", booksRouter);

// 404 handler хамгийн сүүлд байна.
app.use(notFound);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});