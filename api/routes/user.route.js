import express from "express";
import { deleteUser, test, updateUser } from "../controller/user.controller.js";
import { verifyUser } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/", test);
router.put("/update/:userId", verifyUser, updateUser);
router.delete("/delete/:userId", verifyUser, deleteUser);

export default router;
