import { Router } from "express";

import {
  list,
  getOne,
  search,
  create,
  update,
  remove
} from "../controllers/books.controller.js";

const router = Router();

router.get("/", list);

// Тодорхой route-ыг хувьсагчтай route-оос өмнө байрлуулна.
router.get("/search", search);

router.post("/", create);

router.get("/:id", getOne);
router.put("/:id", update);
router.patch("/:id", update);
router.delete("/:id", remove);

export default router;