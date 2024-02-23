import candidateModel from "../models/candidate.model.js";

const candidateController = {
  findAll: async (req, res) => {
    try {
      const result = await candidateModel.findAll();
      return res.status(200).send({
        response: {
          statusCode: 200,
          message: "Request has successed!",
          url: "http://localhost:3001/api/v1/candidate",
        },
        body: {
          data: result,
        },
      });
    } catch (error) {
        return res.status(400).send({
            message: "Request has failed!",
            error: error.message
        });
    }
  },
  create: async (req, res) => {
    try {
        const request = {
            ...req.body,
            profile: req.file?.filename,
        }
        const result = await candidateModel.create(request);
        return res.status(201).send({
            response: {
              statusCode: 201,
              message: "Request has successed!",
              url: "http://localhost:3001/api/v1/candidate",
            },
            body: {
              data: result,
            },
          });
    } catch (error) {
        return res.status(400).send({
            message: "Request has failed!",
            error: error.message
        });
    }
  }
};

export default candidateController;
