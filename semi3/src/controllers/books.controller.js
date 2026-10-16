// Data давхаргаас функцүүдийг импортлоно[cite: 44]
import {
  books,
  findBookById,
  addBook,
  updateBook,
  removeBook
} from "../data/books.js";

// ==========================================
// ДАСГАЛ 3: Бүх номыг авах контроллер
// ==========================================
export function list(req, res) {
  // Нийт тоо болон жагсаалтыг JSON буцаана[cite: 27, 44]
  res.json({
    count: books.length,
    data: books
  });
}

// ==========================================
// ДАСГАЛ 3: Нэг ном авах контроллер
// ==========================================
export function getOne(req, res) {
  // URL params.id-г тоо болгоно[cite: 15, 39]
  const id = Number(req.params.id);
  // Номоо хайна
  const book = findBookById(id);

  // Олдохгүй бол 404 буцаана[cite: 27, 39]
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  // Олдсон номыг буцаана[cite: 27]
  res.json(book);
}

// ==========================================
// ДАСГАЛ 1: Шинэ ном нэмэх контроллер (POST)
// ==========================================
export function create(req, res) {
  // req.body-оос title болон price-ийг авна[cite: 28, 38]
  const { title, price } = req.body;

  // Validation: title байхгүй бол 400 алдаа буцаана[cite: 28, 38]
  if (!title) {
    return res.status(400).json({ message: "title is required" });
  }

  // Номыг нэмж үүсгэнэ[cite: 28, 38]
  const book = addBook({ title, price });
  // 201 Created статус болон үүссэн номыг буцаана[cite: 28, 38]
  res.status(201).json(book);
}

// ==========================================
// ДАСГАЛ 2: Ном засах контроллер (PATCH)
// ==========================================
export function update(req, res) {
  // params-аас id-г тоо болгож авна[cite: 39]
  const id = Number(req.params.id);
  // Номын мэдээллийг засна[cite: 39]
  const updated = updateBook(id, req.body);

  // Олдохгүй бол 404 буцаана[cite: 39]
  if (!updated) {
    return res.status(404).json({ message: "Book not found" });
  }

  // Шинэчлэгдсэн номыг буцаана[cite: 39]
  res.json(updated);
}

// ==========================================
// ДАСГАЛ 2: Ном устгах контроллер (DELETE)
// ==========================================
export function remove(req, res) {
  // params-аас id-г тоо болгож авна[cite: 40]
  const id = Number(req.params.id);
  // Ном устгах функц дуудна[cite: 40]
  const ok = removeBook(id);

  // Олдохгүй бол 404 буцаана[cite: 40]
  if (!ok) {
    return res.status(404).json({ message: "Book not found" });
  }

  // 204 No Content буцаана[cite: 29, 40]
  res.status(204).send();
}