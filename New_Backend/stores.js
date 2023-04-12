import express, { Router } from 'express';
import { itemsRouter } from './items.js'
import { v4 as uuidv4 } from 'uuid';

const storesRouter = express.Router();
itemsRouter.mergeParams = true;
storesRouter.use("/:store_id/items", itemsRouter);

storesRouter.post('/stores/new', async (req, res) => {
    const requestBody = req.body;
    requestBody._id = uuidv4();

    const db = req.app.get("db");

    try {
      const result = await db.collection('Stores').insertOne(req.body);
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

storesRouter.get('/stores', async (req, res) => {
    const db = req.app.get("db");
    
    let results = await db.collection("Stores").find({}).toArray();
    
    if(results == null){
      res.status(404);
      res.json({
        status:404,
        message: 'not found',
      })
    }

    console.log(results);
    res.send(results);
  }
);

storesRouter.get('/stores/:store_id', async (req, res) => {
  const db = req.app.get("db");

  const postId = req.params.postId;
  let queryableId;

  try {
    queryableId = new ObjectId(postId);
  } catch (e) {
    queryableId = postId;
  }
  try {
    const post = await db.collection('posts').findOne({ _id: queryableId });
    if (post === null) {
      res.status(404);
      res.json({
        status: 404,
        message: 'not found',
      });
      return;
    }

    res.json(post);
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send('');
  }
});

export { storesRouter };