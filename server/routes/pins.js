import express from "express";

// This will help us connect to the database
import db from "../db/connection.js";

// This help convert the id from string to ObjectId for the _id.
import { ObjectId } from "mongodb";

// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const router = express.Router();

//gets list of all pins
router.get("/", async (req, res) => {
    let collection = await db.collection("mappins");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});

//creates a new pin
router.post("/", async (req, res) => {
    try {
        let newDocument = {
            organization: req.body.organization,
            position: req.body.position,
            tags: req.body.tags,
            description: req.body.description,
        };
        let collection = db.collection("mappins");
        let result = await collection.insertOne(newDocument);
        res.send(result).status(204);
    }
    catch (err) {
        console.error(err);
        res.status(500).send("Error adding record");
    }
});

export default router;