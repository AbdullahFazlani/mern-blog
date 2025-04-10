import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorResponse, successResponse } from "../utils/ApiRequestResponse.js";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
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
      return errorResponse(
        res,
        "All fields are required",
        StatusCodes.BAD_REQUEST
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return errorResponse(
        res,
        "User with this email already exists",
        StatusCodes.BAD_REQUEST
      );
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    if (!user) {
      return errorResponse(res, "User not created", StatusCodes.BAD_REQUEST);
    }
    const { password: pass, ...rest } = user._doc;
    return successResponse(
      res,
      "User created successfully",
      StatusCodes.CREATED,
      rest
    );
  } catch (error) {
    return errorResponse(res, error.message, StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return errorResponse(
        res,
        "All fields are required",
        StatusCodes.BAD_REQUEST
      );
    }

    const user = await User.findOne({ email });
    if (!user) {
      return errorResponse(
        res,
        "Invalid email or password",
        StatusCodes.BAD_REQUEST
      );
    }

    const isMatch = bcryptjs.compareSync(password, user.password);
    if (!isMatch) {
      return errorResponse(
        res,
        "Invalid email or password",
        StatusCodes.BAD_REQUEST
      );
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d", // Optional: token expiration
    });

    const { password: pass, ...userWithoutPassword } = user._doc;

    return successResponse(res, "User signed in successfully", StatusCodes.OK, {
      ...userWithoutPassword,
      token,
    });
  } catch (error) {
    return errorResponse(res, error.message, StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export const google = async (req, res) => {
  const { email, name, googlePhotoUrl } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.JWT_SECRET
      );
      const { password, ...rest } = user._doc;
      return successResponse(
        res,
        "User signed in successfully",
        StatusCodes.OK,
        {
          ...rest,
          token,
        }
      );
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
          name.toLowerCase().split(" ").join("") +
          Math.random().toString(36).slice(-4),
        email,
        password: hashedPassword,
        profilePicture: googlePhotoUrl,
      });
      await newUser.save();
      const token = jwt.sign(
        { id: newUser._id, isAdmin: newUser.isAdmin },
        process.env.JWT_SECRET
      );
      const { password, ...rest } = newUser._doc;
      return successResponse(
        res,
        "User signed in successfully",
        StatusCodes.OK,
        {
          ...rest,
          token,
        }
      );
    }
  } catch (error) {
    return errorResponse(res, error.message, StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
