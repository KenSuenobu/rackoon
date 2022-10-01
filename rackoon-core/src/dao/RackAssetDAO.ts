import { RackAsset } from "../model/rackAsset";
import { MappableDAO } from "./MappableDAO";

export class RackAssetDAO {
  private readonly mappedFields = [
    {
      field: "creatorId",
      databaseField: "creator_id",
    },
    {
      field: "rackId",
      databaseField: "rack_id",
    },
    {
      field: "rackPositionStart",
      databaseField: "rack_position_start",
    },
    {
      field: "rackPositionEnd",
      databaseField: "rack_position_end",
    },
    {
      field: "description",
      databaseField: "description",
    },
    ...MappableDAO.commonFields,
  ];

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
