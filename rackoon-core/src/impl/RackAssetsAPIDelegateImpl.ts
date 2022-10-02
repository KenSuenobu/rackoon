import { RackAssetsAPIDelegate } from "../api";
import { RackAsset } from "../model/rackAsset";
import { RackAssetDAO } from "../dao/RackAssetDAO";

export class RackAssetsAPIDelegateImpl extends RackAssetsAPIDelegate {
  private readonly rackAssetDao: RackAssetDAO;

  constructor(private dbInstance) {
    super();
    this.rackAssetDao = new RackAssetDAO(dbInstance);
  }

  override async createAsset(request: { payload?: RackAsset }): Promise<void> {
    if (!request.payload) {
      throw new Error("Missing rack asset.");
    }

    const rackAsset = await this.rackAssetDao.create(request.payload);

    if (rackAsset.id) {
      return;
    }

    throw new Error("Unable to create rack asset object.");
  }

  override async listEquipmentByRackName(request: {
    name?: string;
  }): Promise<RackAsset[]> {
    return super.listEquipmentByRackName(request);
  }
}
