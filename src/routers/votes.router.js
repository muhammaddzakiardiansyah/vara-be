import express from "express";
import votesController from "../controllers/votes.controller.js";

const votes = express();

votes.get("/", votesController.findAll);
votes.get("/:vote", votesController.findByVote);
votes.post("/", votesController.create);

export default votes;