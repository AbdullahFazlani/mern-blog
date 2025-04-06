import { StatusCodes } from "http-status-codes";

export const errorResponse = (res, message, statusCode, payload) => {
  return res
    .status(statusCode ?? StatusCodes.BAD_REQUEST)
    .json({ status: "error", message: message, data: payload });
};

export const successResponse = (res, message, statusCode, payload) => {
  return res
    .status(statusCode ?? StatusCodes.OK)
    .json({ status: "success", message: message, data: payload });
};
