import config from '../utils/config';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const hashPassword = (password: string) => {
  return bcrypt.hashSync(password, config.SALT_ROUND);
};

export const comparePassword = (password: string, hashPassword: string) => {
  return bcrypt.compareSync(password, hashPassword);
};

export const signJwt = (payload: any) => {
  return jwt.sign(payload, 'secretKey', {
    expiresIn: '2d',
  });
};

export const verifyJwt = (token: string) => {
  try {
    console.log(`[verifyJwt] token -> ${JSON.stringify(token)}`);
    return jwt.verify(token, 'secretKey');
  } catch (error: any) {
    console.log(`[verifyJwt] Error while verifyJwt -> ${JSON.stringify(error)}`);
  }
};
