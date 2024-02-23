import mysql2 from "mysql2";
import dotEnv from "dotenv";

dotEnv.config();

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;

const db = mysql2.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    port: DB_PORT,
    database: DB_NAME,
});

db.getConnection((error) => {
    if(error) {
        console.log({
            message: 'Database failed connection!',
            error: error,
        });
    } else {
        console.log({
            message: 'Database success connected!'
        });
    }
});

export default db;