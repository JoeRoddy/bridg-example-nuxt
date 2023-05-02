import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

// Import dependencies
const express = require("express");

// Create app instance
const app = express();

const db = new PrismaClient();

// Define JSON as return type
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/bridg", async (req: Request, res: Response) => {
  const data = await db.user.findMany();
  res.json({ message: "hello bridg", data });
});

module.exports = {
  path: "/api",
  handler: app,
};
