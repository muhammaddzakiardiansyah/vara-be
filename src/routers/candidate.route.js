import express from "express";
import candidateController from "../controllers/candidate.controller.js";
import fileUpload from "../../helpers/fileUpload.js";

const candidate = express();

candidate.get("/", candidateController.findAll);
candidate.post("/", fileUpload.single('profile'), candidateController.create);

export default candidate;