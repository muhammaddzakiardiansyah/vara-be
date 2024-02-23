import usersModel from "../models/users.model.js";
import argon2 from "argon2";

const usersController = {
  findAll: async (req, res) => {
    try {
      const result = await usersModel.findAll();
      return res.status(200).send({
        response: {
          statusCode: 200,
          message: "Request has successed!",
          url: "http://localhost:3001/api/v1/users",
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
        const hash = await argon2.hash(req.body?.password);
        const request = {
            ...req.body,
            password: hash,
        }
        const result = await usersModel.create(request);
        return res.status(201).send({
            response: {
              statusCode: 201,
              message: "Request has successed!",
              url: "http://localhost:3001/api/v1/users",
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

export default usersController;
