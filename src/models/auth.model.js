import db from "../../config/dbConnected.js";
import { v4 as uuidv4 } from "uuid";

const authModel = {
  login: (request) => {
    return new Promise((resolve, reject) => {
      const { email } = request;
      db.query(
        "select * from users where email = ?",
        [email],
        (error, result) => {
          if (error) {
            return reject({
              message: error,
            });
          } else {
            return resolve(result[0]);
          }
        }
      );
    });
  },
};

export default authModel;
