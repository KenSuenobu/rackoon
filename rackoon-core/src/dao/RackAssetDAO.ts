import { RackAsset } from "../model/rackAsset";

export class RackAssetDAO {
  async create(rackAsset: RackAsset): Promise<RackAsset> {
    return null;
  }

  async getById(id: number): Promise<RackAsset> {
    return null;
  }

  async listByCreatorId(id: number): Promise<RackAsset[]> {
    return [];
  }

  async listByRackId(id: number): Promise<RackAsset[]> {
    return [];
  }

  async list(): Promise<RackAsset[]> {
    return [];
  }

  async delete(id: number): Promise<boolean> {
    return false;
  }
}
