import { RackAssetService } from "../model/rackAssetService";
import { MappableDAO } from "./MappableDAO";
import { RackAsset } from "../model/rackAsset";

export class RackAssetServiceDAO {
  private readonly mappedFields = [
    "creatorId",
    "rackAssetId",
    "description",
    "accessUrl",
    ...MappableDAO.commonFields,
  ];

  constructor(private db) {}

  async create(rackAssetService: RackAssetService): Promise<RackAssetService> {
    return this.db.tx((t) => {
      return t
        .one(
          "INSERT INTO rack_asset_service (creator_id, rack_asset_id, name, description, access_url) " +
            "VALUES ($1, $2, $3, $4, $5) RETURNING *",
          [
            rackAssetService.creatorId,
            rackAssetService.rackAssetId,
            rackAssetService.name,
            rackAssetService.description,
            rackAssetService.accessUrl,
          ]
        )
        .then((res) => {
          return <RackAssetService>(
            MappableDAO.mapFields(this.mappedFields, res)
          );
        });
    });
  }

  async getById(id: number): Promise<RackAssetService> {
    return this.db
      .one("SELECT * FROM rack_asset_service WHERE id=$1 LIMIT 1", [id])
      .then((result) => {
        return <RackAssetService>(
          MappableDAO.mapFields(this.mappedFields, result)
        );
      });
  }

  async listByCreatorId(creatorId: number): Promise<RackAssetService[]> {
    return this.db
      .all("SELECT * FROM rack_asset_service WHERE creatorId=$1", [creatorId])
      .then((result) => {
        return result.map(
          (res) =>
            <RackAssetService>MappableDAO.mapFields(this.mappedFields, res)
        );
      });
  }

  async listByRackAsset(rackAssetId: number): Promise<RackAssetService[]> {
    return this.db
      .all("SELECT * FROM rack_asset_service WHERE rackAssetId=$1", [
        rackAssetId,
      ])
      .then((result) => {
        return result.map(
          (res) =>
            <RackAssetService>MappableDAO.mapFields(this.mappedFields, res)
        );
      });
  }

  async list(): Promise<RackAssetService[]> {
    return this.db.all("SELECT * FROM rack_asset_service").then((result) => {
      return result.map(
        (res) => <RackAssetService>MappableDAO.mapFields(this.mappedFields, res)
      );
    });
  }

  async delete(id: number): Promise<boolean> {
    this.db.none("DELETE FROM rack_asset_service WHERE id=$1", [id]);
    return true;
  }
}
