import express from 'express';
import { remultExpress } from 'remult/remult-express';

import config from './utils/config';
import { Test } from './entities/test';
import { MongoClient } from 'mongodb';
import { MongoDataProvider } from 'remult/remult-mongo';
import { Admin } from './entities/admin';
import { AdminController } from './api/admin';

const app = express();

app.use(
  remultExpress({
    // entities: [Test, Admin],
    controllers: [AdminController],
    dataProvider: async () => {
      try {
        const client = new MongoClient(config.DB_URL);
        await client.connect();
        return new MongoDataProvider(client.db(config.DB_NAME), client);
      } catch (e: any) {
        console.log(`[DB][connectDB] error -> ${e.message}`);
      }
    },
  })
);

app.listen(config.SERVER_POST, () => {
  console.log(`Server started on port ${config.SERVER_POST}`);
});
