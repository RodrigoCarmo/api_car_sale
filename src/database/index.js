
const { MongoClient } = require('mongodb');

async function main() {

    const uri = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("Banco de dados tá bala pae😎😎")
    } catch (e) {
        console.log(e);
    } finally {
        await client.close();
    }
}



main().catch(console.error);

