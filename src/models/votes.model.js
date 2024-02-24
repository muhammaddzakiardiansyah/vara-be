import db from "../../config/dbConnected.js";
import { v4 as uuidv4 } from "uuid";

const votesModel = {
  findAll: (req, res) => {
    return new Promise((resolve, reject) => {
      db.query("select * from votes", (error, result) => {
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
  findByVote: (id) => {
    return new Promise((resolve, reject) => {
      db.query("select count(*) as total_vote from votes where vote = ?", [id], (error, result) => {
        if (error) {
          return reject({
            message: error,
          });
        } else {
          return resolve(result[0]);
        }
      });
    });
  },
  create: (request) => {
    return new Promise((resolve, reject) => {
      const { user_id, vote } = request;
      db.query('select * from votes where user_id = ?', [user_id], (error, resultGet) => {
        console.log(resultGet.find((id) => user_id));
        if(resultGet.find((id) => user_id)) {
          console.log(resultGet.length);
          return reject({
            message: 'Kamu telah menggunakan hak suaramu',
          });
        } else {
          db.query(
            "insert into votes (id, user_id, vote) values (?, ?, ?)",
            [uuidv4(), user_id, vote],
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
        }
      })
    });
  },
};

export default votesModel;
