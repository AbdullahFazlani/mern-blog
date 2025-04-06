import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorResponse, successResponse } from "../utils/ApiRequestResponse.js";
import { StatusCodes } from "http-status-codes";

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
