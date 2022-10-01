import { Rack } from "../model/rack";
import { MappableDAO } from "./MappableDAO";

export class RackDAO {
  private readonly mappedFields = [
    {
      field: "creatorId",
      databaseField: "creator_id",
    },
    {
      field: "ownerId",
      databaseField: "owner_id",
    },
    {
      field: "description",
      databaseField: "description",
    },
    {
      field: "rackLocation",
      databaseField: "rack_location",
    },
    {
      field: "rackSize",
      databaseField: "rack_size",
    },
    ...MappableDAO.commonFields,
  ];

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
