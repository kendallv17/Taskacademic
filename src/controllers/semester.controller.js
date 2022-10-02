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

// export async function updateSemester(req, res) {
//   const { id } = req.params;
//   const { userId, start_date, final_date,description } = req.body;
//   try {
//     const updatedSemester = await Semester.update(
//       { userId, start_date, final_date,description },
//       { where: { id } }
//     );

//     const semester = await Semester.findOne({
//       attributes: ["userId", "start_date", "final_date", "id", "description"],
//       where: { id },
//     });

//     semester.set(req.body);

//     await semester.save();

//     res.json(semester);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// }

// export async function deleteSemester(req, res) {
//   const { id } = req.params;
//   try {
//     await Semester.destroy({
//       where: { id },
//     });

//     return res.sendStatus(204);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// }

// export async function getSemester(req, res) {
//   const { id } = req.params;
//   try {
//     const semester = await Semester.findOne({
//       where: { id },
//       attributes: ["id", "userId", "start_date", "final_date","description"],
//     });
//     res.json(semester);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// }
