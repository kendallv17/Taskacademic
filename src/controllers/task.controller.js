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

export const updateTask = async (req, res) => {
    try {
      const { id } = req.params;
      const { description, due_date, status, priority,courseId } = req.body;
  
      const task = await Task.findByPk(id);
      task.description = description;
      task.due_date = due_date;
      task.status = status;
      task.priority = priority;
      task.courseId = courseId;

      await task.save();
  
      res.json(task);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  export async function deleteTask(req, res) {
    const { id } = req.params;
    try {
      await Task.destroy({
        where: { id },
      });
  
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }