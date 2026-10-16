import {
  books,
  findBookById,
  addBook,
  updateBook,
  removeBook
} from "../data/books.js";

export function list(req, res) {
  return res.status(200).json({
    count: books.length,
    data: books
  });
}

export function getOne(req, res) {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({
      message: "Invalid book ID"
    });
  }

  const book = findBookById(id);

  if (!book) {
    return res.status(404).json({
      message: "Book not found"
    });
  }

  return res.status(200).json({
    data: book
  });
}

export function search(req, res) {
  const q = String(req.query.q || "").toLowerCase();

  const result = books.filter(book =>
    book.title.toLowerCase().includes(q)
  );

  return res.status(200).json({
    count: result.length,
    data: result
  });
}

export function create(req, res) {
  const { title, author } = req.body || {};

  if (
    typeof title !== "string" ||
    title.trim() === ""
  ) {
    return res.status(400).json({
      message: "Title is required"
    });
  }

  const book = addBook({
    title: title.trim(),
    author
  });

  return res.status(201).json({
    message: "Book created successfully",
    data: book
  });
}

export function update(req, res) {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({
      message: "Invalid book ID"
    });
  }

  const book = updateBook(id, req.body || {});

  if (!book) {
    return res.status(404).json({
      message: "Book not found"
    });
  }

  return res.status(200).json({
    message: "Book updated successfully",
    data: book
  });
}

export function remove(req, res) {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({
      message: "Invalid book ID"
    });
  }

  const book = removeBook(id);

  if (!book) {
    return res.status(404).json({
      message: "Book not found"
    });
  }

  return res.status(200).json({
    message: "Book deleted successfully",
    data: book
  });
}