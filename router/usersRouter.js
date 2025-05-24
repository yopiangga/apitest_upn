import e from "express";
import { getUserByEmail, getUsers } from "../services/usersServices.js";
import { jwtAuthMiddleware } from "../middleware/jwtAuth.js";

export const usersRouter = e.Router();

usersRouter.get("/", async (req, res, next) => {
  try {
    const users = await getUsers();
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

usersRouter.get("/:email", async (req, res, next) => {
  const { email } = req.params;

  try {
    const user = await getUserByEmail(email);
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    error.status = 404;
    next(error);
  }
});
