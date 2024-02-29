import express from 'express';
import { AuthController } from '../controller/auth';

const router = express.Router();
const controller = new AuthController();

router.post('/login', controller.sign);
router.post('/token/refresh', controller.refreshToken);
router.put('/email/change', controller.setEmail);
router.post('/password/reset', controller.resetPassword);
router.post('/password/reset/validate', controller.validationTokenToResetPassword);
router.post('/password', controller.setPassword);
router.post('/mobile/integration', controller.appMobileIntegration);

export default router;
