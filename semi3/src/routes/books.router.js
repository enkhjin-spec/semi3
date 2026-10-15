// Express сангаас Router импортлоно[cite: 24, 44]
import { Router } from "express";
// Controller доторх функцүүдийг 'c' гэж импортлоно[cite: 24, 44]
import * as c from "../controllers/books.controller.js";

// ==========================================
// ДАСГАЛ 3: Router үүсгэх болон Зам тохируулах
// ==========================================
const router = Router();

// GET /books
router.get("/", c.list);

// GET /books/:id
router.get("/:id", c.getOne);

// POST /books - (ДАСГАЛ 1)
router.post("/", c.create);

// PATCH /books/:id - (ДАСГАЛ 2)
router.patch("/:id", c.update);

// DELETE /books/:id - (ДАСГАЛ 2)
router.delete("/:id", c.remove);

// Router-ийг экспортлоно[cite: 24, 44]
export default router;