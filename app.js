import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import updates from "./routes/updates.mjs";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/updates", updates);

app.use((err, _req, res, next) => {
    res.status(500).send("Uh oh! An unexpected error occured.");
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`server running on port ${process.env.PORT || 5000}!`);
});
