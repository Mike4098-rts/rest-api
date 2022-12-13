import { MongoClient } from "mongodb" 
import dotenv from 'dotenv'

dotenv.config()

const uri = proccess.env.MONGO_URI

const client = new MongoClient(uri)

async function useDB(collection) {
    await client.connect()

        const db = client.db("Ostebiks")
        const collection = db.collection(collection)

        return {collection, client}
}
