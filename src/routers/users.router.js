import express from "express";
import usersController from "../controllers/users.controller.js";

const users = express();

users.get("/", usersController.findAll);
users.post("/", usersController.create);

export default users;