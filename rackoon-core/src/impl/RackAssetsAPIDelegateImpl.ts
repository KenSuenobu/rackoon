import { RackAssetsAPIDelegate } from "../api";
import { RackAsset } from "../model/rackAsset";

export class RackAssetsAPIDelegateImpl extends RackAssetsAPIDelegate {
  override async createAsset(request: { payload?: RackAsset }): Promise<void> {
    return super.createAsset(request);
  }

  override async listEquipmentByRackName(request: {
    name?: string;
  }): Promise<RackAsset[]> {
    return super.listEquipmentByRackName(request);
  }
}
