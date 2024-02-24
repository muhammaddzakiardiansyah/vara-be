import express from "express";
import cors from "cors";
import routers from "./src/routers/index.js";

const port = 3001;
const app = express();

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());
app.use("/images", express.static('public'));

app.use('/api/v1', routers);

// basic endpoint
app.get("/", (req, res) => {
    return res.status(200).send({
        api_say: 'Welcome to api vara 👋'
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