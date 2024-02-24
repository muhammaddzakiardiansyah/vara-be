import votesModel from "../models/votes.model.js";

const votesController = {
  findAll: async (req, res) => {
    try {
      const result = await votesModel.findAll();
      return res.status(200).send({
        response: {
          statusCode: 200,
          message: "Request has successed!",
          url: "http://localhost:3001/api/v1/votes",
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
  findByVote: async (req, res) => {
    try {
      const result = await votesModel.findByVote(req.params.vote);
      return res.status(200).send({
        response: {
          statusCode: 200,
          message: "Request has successed!",
          url: `http://localhost:3001/api/v1/votes/${req.params.vote}`,
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
        }
        const result = await votesModel.create(request);
        return res.status(201).send({
            response: {
              statusCode: 201,
              message: "Request has successed!",
              url: "http://localhost:3001/api/v1/votes",
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

export default votesController;
