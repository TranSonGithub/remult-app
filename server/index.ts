import express from 'express';
import { initDbConnection } from './db';
import config from './utils/config';
import session from 'express-session';
import indexApi from './api/index';

const app = express();

initDbConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('trust proxy', 1); // trust first proxy
app.use(
  session({
    secret: config.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

app.use('/api', indexApi);

app.listen(config.SERVER_POST, () => {
  console.log(`Server started on port ${config.SERVER_POST}`);
});
