// ==========================================
// ДАСГАЛ 1: Анхны өгөгдөл тодорхойлох
// ==========================================
// Анхны номын жагсаалт (Array)[cite: 38]
export let books = [
  { id: 1, title: "Node.js Basics", price: 45000, isAvailable: true },
  { id: 2, title: "Express in Action", price: 52000, isAvailable: true },
  { id: 3, title: "Prisma Guide", price: 61000, isAvailable: true }
];

// Шинэ номын ID-г 4-өөс эхлүүлнэ[cite: 38]
let nextId = 4;

// Номыг ID-гаар хайх функц
export function findBookById(id) {
  // Array дотроос тохирох id-тай номыг буцаана
  return books.find((book) => book.id === id);
}

// ==========================================
// ДАСГАЛ 1: Шинэ ном нэмэх (addBook)
// ==========================================
export function addBook(input) {
  // Шинэ номын объект үүсгэнэ[cite: 38]
  const book = {
    id: nextId++,       // Одоогийн id-г авч, дараа нь 1-ээр нэмнэ[cite: 30, 38]
    isAvailable: true,  // Төлөвийг боломжтой (true) болгоно[cite: 38]
    ...input            // Ирсэн title, price-ийг задлан оруулна[cite: 30, 38]
  };
  // Номоо array руу нэмнэ[cite: 30, 38]
  books.push(book);
  // Үүссэн номоо буцаана[cite: 38]
  return book;
}

// ==========================================
// ДАСГАЛ 2: Номын мэдээлэл засах (updateBook)
// ==========================================
export function updateBook(id, changes) {
  // Засах номоо хайна[cite: 39]
  const book = findBookById(id);
  // Ном байхгүй бол null буцаана[cite: 39]
  if (!book) return null;

  // client-ээс ирсэн changes дотор id байвал хамгаалж id-г салгаж хасна[cite: 39, 47]
  const { id: _, ...validChanges } = changes;
  // Байгаа номын объект дээр шинэчлэгдсэн утгуудыг давхарлан бичнэ[cite: 30, 39]
  Object.assign(book, validChanges);
  // Шинэчлэгдсэн номыг буцаана[cite: 39]
  return book;
}

// ==========================================
// ДАСГАЛ 2: Ном устгах (removeBook)
// ==========================================
export function removeBook(id) {
  // Устгах номын байрлалыг (index) хайна[cite: 40]
  const index = books.findIndex((book) => book.id === id);
  // Олдохгүй бол (-1 ирвэл) false буцаана[cite: 40]
  if (index === -1) return false;

  // Номыг array-аас 1 ширхгийг устгана[cite: 40]
  books.splice(index, 1);
  // Амжилттай устгавал true буцаана[cite: 40]
  return true;
}