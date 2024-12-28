import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

const uri = "mongodb+srv://phokukseng:BF5uFtnRsemXp510@cluster0.t3ptb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// MongoDB connection handling
if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Fake Product Data for testing
const fakeProducts = [
  {
    name: 'Product 1',
    price: 100,
    description: 'This is a fake product for testing.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Product 2',
    price: 200,
    description: 'This is another fake product.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Product 3',
    price: 300,
    description: 'Yet another fake product.',
    image: 'https://via.placeholder.com/150',
  },
];

// Insert fake products into MongoDB
export async function POST() {
  try {
    const client = await clientPromise;
    const db = client.db("store");
    const result = await db.collection("products").insertMany(fakeProducts);
    return NextResponse.json({ message: 'Fake products inserted successfully', result });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to insert fake products' }, { status: 500 });
  }
}
