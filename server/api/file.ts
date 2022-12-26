import { Request, Response, Router } from 'express';
import multer, { getImgUrl } from '../services/file';

const fileRoute = Router();

fileRoute.post('/upload', multer.single('file'), (req: Request, res: Response) => {
  try {
    const file: any = req.file;
    console.log(`[POST][uploadSingleFile] file ->`, req.file);

    if (!file) {
      return res.status(400).json({ success: false, message: 'File is required' });
    }

    console.log(`[POST][uploadSingleFile] upload file success`);
    return res.status(200).json({ message: 'Upload file success', link: getImgUrl(file) });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: `${error.message}` });
  }
});

export default fileRoute;
