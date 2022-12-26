import { Request, Response, Router } from 'express';
import authRoute from './auth';
import adminRoute from './admin';
import fileRoute from './file';
import menuRoute from './menu';
import orderRoute from './order';

const indexApi = Router();

indexApi.use('/auth', authRoute);
indexApi.use('/admins', adminRoute);
indexApi.use('/files', fileRoute);
indexApi.use('/menus', menuRoute);
indexApi.use('/orders', orderRoute);

export default indexApi;
