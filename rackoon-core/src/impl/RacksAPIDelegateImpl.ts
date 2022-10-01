import { RacksAPIDelegate } from "../api";
import { Rack } from "../model/rack";

export class RacksAPIDelegateImpl extends RacksAPIDelegate {
  override async createRack(request: { payload?: Rack }): Promise<void> {
    return super.createRack(request);
  }

  override async deleteRack(request: { name?: string }): Promise<void> {
    return super.deleteRack(request);
  }

  override async listRacksByOwner(request: { name?: string }): Promise<Rack[]> {
    return super.listRacksByOwner(request);
  }
}
