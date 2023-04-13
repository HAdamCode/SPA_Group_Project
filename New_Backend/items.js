import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

const itemsRouter = Router();

itemsRouter.get('/', async (req, res) => {
  const db = req.app.get("db");
  let collection = await db.collection("Items");
  let results = await collection.find({ store_id: req.params.store_id }).toArray();
  res.send(results);
});

itemsRouter.get('/:_id', async (req, res) => { });

itemsRouter.post('/new', async (req, res) => {
  console.log(req.params)
  req.body._id = uuidv4();
  req.body.store_id = req.params.store_id
  const db = req.app.get("db");
  console.log("Post")
  try {
    const result = await db.collection('Items').insertOne(req.body);
    console.log(result);
    res.status(201);
    res.json({
      status: 201,
      message: 'created',
    });
  } catch (e) {
    console.log(e);
    res.status(500);
    res.json({
      status: 500,
      message: e,
    });
  }
});

itemsRouter.delete('/:_id', async (req, res) => { });

export { itemsRouter };