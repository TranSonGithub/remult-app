import { Router } from 'express';
import authRoute from '../api/auth';

const indexApi = Router();

indexApi.use('/auth', authRoute);

export default indexApi;
