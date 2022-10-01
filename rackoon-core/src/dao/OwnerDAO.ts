import { Owner } from "../model/owner";
import { MappableDAO } from "./MappableDAO";

export class OwnerDAO {
  private readonly mappedFields = [
    "creatorId",
    "address1",
    "address2",
    "city",
    "state",
    "zipcode",
    "companyName",
    "primaryContact",
    "primaryEmail",
    "primaryPhone",
    ...MappableDAO.commonFields,
  ];

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
