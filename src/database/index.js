
const { MongoClient } = require('mongodb');

async function main() {

    const uri = process.env.MONGODB_URI;

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

