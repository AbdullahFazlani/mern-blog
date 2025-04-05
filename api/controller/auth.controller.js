import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (
      !username ||
      !email ||
      !password ||
      username === "" ||
      email === "" ||
      password === ""
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    if (!user) {
      return res.status(400).json({ message: "User not created" });
    }
    const { password: pass, ...rest } = user._doc;
    res.status(201).json({ message: "User created successfully", user: rest });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
