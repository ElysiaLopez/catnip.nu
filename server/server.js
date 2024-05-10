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

app.post('/login', async (req, res)=>{
    const client = new MongoClient(uri)
    const {email, password} = req.body
    try{
        await client.connect()
        console.log("3")
        const database = client.db("catnipnu-data")
        const users = database.collection('users')

        const existingUser = await users.findOne({email})
        if (!existingUser){
            const uid = uuidv4()

            const data = {
                userId: uid,
                userEmail: email,
                userPassword: password
            }
            await users.insertOne(data)
            res.status(201).json({userId: uid})
        }

        const correctPassword = await bcrypt.compare(password, existingUser.password)
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