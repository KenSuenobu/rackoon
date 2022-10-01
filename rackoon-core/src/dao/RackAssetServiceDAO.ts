import { RackAssetService } from "../model/rackAssetService";

export class RackAssetServiceDAO {
  async create(rackAssetService: RackAssetService): Promise<RackAssetService> {
    return null;
  }

  async getById(id: number): Promise<RackAssetService> {
    return null;
  }

  async listByCreatorId(id: number): Promise<RackAssetService[]> {
    return [];
  }

  async listByRackAsset(id: number): Promise<RackAssetService[]> {
    return [];
  }

  async list(): Promise<RackAssetService[]> {
    return [];
  }

  async delete(id: number): Promise<boolean> {
    return false;
  }
}
