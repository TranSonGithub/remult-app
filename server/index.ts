import express, { NextFunction, Request, Response } from 'express';
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

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use('/api/image', express.static(config.FILE_STORAGE_URL!));
app.use('/api', indexApi);

app.listen(config.SERVER_POST, () => {
  console.log(`Server started on port ${config.SERVER_POST}`);
});
