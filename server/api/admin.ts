import { BackendMethod, remult } from 'remult';
import { Admin } from '../entities/admin';

const repoAdmin = remult.repo(Admin);

export class AdminController {
  @BackendMethod({ allowed: true })
  static async getAdmin() {
    return repoAdmin.find({});
  }
}
