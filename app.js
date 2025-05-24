import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import { authRouter } from "./router/authRouter.js";
import { usersRouter } from "./router/usersRouter.js";
import { jwtAuthMiddleware } from "./middleware/jwtAuth.js";

dotenv.config();

export const app = express();

app.use(cors());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Android C. 2025 - UPN Jakarta",
  });
});

app.use("/auth", authRouter);
app.use("/users", jwtAuthMiddleware, usersRouter);

app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: err.message,
  });
});

app.listen(5500, () => {
  console.log("Server is running on port 5500");
});
