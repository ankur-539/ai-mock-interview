import { User } from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Register API
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const checkUser = await User.findOne({ email });

    if (checkUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });

    res.status(201).json({
      message: "Registration successful",
      user,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Login API
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const checkUser = await User.findOne({ email });

    if (!checkUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const match = await bcrypt.compare(password, checkUser.password);

    if (!match) {
      return res.status(401).json({
        message: "Wrong password",
      });
    }

    const token = jwt.sign(
      { id: checkUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login successful",
      token,
      user: checkUser,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const profile = async (req, res) => {

  try {

    const user = await User.findById(req.user.id).select("-password");

    res.json(user);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};