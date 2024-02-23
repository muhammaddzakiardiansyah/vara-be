import express from "express";
import users from "./users.router.js";
import candidate from "./candidate.route.js";

const routers = express.Router();

routers.use("/users", users);
routers.use("/candidate", candidate);

export default routers;