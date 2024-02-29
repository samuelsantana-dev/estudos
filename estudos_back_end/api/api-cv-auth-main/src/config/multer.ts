import multer from 'multer';
import crypto from 'crypto';

const multerConfig = {
  dest: undefined,
  storage: multer.diskStorage({
    filename: (req: any, file: any, cb: any) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);

        const fileName = `${hash.toString('hex')}-${file.originalname}`;

        cb(null, fileName);
      });
    },
  }),
  fileFilter: (req: any, file: any, cb: any) => {
    const allowedMimes = [
      'image/jpeg',
      'image/pjeg',
      'image/png',
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Tipo de arquivo inválido!'));
    }
  },
};

export default multerConfig;
