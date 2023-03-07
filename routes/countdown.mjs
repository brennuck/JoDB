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
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = twilio(accountSid, authToken);
    const numbers = [
        "+18018577283",
        "+18018792933",
        "+18018706437",
        "+18017194724",
        "+18015549742",
        "+18015540924",
        "+18018797921",
        "+18014482502",
        "+18015052098",
        "+18015052098",
        "+18014482334",
        "+18018705507",
        "+13852042525",
        "+18013863522",
        "+18018703513",
        "+18018210113",
        "+18018705657",
        "+18019398995",
        "+13854450886",
        "+13852530084",
        "+14357730614",
        "+15095917659",
    ];

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
