import http from "http";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import rssfeedRoute from "./src/routes/rssfeed.route.js"

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use("/", rssfeedRoute);

app.set("port", process.env.PORT);
const server = http.createServer(app);
server.on("listening", () => {
    console.log(`listening on : http://localhost:${process.env.PORT}`);
});
server.on("error", (error) => {
    console.log(error);
})
server.listen(process.env.PORT);