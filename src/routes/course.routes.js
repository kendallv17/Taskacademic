import { Router } from "express";
import {
  getCourses,
  createCourse,
  // updateProject,
  // getProject,
  // deleteProject,
  getCourseTasks,
} from "../controllers/couse.controller.js";

const router = Router();

// Routes
router.post("/", createCourse);
router.get("/", getCourses);
// router.put("/:id", updateProject);
// router.delete("/:id", deleteProject);
// router.get("/:id", getProject);

router.get("/:id/semesters", getCourseTasks);

export default router;
