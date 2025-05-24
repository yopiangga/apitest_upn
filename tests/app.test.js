import request from "supertest";
import { app } from "../app.js";
import e from "express";

describe("GET /", () => {
  it("should return a JSON response with success true and message 'ok'", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      success: true,
      message: "ok",
    });
  });
});

describe("POST Sign In", () => {
  it("should return a JSON response with success true and message 'ok'", async () => {
    const response = await request(app).post("/auth/signin").send({
      email: "user@email.com",
      password: "123456",
    });
    expect(response.statusCode).toBe(200);
    expect(response.body.token).toBeDefined();
  });
});
