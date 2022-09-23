import { Semester } from "../models/Semester.js";
import { User } from "../models/User.js";

export async function createSemester(req, res) {
  try {
    const { final_date, start_date, userId, description } = req.body;
    const newSemester = await Semester.create({
      userId,
      final_date,
      start_date,
      description,
    });
    res.json(newSemester);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getSemesters(req, res) {
  try {
    const semesters = await Semester.findAll({
      attributes: ["id", "userId", "final_date", "start_date", "description"],
      order: [["id", "DESC"]],
    });
    res.json(semesters);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

// export async function updateTask(req, res) {
//   const { id } = req.params;
//   // const { projectid, name, done } = req.body;
//   try {
//     // const updatedTask = await Task.update(
//     //   { name, done, projectid },
//     //   { where: { id } }
//     // );

//     const task = await Task.findOne({
//       attributes: ["name", "projectId", "done", "id"],
//       where: { id },
//     });

//     task.set(req.body);

//     await task.save();

//     res.json(task);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// }

// export async function deleteTask(req, res) {
//   const { id } = req.params;
//   try {
//     await Task.destroy({
//       where: { id },
//     });

//     return res.sendStatus(204);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// }

// export async function getTask(req, res) {
//   const { id } = req.params;
//   try {
//     const task = await Task.findOne({
//       where: { id },
//       attributes: ["id", "projectId", "name", "done"],
//     });
//     res.json(task);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// }
