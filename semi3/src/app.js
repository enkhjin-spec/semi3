import express from "express";
import booksRouter from "./routes/books.router.js";
import { logger } from "./middlewares/logger.js";
import { notFound, errorHandler } from "./middlewares/error.js";

const app = express();
const PORT = process.env.PORT || 3000;

// ==========================================
// ДАСГАЛ 1: express.json() нэмэх
// ==========================================
// req.body-г JSON болгон унших middleware[cite: 14, 37]
app.use(express.json());

// ==========================================
// ДАСГАЛ 4: Logger middleware залгах
// ==========================================
app.use(logger);

// ==========================================
// ДАСГАЛ 3: /books замаар Router-ийг холбох
// ==========================================
app.use("/books", booksRouter);

// ==========================================
// ДАСГАЛ 4: 404 ба Global Error Handler холбох
// ==========================================
// Маршрутуудын доор байх ёстой[cite: 20]
app.use(notFound);
// Хамгийн сүүлд байх ёстой[cite: 20, 22]
app.use(errorHandler);

// Серверийг асаана[cite: 45]
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});