const { MongoClient } = require("mongodb");

async function main() {
    console.log("process.env", process.env.MONGODB_PASSWORD);
    const uri = `mongodb+srv://brennuck:console.log(Hi2933)@journiedb.epkam7m.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
    });
    await client.connect();

    const cursor = client.db("prod_updates").collection("updates").find();

    const results = await cursor.toArray();
    if (results.length > 0) {
        console.log(`Found ${results.length} listing(s):`);
        results.forEach((result, i) => {
            console.log("Date:", result.date);
            console.log("Update:", result.update);
            console.log("Color:", result.color);
        });
    }
    client.close();
}

main().catch(console.error);
