import { MongoClient } from 'mongodb';

export async function connectMongodb() {
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();
    console.log("Connected")
    return client.db('local');
}