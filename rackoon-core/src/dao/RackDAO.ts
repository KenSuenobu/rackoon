import { Rack } from "../model/rack";

export class RackDAO {
  async create(rack: Rack): Promise<Rack> {
    return null;
  }

  async getById(id: number): Promise<Rack> {
    return null;
  }

  async listByCreatorId(id: number): Promise<Rack[]> {
    return [];
  }

  async listByOwnerId(id: number): Promise<Rack[]> {
    return [];
  }

  async list(): Promise<Rack[]> {
    return [];
  }
}
