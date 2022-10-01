import { Rack } from "../model/rack";
import { MappableDAO } from "./MappableDAO";

export class RackDAO {
  private readonly mappedFields = [
    "creatorId",
    "ownerId",
    "description",
    "rackLocation",
    "rackSize",
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
