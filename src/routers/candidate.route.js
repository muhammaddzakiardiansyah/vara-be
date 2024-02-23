import express from "express";
import candidateController from "../controllers/candidate.controller.js";

const candidate = express();

candidate.get("/", candidateController.findAll);
candidate.post("/", candidateController.create);

export default candidate;