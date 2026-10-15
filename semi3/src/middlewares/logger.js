// ==========================================
// ДАСГАЛ 4: Хүсэлтийг логлох Middleware
// ==========================================
export function logger(req, res, next) {
  // Эхэлсэн хугацааг авна[cite: 42]
  const start = Date.now();

  // Хариу илгээгдэж дуусах үед ажиллана[cite: 42]
  res.on("finish", () => {
    // Зарцуулсан хугацааг миллисекундээр тооцоолно[cite: 42]
    const ms = Date.now() - start;
    // Терминал дээр хэвлэнэ[cite: 42]
    console.log(`${req.method} ${req.url} ${res.statusCode} ${ms}ms`);
  });

  // Дараагийн middleware эсвэл route руу шилжүүлнэ[cite: 18, 42]
  next();
}