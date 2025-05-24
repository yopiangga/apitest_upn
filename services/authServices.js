import { generateToken } from "../helper/jwtHelper.js";
import prisma from "../prisma/index.js";

export async function signIn(email, password) {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordValid = user.password === password;

  if (!isPasswordValid) {
    throw new Error("Invalid password");
  }

  const token = generateToken(user.id.toString(), user.email);

  return {
    user,
    token,
  };
}
