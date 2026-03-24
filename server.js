const express = require('express');
const path = require('path');
const { MongoClient } = require('mongodb');
const { createOrder, getOrderById, listOrders } = require('./orderService');

const app = express();
const port = process.env.PORT || 3000;

// Set this in environment or use your own connection string
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const mongoDbName = process.env.MONGODB_DB || 'testdb';

let dbClient;
let db;

async function connectMongo() {
  if (db) {
    return db;
  }

  dbClient = new MongoClient(mongoUri);
  await dbClient.connect();
  db = dbClient.db(mongoDbName);

  console.log(`Connected to MongoDB: ${mongoUri}/${mongoDbName}`);
  return db;
}

// Middleware as needed
app.use(express.json());

app.get('/api/ping', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/items', async (req, res) => {
  try {
    const database = await connectMongo();
    const items = await database.collection('items').find({}).toArray();
    res.json(items);
  } catch (err) {
    console.error('Mongo fetch error:', err);
    res.status(500).json({ error: 'Failed to fetch items' });
  }
});

app.post('/api/items', async (req, res) => {
  try {
    const database = await connectMongo();
    const item = req.body;
    const result = await database.collection('items').insertOne(item);
    res.status(201).json({ insertedId: result.insertedId });
  } catch (err) {
    console.error('Mongo insert error:', err);
    res.status(500).json({ error: 'Failed to insert item' });
  }
});

app.post('/api/orders', async (req, res) => {
  try {
    const order = await createOrder(req.body || {});
    res.status(201).json(order);
  } catch (err) {
    console.error('Order create error:', err);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

app.get('/api/orders', async (req, res) => {
  try {
    const limit = Number(req.query.limit) || 50;
    const orders = await listOrders(limit);
    res.json(orders);
  } catch (err) {
    console.error('Order fetch error:', err);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

app.get('/api/orders/:orderId', async (req, res) => {
  try {
    const order = await getOrderById(req.params.orderId);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json(order);
  } catch (err) {
    console.error('Order details error:', err);
    res.status(500).json({ error: 'Failed to fetch order details' });
  }
});

app.use(express.static(path.join(__dirname, 'nik')));

app.listen(port, async () => {
  try {
    await connectMongo();
  } catch (err) {
    console.error('Initial Mongo connect failed:', err);
  }
  console.log(`Server running at http://localhost:${port}`);
});

