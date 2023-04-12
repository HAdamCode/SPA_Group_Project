import express, {json} from 'express';
import cors from 'cors';
import storesRouter from './stores.js';
import { connectMongodb } from './util.js';

const port = 3001;
const app = express();

app.use(cors());
app.use(express.json());
//const db = await connectMongodb();
//app.set("db",db);

app.get("/", (req, res) => {
    res.json({
        code:200,
        message: "Express"
    })
})

app.use('/', storesRouter)

app.listen(port, () => {
    console.log(`Port: ${port}`)
})

