import { RackAssetService } from "../model/rackAssetService";
import { MappableDAO } from "./MappableDAO";

export class RackAssetServiceDAO {
  private readonly mappedFields = [
    "creatorId",
    "rackAssetId",
    "description",
    "accessUrl",
    ...MappableDAO.commonFields,
  ];

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
