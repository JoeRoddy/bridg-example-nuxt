import { Request, Response } from "express";

// Import dependencies
const express = require("express");

// Create app instance
const app = express();

// Define JSON as return type
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/bridg", (req: Request, res: Response) => {
  res.json({ message: "hello bridg" });
});

module.exports = {
  path: "/api",
  handler: app,
};
