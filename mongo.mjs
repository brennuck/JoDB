// const { MongoClient } = require("mongodb");
require("dotenv").config();

// async function getUpdates() {
//     console.log("process.env", process.env.MONGODB_PASSWORD);
//     const uri = `mongodb+srv://brennuck:${process.env.MONGODB_PASSWORD}@journiedb.epkam7m.mongodb.net/?retryWrites=true&w=majority`;
//     const client = new MongoClient(uri, {
//         useNewUrlParser: true,
//     });
//     try {
//         await client.connect();

//         const cursor = client.db("prod_updates").collection("updates").find();

//         // const docs = {
//         //     date: new Date(),
//         //     update: "Testing",
//         //     color: "default",
//         // };
//         // const result = await cursor.insert(docs);

//         // console.log("result ====>", result);

//         const results = await cursor.toArray();
//         if (results.length > 0) {
//             console.log(`Found ${results.length} listing(s):`);
//             results.forEach((result, i) => {
//                 console.log("Date:", result.date);
//                 console.log("Update:", result.update);
//                 console.log("Color:", result.color);
//             });
//         }
//     } finally {
//         client.close();
//     }
// }

// getUpdates().catch(console.error);

import { MongoClient } from "mongodb";

const connectionString = `mongodb+srv://brennuck:${process.env.MONGODB_PASSWORD}@journiedb.epkam7m.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(connectionString);

let conn;
try {
    conn = await client.connect();
} catch (e) {
    console.error(e);
}

let db = conn.db("prod_updates");

export default db;
