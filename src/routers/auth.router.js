import express from "express";
import authController from "../controllers/auth.controller.js";

const auth = express();

auth.post("/login", authController.login);

export default auth;