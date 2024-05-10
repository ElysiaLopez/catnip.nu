import express from "express";
import cors from "cors";
import records from "./routes/records.js";
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import { MongoClient } from 'mongodb';
import 'dotenv/config';

const PORT = process.env.PORT || 5050;
const app = express();
const uri = process.env.ATLAS_URI;

app.use(cors());
app.use(express.json());
app.use("/record", records);

//start Express server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

app.post('/signup', async (req, res)=>{
    const client = new MongoClient(uri)
    const {name, email, password} = req.body
    try{
        await client.connect()
        const database = client.db("catnipnu-data")
        const users = database.collection('users')

        const existingUser = await users.findOne({userEmail: email})
        if (!existingUser){
            const uid = uuidv4()
            const hashedPassword = bcrypt.hash(password,10)

            const data = {
                userId: uid,
                name: name,
                userEmail: email,
                userPassword: hashedPassword
            } 
            await users.insertOne(data)
            res.status(201).json({userId: uid})
        }

        res.status(401).json({error: "user already exists"})
    }catch(e){
        console.log(e)
    }finally{
        await client.close()
    }
    
})

app.post('/login', async (req, res)=>{
    const client = new MongoClient(uri)
    const {email, password} = req.body
    try{
        await client.connect()
        const database = client.db("catnipnu-data")
        const users = database.collection('users')

        const existingUser = await users.findOne({userEmail: email})
        if (!existingUser){
            res.status(401).json({error: "user doesn't exist"})
        }

        const correctPassword = bcrypt.compare(password, existingUser.userPassword)
        if (correctPassword){
            res.status(201).json({userId: existingUser.userId})
        }else{
            res.status(401).json({error: "incorrect password"})
        }
    }catch(e){
        console.log(e)
    }finally{
        await client.close()
    }
    
})