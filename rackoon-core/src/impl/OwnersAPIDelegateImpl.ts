import { OwnersAPIDelegate } from "../api";
import { Owner } from "../model/owner";

export class OwnersAPIDelegateImpl extends OwnersAPIDelegate {
  override async createOwner(request: { payload?: Owner }): Promise<void> {
    return super.createOwner(request);
  }

  override async getOwnerByName(request: { name?: string }): Promise<Owner> {
    return super.getOwnerByName(request);
  }

  override async listOwners(request: {}): Promise<Owner[]> {
    return super.listOwners(request);
  }
}
