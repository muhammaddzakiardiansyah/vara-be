import db from "../../config/dbConnected.js";
import { v4 as uuidv4 } from "uuid";

const usersModel = {
  findAll: (req, res) => {
    return new Promise((resolve, reject) => {
      db.query("select * from users", (error, result) => {
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
      const { full_name, email, password, role = 'user' } = request;
      db.query(
        "insert into users (id, full_name, email, password, role) values (?, ?, ?, ?, ?)",
        [uuidv4(), full_name, email, password, role],
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

export default usersModel;
