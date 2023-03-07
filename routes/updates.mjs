import express from "express";
import { db } from "../mongo.mjs";

const router = express.Router();

// Get a list of 50 posts
router.get("/", async (req, res) => {
    res.send("yo").status(200);
});

// Fetches the latest posts
router.get("/latest", async (req, res) => {
    let collection = await db.collection("updates");
    let results = await collection.find().toArray();

    res.send(results).status(200);
});

// // Add a new document to the collection
router.post("/", async (req, res) => {
    let collection = await db.collection("updates");
    let newDocument = req.body;
    newDocument.date = new Date();
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
});

export default router;
