const { MongoClient, ObjectId } = require('mongodb');
const QRCode = require('qrcode');

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const mongoDbName = process.env.MONGODB_DB || 'testdb';

let dbClient;
let db;

async function getDb() {
  if (db) {
    return db;
  }

  dbClient = new MongoClient(mongoUri);
  await dbClient.connect();
  db = dbClient.db(mongoDbName);
  return db;
}

function buildOrderDocument(order) {
  const items = Array.isArray(order.items) ? order.items : [];
  const totalAmount = Number(order.totalAmount) || 0;
  const orderNumber = `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

  return {
    orderNumber,
    customerName: order.customerName || 'Guest',
    customerPhone: order.customerPhone || null,
    items,
    totalAmount,
    status: 'Placed',
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

function buildQrPayload(orderDoc, orderId) {
  return JSON.stringify({
    orderId,
    orderNumber: orderDoc.orderNumber,
    totalAmount: orderDoc.totalAmount,
    status: orderDoc.status,
  });
}

async function createOrder(orderInput) {
  const database = await getDb();
  const ordersCollection = database.collection('orders');

  const orderDoc = buildOrderDocument(orderInput);
  const insertResult = await ordersCollection.insertOne(orderDoc);
  const orderId = insertResult.insertedId.toString();

  const qrPayload = buildQrPayload(orderDoc, orderId);
  const qrCodeDataUrl = await QRCode.toDataURL(qrPayload);

  await ordersCollection.updateOne(
    { _id: insertResult.insertedId },
    {
      $set: {
        qrPayload,
        qrCodeDataUrl,
        updatedAt: new Date(),
      },
    }
  );

  return {
    orderId,
    ...orderDoc,
    qrPayload,
    qrCodeDataUrl,
  };
}

async function getOrderById(orderId) {
  const database = await getDb();
  const ordersCollection = database.collection('orders');

  if (!ObjectId.isValid(orderId)) {
    return null;
  }

  const order = await ordersCollection.findOne({ _id: new ObjectId(orderId) });
  if (!order) {
    return null;
  }

  return {
    ...order,
    orderId: order._id.toString(),
  };
}

async function listOrders(limit = 50) {
  const database = await getDb();
  const ordersCollection = database.collection('orders');

  const orders = await ordersCollection
    .find({})
    .sort({ createdAt: -1 })
    .limit(limit)
    .toArray();

  return orders.map((order) => ({
    ...order,
    orderId: order._id.toString(),
  }));
}

module.exports = {
  getDb,
  createOrder,
  getOrderById,
  listOrders,
};
