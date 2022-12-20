import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

export default {
  SERVER_POST: process.env.SERVER_POST,
  DB_URL: process.env.DB_URL || '',
  DB_NAME: process.env.DB_NAME,
  SESSION_SECRET_KEY: 'abcxyz',
};
