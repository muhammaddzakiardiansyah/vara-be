import authModel from "../models/auth.model.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

const authController = {
  login: async (req, res) => {
    try {
      const request = {
        ...req.body,
      };
      const result = await authModel.login(request);
      const verifyPassword = await argon2.verify(
        result.password,
        req.body.password
      );
      if (verifyPassword) {
        const token = jwt.sign(
          { id: result.id, full_name: result.full_name, role: result.role },
          process.env.JWT_SECRET_KEY
        );
        return res.status(200).send({
          response: {
            statusCode: 200,
            message: "Request has successed!",
            url: "http://localhost:3001/api/v1/auth",
          },
          body: {
            data: { result, token },
          },
        });
      }
      return res.status(400).send({
        response: {
          statusCode: 400,
          message: "Request has Failed!",
          url: "http://localhost:3001/api/v1/auth",
        },
        body: {
          error: "Authentication failed!",
          message: "Email or Password incorret!",
        },
      });
    } catch (error) {
      return res.status(400).send({
        message: "Request has failed!",
        error: error.message,
      });
    }
  },
};

export default authController;
