import { Task } from "../models/Task.js";
import { Course } from "../models/Course.js";

export async function getCourses(req, res) {
  try {
    const courses = await Course.findAll({
      atributes: ["id", "professor", "name"],
    });
    res.json(courses);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createCourse(req, res) {
  const { name, professor } = req.body;
  try {
    let newCourse = await Course.create(
      {
        name,
        professor,
      },
      {
        fields: ["name", "professor"],
      }
    );
    return res.json(newCourse);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}

export async function getCourseTasks(req, res) {
    const { id } = req.params;
    try {
      const tasks = await Task.findAll({
        attributes: ["id", "courseId", "due_date", "status", "priority"],
        where: { userId: id },
      });
      res.json(tasks);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }