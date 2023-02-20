const { MongoClient, ServerApiVersion } = require("mongodb");

async function main() {
    const uri = `mongodb+srv://brennuck:${process.env.MONGODB_PASSWORD}@journiedb.epkam7m.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1,
    });
    client.connect((err) => {
        const collection = client.db("test").collection("devices");
        // perform actions on the collection object
        client.close();
    });
}

main().catch(console.error);
