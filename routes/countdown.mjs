import express from "express";
import { db } from "../mongo.mjs";
import { ObjectId } from "mongodb";
import { default as twilio } from "twilio";

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

router.post("/text", async (req, res) => {
    const accountSid = "ACbb47c0aec3e6118ee42f8435a3662894";
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = twilio(accountSid, authToken);
    const numbers = ["+18018577283", "+18018792933"];

    numbers.map((number, index) => {
        setTimeout(() => {
            client.messages.create({
                body: "Hospital Journey Updates\nKayla and Brennon are on their way to the hospital to give birth\nFollow along their journey at https://journieupdates.com/",
                from: "+15746525521",
                to: number,
            });
        }, 2000 * index);
    });
});

export default router;
