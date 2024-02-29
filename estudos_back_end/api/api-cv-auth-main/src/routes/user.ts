import express from 'express';
import multer from 'multer';
import multerConfig from '../config/multer';
import { UserController } from '../controller/user';
import Middleware from './middleware';

const router = express.Router();
const controller = new UserController();
const middleware = new Middleware();

router.get('/profile', middleware.auth, controller.getProfile);

router.get('/roles/:id', middleware.auth, controller.roles);
router.get('/privacy', UserController.findPrivacyTerms);
router.get('/:profileId', middleware.auth, controller.getUser);

router.post('/privacy', UserController.acceptPrivacyTerms);
router.post('/privacy/create', UserController.createPrivacyTerm);
router.put('/', middleware.auth, controller.setUser);
router.put('/password', middleware.auth, controller.changePassword);
router.put('/image', middleware.auth, multer(multerConfig).single('userImg'), controller.saveImg);
router.put('/inactivate/:userId', middleware.auth, controller.inactivateUser);

export default router;
