import { Task } from "../models/Task.js";
import { Course } from "../models/Course.js";

export async function createTask(req, res) {
  try {
    const { due_date, priority, status, description, courseId } = req.body;
    const newTask = await Task.create({
      courseId,
      due_date,
      priority,
      status,
      description,
    });
    res.json(newTask);
  } catch (error) {
     
    return res.status(500).json({ message: error.message });
  }
}

export async function getTasks(req, res) {
  try {
    const tasks = await Task.findAll({
      attributes: ["id", "courseId", "due_date", "priority", "status"],
      order: [["id", "DESC"]],
    });
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}