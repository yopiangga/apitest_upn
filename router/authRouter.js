import e from "express";

export const authRouter = e.Router();

import { signIn } from "../services/authServices.js";

authRouter.post("/signin", async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const { user, token } = await signIn(email, password);
    res.status(200).json({ user, token });
  } catch (error) {
    error.status = 401;
    next(error);
  }
});
