import { RackAssetServicesAPIDelegate } from "../api";
import { RackAssetService } from "../model/rackAssetService";

export class RackAssetServicesAPIDelegateImpl extends RackAssetServicesAPIDelegate {
  override async createService(request: {
    payload?: RackAssetService;
  }): Promise<void> {
    return super.createService(request);
  }

  override async listServicesByName(request: {
    name?: string;
  }): Promise<RackAssetService[]> {
    return super.listServicesByName(request);
  }

  override async deleteServiceByName(request: {
    name?: string;
  }): Promise<void> {
    return super.deleteServiceByName(request);
  }
}
