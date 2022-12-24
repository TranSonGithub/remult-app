import * as securityService from './../services/security';
import { Request, Response, Router } from 'express';
import * as adminService from '../services/admin';

const adminRoute = Router();

adminRoute.post('/', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    console.log(`[createAdmin] req.body -> ${JSON.stringify(req.body)}`);

    const existedEmail = await adminService.getAdmin({ email });
    if (existedEmail) {
      return res.status(400).json({ success: true, message: 'Email existed!' });
    }

    const hashPassword = securityService.hashPassword(password);
    await adminService.createAdmin({ ...req.body, password: hashPassword });

    console.log(`[createAdmin] createAdmin -> success`);

    return res.status(201).json({ success: true, message: 'Create admin success' });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: `${err.message}` });
  }
});

export default adminRoute;
