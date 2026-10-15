// ==========================================
// ДАСГАЛ 4: 404 Route Not Found баригч
// ==========================================
export function notFound(req, res) {
  res.status(404).json({
    message: "Route not found",
    path: req.url
  });
}

// ==========================================
// ДАСГАЛ 4: Глобал 500 Error Handler
// ==========================================
export function errorHandler(error, req, res, next) {
  // Консолд алдааг хэвлэнэ[cite: 22, 46]
  console.error(error);
  // 500 статус болон алдааны мессеж буцаана[cite: 22, 46]
  res.status(500).json({
    message: "Internal server error"
  });
}