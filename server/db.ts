import config from './utils/config';
import mongoose from 'mongoose';

export const initDbConnection = async () => {
  mongoose.set('strictQuery', false);
  mongoose
    .connect(config.DB_URL)
    .then(() => {
      console.log('Database connect successfully.');
    })
    .catch((err: any) => {
      console.error(`Error connecting: ${err.message}`);
    });
};
