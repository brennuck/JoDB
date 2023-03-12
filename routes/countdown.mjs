import express from "express";
import { db } from "../mongo.mjs";
import { ObjectId } from "mongodb";
import { Vonage } from "@vonage/server-sdk";

const router = express.Router();

const vonage = new Vonage({
    apiKey: process.env.VONAGE_API_KEY,
    apiSecret: process.env.VONAGE_API_SECRET,
});

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
    const numbers = process.env.NUMBERS.split(" ");

    numbers.map((number, index) => {
        console.log("number", number);
    });
    // await vonage.sms
    //     .send({
    //         to: "18018792933",
    //         from: process.env.VONAGE_FROM_NUMBER,
    //         text: "Hospital Journey Updates\nKayla and Brennon are on their way to the hospital to give birth\nFollow along their journey at https://journieupdates.com/",
    //     })
    //     .then((resp) => {
    //         console.log("Message sent successfully");
    //         console.log(resp);
    //     })
    //     .catch((err) => {
    //         console.log("There was an error sending the messages.");
    //         console.error(err);
    //     });
});

export default router;
