import { Request, Response, Router } from 'express';
import authRoute from '../api/auth';
import adminRoute from '../api/admin';

const indexApi = Router();

indexApi.use('/auth', authRoute);

indexApi.use('/admins', adminRoute);

export default indexApi;
