import { errorResponse } from "./ApiRequestResponse.js";
import jwt from "jsonwebtoken";

export const verifyUser = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) return errorResponse(res, "UnAuthorized!", 401);
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return errorResponse(res, "Token is not valid", 401);
    req.user = user;
    next();
  });
};
