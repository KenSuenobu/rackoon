import { Owner } from "../model/owner";
import { MappableDAO } from "./MappableDAO";

export class OwnerDAO {
  private readonly mappedFields = [
    {
      field: "creatorId",
      databaseField: "creator_id",
    },
    {
      field: "address1",
      databaseField: "address1",
    },
    {
      field: "address2",
      databaseField: "address2",
    },
    {
      field: "city",
      databaseField: "city",
    },
    {
      field: "state",
      databaseField: "state",
    },
    {
      field: "zipcode",
      databaseField: "zipcode",
    },
    {
      field: "companyName",
      databaseField: "company_name",
    },
    {
      field: "primaryContact",
      databaseField: "primary_contact",
    },
    {
      field: "primaryEmail",
      databaseField: "primary_email",
    },
    {
      field: "primaryPhone",
      databaseField: "primary_phone",
    },
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
