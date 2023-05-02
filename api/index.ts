import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { handleRequest } from "bridg/app/server/request-handler";

// Import dependencies
const express = require("express");

// Create app instance
const app = express();

const db = new PrismaClient();

// Define JSON as return type
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/bridg", async (req: Request, res: Response) => {
  const { data, status } = await handleRequest(req.body, {
    db,
    rules: { default: true },
  });

  return res.status(status).json(data);
});

module.exports = {
  path: "/api",
  handler: app,
};
