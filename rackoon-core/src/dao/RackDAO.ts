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

  constructor(private db) {}

  async create(rack: Rack): Promise<Rack> {
    return this.db.tx((t) => {
      return t
        .one(
          "INSERT INTO rack (creator_id, owner_id, name, description, rack_location, rack_size) VALUES " +
            "($1, $2, $3, $4, $5, $6) RETURNING *",
          [
            rack.creatorId,
            rack.ownerId,
            rack.name,
            rack.description,
            rack.rackLocation,
            rack.rackSize,
          ]
        )
        .then((res) => {
          return <Rack>MappableDAO.mapFields(this.mappedFields, res);
        });
    });
  }

  async getById(id: number): Promise<Rack> {
    return this.db
      .one("SELECT * FROM rack WHERE id=$1 LIMIT 1", [id])
      .then((result) => {
        return <Rack>MappableDAO.mapFields(this.mappedFields, result);
      });
  }

  async listByCreatorId(creatorId: number): Promise<Rack[]> {
    return this.db
      .all("SELECT * FROM rack WHERE creatorId=$1", [creatorId])
      .then((result) => {
        return result.map(
          (res) => <Rack>MappableDAO.mapFields(this.mappedFields, res)
        );
      });
  }

  async listByOwnerId(ownerId: number): Promise<Rack[]> {
    return this.db
      .all("SELECT * FROM rack WHERE ownerId=$1", [ownerId])
      .then((result) => {
        return result.map(
          (res) => <Rack>MappableDAO.mapFields(this.mappedFields, res)
        );
      });
  }

  async list(): Promise<Rack[]> {
    return this.db.all("SELECT * FROM rack").then((result) => {
      return result.map(
        (res) => <Rack>MappableDAO.mapFields(this.mappedFields, res)
      );
    });
  }
}
