import express from 'express';
import UserRouter from './user';
import AuthRouter from './auth';
import UpdateRouter from './update';
import Middleware from './middleware';
import SuportRouter from './suport';
import RolesRouter from './roles';

const router = express.Router();
const middleware = new Middleware();

router.use('/auth', AuthRouter);
router.use('/update', UpdateRouter);
router.use('/user', UserRouter);
router.use('/support', middleware.auth, SuportRouter);
router.use('/roles', middleware.auth, RolesRouter);

export default router;
