export let books = [
  {
    id: 1,
    title: "Node.js Basics",
    author: "John Smith"
  },
  {
    id: 2,
    title: "JavaScript Guide",
    author: "Jane Doe"
  },
  {
    id: 3,
    title: "Express.js Handbook",
    author: "Alex Brown"
  }
];

let nextId = 4;

export function findBookById(id) {
  return books.find(book => book.id === id);
}

export function addBook(data) {
  const book = {
    id: nextId++,
    title: data.title,
    author: data.author || "Unknown"
  };

  books.push(book);

  return book;
}

export function updateBook(id, data) {
  const book = findBookById(id);

  if (!book) return null;

  if (data.title !== undefined) {
    book.title = data.title;
  }

  if (data.author !== undefined) {
    book.author = data.author;
  }

  return book;
}

export function removeBook(id) {
  const index = books.findIndex(book => book.id === id);

  if (index === -1) return null;

  return books.splice(index, 1)[0];
}