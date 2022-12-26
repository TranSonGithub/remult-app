import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

export default {
  SERVER_POST: Number(process.env.SERVER_POST),
  DB_URL: process.env.DB_URL || '',
  DB_NAME: process.env.DB_NAME,
  SESSION_SECRET_KEY: 'abcxyz',

  SALT_ROUND: 10,

  // File
  FILE_STORAGE_URL: 'public',
  FILE_BASE_URL: 'http://localhost:5000/api/image',
  FILE_MAX_SIZE: 10000,
};
