import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import { db } from "./mongo.mjs";

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.get("/hello", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.get("/updates", async (req, res) => {
    let collection = await db.collection("updates");
    let results = await collection.find().toArray();

    res.send(results).status(200);
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`Example app listening on port ${process.env.PORT || 5000}!`);
});
