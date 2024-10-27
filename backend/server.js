import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import connectToMongoDB from './db/connecttoMongoDB.js';

const PORT = process.env.PORT||5000;
const app = express();
dotenv.config();


app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)
app.use("/api/users",userRoutes)

app.get("/" , (req , res)=>{
    res.send("<h1>hello!!</h1>")
})
app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`listening on port ${PORT}`)
});