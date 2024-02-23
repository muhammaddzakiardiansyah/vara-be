import db from "../../config/dbConnected.js";
import { v4 as uuidv4 } from "uuid";

const candidateModel = {
  findAll: (req, res) => {
    return new Promise((resolve, reject) => {
      db.query("select * from candidate", (error, result) => {
        if (error) {
          return reject({
            message: error,
          });
        } else {
          return resolve(result);
        }
      });
    });
  },
  create: (request) => {
    return new Promise((resolve, reject) => {
      const { name_candidate, profile, slogan, candidate_number } = request;
      db.query(
        "insert into candidate (id, name_candidate, profile, slogan, candidate_number) values (?, ?, ?, ?, ?)",
        [uuidv4(), name_candidate, profile, slogan, candidate_number],
        (error, result) => {
          if (error) {
            return reject({
              message: error,
            });
          } else {
            return resolve(result);
          }
        }
      );
    });
  },
};

export default candidateModel;
