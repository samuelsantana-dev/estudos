import { Request, Response } from 'express';
import {
  allroles,
  createRole,
  roleById,
  updateRole,
  deleteRole,
  createPermission,
  permissionById,
  allPermissions,
  linkRoleToPermission,
  deletePermission,
  linkPermissionToUser,
  updatePermission, linkRoleToUser,
} from '../repository/utils/roles';

export class RolesController {
  public async newRole(req: Request, res: Response) {
    const { name, description } = req.body;
    const { codeHttp, ...response } = await createRole(name, description);
    return res.status(codeHttp).json(response);
  }

  public async editRole(req: Request, res: Response) {
    const { id } = req.params;
    const { name, description } = req.body;
    const { codeHttp, ...response } = await updateRole(id, name, description);
    return res.status(codeHttp).json(response);
  }

  public async removetRole(req: Request, res: Response) {
    const { id } = req.params;
    const { codeHttp, ...response } = await deleteRole(id);
    return res.status(codeHttp).json(response);
  }

  public async getRoleById(req: Request, res: Response) {
    const { id } = req.params;
    const { codeHttp, ...response } = await roleById(id);
    return res.status(codeHttp).json(response);
  }

  public async getAllRoles(_req: Request, res: Response) {
    const { codeHttp, ...response } = await allroles();
    return res.status(codeHttp).json(response);
  }

  public async newPermission(req: Request, res: Response) {
    const { name, description } = req.body;
    const { codeHttp, ...response } = await createPermission(name, description);
    return res.status(codeHttp).json(response);
  }

  public async editPermission(req: Request, res: Response) {
    const { id } = req.params;
    const { name, description } = req.body;
    const { codeHttp, ...response } = await updatePermission(id, name, description);
    return res.status(codeHttp).json(response);
  }

  public async removetPermission(req: Request, res: Response) {
    const { id } = req.params;
    const { codeHttp, ...response } = await deletePermission(id);
    return res.status(codeHttp).json(response);
  }

  public async getPermissionById(req: Request, res: Response) {
    const { id } = req.params;
    const { codeHttp, ...response } = await permissionById(id);
    return res.status(codeHttp).json(response);
  }

  public async getAllPermissions(_req: Request, res: Response) {
    const { codeHttp, ...response } = await allPermissions();
    return res.status(codeHttp).json(response);
  }

  public async linkRoleToUser(req: Request, res: Response) {
    const { personId, roleId } = req.query;
    const { codeHttp, ...response } = await linkRoleToUser(personId as string, roleId as string);
    return res.status(codeHttp).json(response);
  }

  public async linkRoleToPermission(req: Request, res: Response) {
    const { roleId, permissionId } = req.query;
    const {
      codeHttp,
      ...response
    } = await linkRoleToPermission(roleId as string, permissionId as string);
    return res.status(codeHttp).json(response);
  }

  public async linkPermissionToUser(req: Request, res: Response) {
    const { personId, permissionId } = req.query;
    const {
      codeHttp,
      ...response
    } = await linkPermissionToUser(personId as string, permissionId as string);
    return res.status(codeHttp).json(response);
  }
}
