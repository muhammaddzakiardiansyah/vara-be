import express from "express";
import mysql2 from "mysql2";
import dotEnv from "dotenv";
import cors from "cors";

dotEnv.config();

const port = 3001;
const BASE_URI = "/api/v1";
const app = express();

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

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());

// basic endpoint
app.get("/", (req, res) => {
    return res.status(200).send({
        api_say: 'Welcome to api vara 👋',
        apis: {
            api_chart: "http://localhost:3001/api/v1/chart"
        }
    });
});

// endpoint users

// GET ALL USERS
app.get(`${BASE_URI}/users`, (req, res) => {
    db.query('select * from users', (error, result) => {
        if(error) {
            return res.status(400).send({
                message: "Failed!",
                error: error.message,
            });
        } else {
            return res.status(200).send({
                response: {
                    statusCode: 200,
                    message: "Request has successed!",
                    url: "http://localhost:3001/api/v1/users",
                },
                body: {
                    data: result,
                }
            });
        }
    });
});


// endpoint not found
app.use("/*", (req, res) => {
    return res.status(404).send({
        response: {
            statusCode: 404,
            message: "Request not found!",
        },
        body: {
            message: "Your alone here😐",
            back_to_base_uri: "http://localhost:3001"
        }
    });
});


app.listen(port, () => {
    console.log({
        message: `Successfuly app listen on port:http://localhost:${port}`,
    });
});