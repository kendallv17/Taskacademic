import { Router } from "express";
import {
  getUsers,
  createUser,
  // updateProject,
  // getProject,
  // deleteProject,
  getUserSemesters,
} from "../controllers/user.controller.js";

const router = Router();

// Routes
router.post("/", createUser);
router.get("/", getUsers);
// router.put("/:id", updateProject);
// router.delete("/:id", deleteProject);
// router.get("/:id", getProject);

router.get("/:id/semesters", getUserSemesters);

export default router;
