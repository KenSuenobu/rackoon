import { RackAsset } from "../model/rackAsset";
import { MappableDAO } from "./MappableDAO";
import { Owner } from "../model/owner";

export class RackAssetDAO {
  private readonly mappedFields = [
    "creatorId",
    "rackId",
    "rackPositionStart",
    "rackPositionEnd",
    "description",
    ...MappableDAO.commonFields,
  ];

  constructor(private db) {}

  async create(rackAsset: RackAsset): Promise<RackAsset> {
    return this.db.tx((t) => {
      return t
        .one(
          "INSERT INTO rack_asset (creator_id, rack_id, rack_position_start, rack_position_end, name, description) " +
            "VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
          [
            rackAsset.creatorId,
            rackAsset.rackId,
            rackAsset.rackPositionStart,
            rackAsset.rackPositionEnd,
            rackAsset.name,
            rackAsset.description,
          ]
        )
        .then((res) => {
          return <RackAsset>MappableDAO.mapFields(this.mappedFields, res);
        });
    });
  }

  async getById(id: number): Promise<RackAsset> {
    return this.db
      .one("SELECT * FROM rack_asset WHERE id=$1 LIMIT 1", [id])
      .then((result) => {
        return <RackAsset>MappableDAO.mapFields(this.mappedFields, result);
      });
  }

  async listByCreatorId(creatorId: number): Promise<RackAsset[]> {
    return this.db
      .all("SELECT * FROM rack_asset WHERE creatorId=$1", [creatorId])
      .then((result) => {
        return result.map(
          (res) => <RackAsset>MappableDAO.mapFields(this.mappedFields, res)
        );
      });
  }

  async listByRackId(rackId: number): Promise<RackAsset[]> {
    return this.db
      .all("SELECT * FROM rack_asset WHERE rackId=$1", [rackId])
      .then((result) => {
        return result.map(
          (res) => <RackAsset>MappableDAO.mapFields(this.mappedFields, res)
        );
      });
  }

  async list(): Promise<RackAsset[]> {
    return this.db.all("SELECT * FROM rack_asset").then((result) => {
      return result.map(
        (res) => <RackAsset>MappableDAO.mapFields(this.mappedFields, res)
      );
    });
  }

  async delete(id: number): Promise<boolean> {
    await this.db.none("DELETE FROM rack_asset WHERE id=$1", [id]);
    return true;
  }
}
