import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

const itemsRouter = Router();

itemsRouter.get('/', async (req, res) => {
    // console.log(req.params.store_id)
  // TODO: Fetch the MongoDB connection pool from Application storage
  const db = req.app.get("db");
  let collection = await db.collection("Items");
  let results = await collection.find({store_id: req.params.store_id}).toArray();
//   console.log(results);
  res.send(results);
  // TODO: Retrieve all `class` documents from MongoDB using the `find` method
  // **NOTE**: You'll need to call `toArray` on the result to format it properly
});

itemsRouter.get('/:_id', async (req, res) => {
  // TODO: Fetch the MongoDB connection pool from Application storage

  // TODO: Retrieve the specified `class` document from MongoDB using the `find` method and a query
  // **TIP:** Filters are objects that match a key to a value, i.e. `{ name: 'csci446' }`
});

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

itemsRouter.delete('/:_id', async (req, res) => {
  // TODO: Fetch the MongoDB connection pool from Application storage

  // TODO: Delete the specified document using the `deleteOne` method in MongoDB
});

export { itemsRouter };