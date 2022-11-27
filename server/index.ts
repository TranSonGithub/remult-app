import express from "express";
import { remultExpress } from "remult/remult-express";

import config from "./utils/config";
import { Test } from "./entities/test";
import { MongoClient } from "mongodb";
import { MongoDataProvider } from "remult/remult-mongo";

const app = express();

app.use(
	remultExpress({
		entities: [Test],
		dataProvider: async () => {
			const client = new MongoClient(config.DB_URL);
			await client.connect();
			return new MongoDataProvider(client.db(config.DB_NAME), client);
		},
	})
);

app.listen(config.SERVER_POST);
