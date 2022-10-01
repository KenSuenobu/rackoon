import { Owner } from "../model/owner";
import { MappableDAO } from "./MappableDAO";
import { Member } from "../model/member";

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

  constructor(private db) {}

  async create(owner: Owner): Promise<Owner> {
    return this.db.tx((t) => {
      return t
        .one(
          "INSERT INTO owner (creator_id, name, address_1, address_2, city, state, zipcode, company_name, primary_contact, " +
            "primary_email, primary_phone) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *",
          [
            owner.creatorId,
            owner.name,
            owner.address1,
            owner.address2,
            owner.city,
            owner.state,
            owner.zipcode,
            owner.companyName,
            owner.primaryContact,
            owner.primaryEmail,
            owner.primaryPhone,
          ]
        )
        .then((res) => {
          return <Owner>MappableDAO.mapFields(this.mappedFields, res);
        });
    });
  }

  async getById(id: number): Promise<Owner> {
    return this.db
      .one("SELECT * FROM owner WHERE id=$1 LIMIT 1", [id])
      .then((result) => {
        return <Owner>MappableDAO.mapFields(this.mappedFields, result);
      });
  }

  async listByCreatorId(creatorId: number): Promise<Owner[]> {
    return this.db
      .all("SELECT * FROM owner WHERE creatorId=$1", [creatorId])
      .then((result) => {
        return result.map(
          (res) => <Owner>MappableDAO.mapFields(this.mappedFields, res)
        );
      });
  }

  async list(): Promise<Owner[]> {
    return this.db.all("SELECT * FROM owner").then((result) => {
      return result.map(
        (res) => <Owner>MappableDAO.mapFields(this.mappedFields, res)
      );
    });
  }
}
