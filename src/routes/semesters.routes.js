import { Router } from "express";
import { createSemester, getSemesters } from "../controllers/semester.controller.js";


const router = Router();

// Routes
router.post("/", createSemester);
// router.put("/:id", updateTask);
// router.delete("/:id", deleteTask);
router.get("/", getSemesters);
// router.get("/:id", getTask);

export default router;
