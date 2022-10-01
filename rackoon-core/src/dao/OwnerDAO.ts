import { Owner } from "../model/owner";

export class OwnerDAO {
  async create(owner: Owner): Promise<Owner> {
    return null;
  }

  async getById(id: number): Promise<Owner> {
    return null;
  }

  async listByCreatorId(creatorId: number): Promise<Owner[]> {
    return null;
  }

  async list(): Promise<Owner[]> {
    return [];
  }
}
