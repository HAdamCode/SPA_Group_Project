import express from 'express';
import cors from 'cors';
// import storeRouter from './store.js';
import { connectMongodb } from './util.js';

const port = 3001;
const app = express();

app.use(cors());
app.use(express.json());
// Database connection here
// const db = await connectMongodb();
// app.set("db",db);


