import express, {Router} from 'express'
// import {itemsRouter} from './items'

const storesRouter = express.Router();
// itemsRouter.mergeParams = true;
// storesRouter.use("/:store_id/items", itemsRouter)

storesRouter.get('/stores', async(req, res) => {
    const db = req.app.get('db')
    let results = await db.collection("Stores").find({}).toArray();

    console.log(results)
    res.send(results)
})

export{storesRouter}