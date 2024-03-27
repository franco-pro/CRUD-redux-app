// Controllers

import User from "@/models/users";

// GET::http://localhost:3000/api/users
export async function getUsers(req, res) {
  try {
    const users = await User.find({});
    if (!users) return res.status(404).json({ error: "Data not found" });
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching data" });
  }
}

// POST::http://localhost:3000/api/users
export async function postUsers(req, res) {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: "formData not provided" });
    const data = await User.create(formData);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ error });
  }
}

// PUT::http://localhost:3000/api/users/{userId}

export async function putUsers(req, res) {
  try {
    const { userId } = req.query;
    const formData = req.body;
    if (userId && formData) {
      const userUpdate = await User.findByIdAndUpdate(userId, formData);
      res.status(200).json(userUpdate);
    }
    res.status(404).json({ error: "User not select..." });
  } catch (error) {
    res.status(404).json({ error });
  }
}

// DELETE::http://localhost:3000/api/users/{userId}
export async function deleteUsers(req, res) {
  try {
    const { userId } = req.query;
    if (userId) {
      const deleteUser = await User.findByIdAndDelete(userId);
      return res
        .status(200)
        .json({ deletedId: userId, deleteName: deleteUser.name });
    }
    res.status(404).json({ error: "user not selected" });
  } catch (error) {
    res.status(404).json({ error: "error while deleting user" });
  }
}
