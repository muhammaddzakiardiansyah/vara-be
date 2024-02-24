import express from "express";
import users from "./users.router.js";
import candidate from "./candidate.route.js";
import votes from "./votes.router.js";
import auth from "./auth.router.js";

const routers = express.Router();

routers.use("/users", users);
routers.use("/candidate", candidate);
routers.use("/votes", votes);
routers.use("/auth", auth);

export default routers;