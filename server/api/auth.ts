import { Router } from 'express';
import * as adminService from '../services/admin';

const adminRoute = Router();

adminRoute.post('/login', async (body: any) => {
  console.log(`[login] body -> ${JSON.stringify(body)}`);
  const result = await adminService.getAdmin({});
  console.log(`[login] result -> ${JSON.stringify(result)}`);

  return result;
});

export default adminRoute;
