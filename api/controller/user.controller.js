import { StatusCodes } from "http-status-codes";
import User from "../models/user.model.js";
import { errorResponse, successResponse } from "../utils/ApiRequestResponse.js";
import bcrypt from "bcryptjs";

export const test = (req, res) => {
  res.json({
    message: "API test route is working",
  });
};

export const updateUser = async (req, res) => {
  const { username, password, profilePicture, email } = req.body;
  if (req.user.id !== req.params.userId)
    return errorResponse(res, "You are not allowed to update this user", 403);

  let hashedPassword;
  if (password) {
    if (password.length < 6) {
      return errorResponse(
        res,
        "Password must be of atleast 6 characters",
        400
      );
    }
    hashedPassword = bcrypt.hashSync(password, 10);
  }

  if (username) {
    const usernameRegex = /^[a-z0-9]+$/; // Only lowercase letters and numbers
    if (username.length < 7 || username.length > 20) {
      return errorResponse(
        res,
        "Username must be between 7 to 20 characters",
        400
      );
    }
    if (/\s/.test(username) || !usernameRegex.test(username)) {
      return errorResponse(
        res,
        "Username must be in lowercase, contain only letters and numbers, and have no whitespaces",
        400
      );
    }
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      {
        $set: {
          username,
          ...(hashedPassword && { password: hashedPassword }), // Only set password if it exists
          profilePicture,
          email,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser;
    if (updatedUser) {
      return successResponse(
        res,
        "User updated successfully",
        StatusCodes.OK, // Changed to OK for successful update
        rest._doc
      );
    }
  } catch (error) {
    return errorResponse(res, error.message, StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export const deleteUser = async (req, res) => {
  if (req.user.id !== req.params.userId)
    return errorResponse(res, "You are not allowed to delete this user", 403);
  try {
    await User.findByIdAndDelete(req.params.userId);
    return successResponse(res, "User deleted successfully", StatusCodes.OK);
  } catch (error) {
    return errorResponse(res, error.message, StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
