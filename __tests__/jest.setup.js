import { MongoMemoryServer } from 'mongodb-memory-server-core';
import mongoose from 'mongoose';



beforeAll(async () => {
  const uri = "mongodb+srv://fatimaezzahrasafrani:PsYVCzyVQ7EcECdb@cluster0.bwz6ng3.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0";
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongod.stop();
});
