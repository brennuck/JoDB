require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.static("public"));

const port = 3000;

console.log("port", process.env.port);

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}!`);
});
