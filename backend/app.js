import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import rssfeedRoute from "./src/routes/rssfeed.route.js"

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use("/", rssfeedRoute);

export default app;