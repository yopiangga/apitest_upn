import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET || "yopiangga123";

export function generateToken(id, email) {
  const token = jwt.sign({ id, email }, secret, {
    expiresIn: "1h",
  });
  return token;
}
