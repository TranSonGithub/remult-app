import Multer from 'multer';
import { Request } from 'express';
import config from '../utils/config';

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

export const storage = Multer.diskStorage({
  destination: function (req: Request, file: Express.Multer.File, cb: DestinationCallback) {
    cb(null, config.FILE_STORAGE_URL);
  },
  filename: function (req: Request, file: Express.Multer.File, cb: FileNameCallback): void {
    const uniqueSuffix = Date.now() + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}.${file.originalname}`);
  },
});

export const getImgUrl = (file: Express.Multer.File) => {
  console.log(`[getImgUrl] file -> ${JSON.stringify(file)}`);
  return `${config.FILE_BASE_URL}/${file.filename}`;
};

export default Multer({
  storage: storage,
});
