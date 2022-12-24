import { Router, Request, Response } from 'express';
import * as securityService from './../services/security';
import * as adminService from '../services/admin';

const authRoute = Router();

authRoute.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    console.log(`[login] body -> ${JSON.stringify(req.body)}`);

    const existedEmail = await adminService.getAdmin({ email });
    console.log(`[login] existedEmail -> ${JSON.stringify(existedEmail)}`);

    if (!existedEmail) {
      return res.status(400).json({ success: false, message: 'Email not found' });
    }
    const currentPassword = securityService.comparePassword(password, existedEmail.password);
    if (!currentPassword) {
      return res.status(400).json({ success: false, message: 'Password incorrect' });
    }

    const token = securityService.signJwt({ _id: existedEmail._id, email });

    return res.status(200).json({
      success: true,
      message: 'Login success',
      data: {
        token,
      },
    });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: `${err.message}` });
  }
});

export default authRoute;
