import express from 'express';
import { RolesController } from '../controller/roles';

const router = express.Router();

const Rolescontroller = new RolesController();

router.get('/all', Rolescontroller.getAllRoles);
router.get('/permission/all', Rolescontroller.getAllPermissions);
router.get('/permission/:id', Rolescontroller.getRoleById);
router.get('/:id', Rolescontroller.getRoleById);

router.post('/new', Rolescontroller.newRole);
router.post('/permission/new', Rolescontroller.newPermission);
router.post('/link-user', Rolescontroller.linkRoleToUser);
router.post('/link-permission', Rolescontroller.linkRoleToPermission);
router.post('/link-permission-to-user', Rolescontroller.linkPermissionToUser);

router.put('/:id', Rolescontroller.editRole);
router.put('/permission/:id', Rolescontroller.editPermission);

router.delete('/:id', Rolescontroller.removetRole);
router.delete('/permission/:id', Rolescontroller.removetPermission);

export default router;
