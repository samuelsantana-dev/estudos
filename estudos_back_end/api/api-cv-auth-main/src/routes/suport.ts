import express from 'express';
import SuportController from '../controller/suport';

const router = express.Router();
const controller = new SuportController();

router.post('/', controller.supportEmail);

export default router;
