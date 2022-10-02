import { User } from "../models/User.js";
import { Semester } from "../models/Semester.js";

export async function getUsers(req, res) {
  try {
    const users = await User.findAll({
      atributes: ["id", "name", "last_name", "email", "password", "college"],
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createUser(req, res) {
  const { name, last_name, email, password, college } = req.body;
  try {
    let newUser = await User.create(
      {
        name,
        last_name,
        email,
        password,
        college,
      },
      {
        fields: ["name", "last_name", "email", "password","college"],
      }
    );
    return res.json(newUser);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}

export async function getUser(req, res) {
  const { id } = req.params;
  try {
    const user = await User.findOne({
      where: {
        id,
      },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, last_name, email, password, college } = req.body;

    const user = await User.findByPk(id);
    user.name = name;
    user.last_name = last_name;
    user.email = email;
    user.password = password;
    user.college = college;
    await user.save();

    res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function deleteUser(req, res) {
  const { id } = req.params;
  try {
    await Semester.destroy({
      where: {
        userId: id,
      },
    });
    await User.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getUserSemesters(req, res) {
  const { id } = req.params;
  try {
    const semesters = await Semester.findAll({
      attributes: ["id", "userId", "start_date", "final_date", "description"],
      where: { userId: id },
    });
    res.json(semesters);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
