import express from 'express';
import { jokesArray } from './jokes.js';

const app = express();

const port = process.env.PORT  || 3000;

app.get("/",(req,resp)=>resp.send("ready"));
app.get('/jokes',(req,resp)=>resp.send(jokesArray))

app.listen(port,()=>console.log(`Server is running at http://localhost:${port}`))
