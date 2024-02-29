import express from 'express';
import { UserController } from '../controller/user';

const router = express.Router();
const controller = new UserController();

router.put('/user', controller.mergeUser);

export default router;
