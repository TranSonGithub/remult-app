import { Request, Response, Router } from 'express';
import authRoute from './auth';
import adminRoute from './admin';
import fileRoute from './file';
import menuRoute from './menu';

const indexApi = Router();

indexApi.use('/auth', authRoute);
indexApi.use('/admins', adminRoute);
indexApi.use('/files', fileRoute);
indexApi.use('/menus', menuRoute);

export default indexApi;
