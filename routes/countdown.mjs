import express from "express";
import { db } from "../mongo.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
    let collection = await db.collection("countdown");
    let query = { _id: new ObjectId("6403b7083f72fbec3d878f5e") };
    let results = await collection.findOne(query);

    res.send(results).status(200);
});

router.patch("/update", async (req, res) => {
    const query = { _id: new ObjectId("6403b7083f72fbec3d878f5e") };
    const updates = {
        $set: { coutdown: req.body.coutdown },
    };

    let collection = await db.collection("countdown");
    let result = await collection.updateOne(query, updates);

    res.send(result).status(200);
});

export default router;
